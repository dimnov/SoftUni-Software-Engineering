function attachEvents() {
  const inputLocation = document.getElementById('location');
  const getWeatherBtn = document.getElementById('submit');
  const forecast = document.getElementById('forecast');
  const currentWeather = document.getElementById('current');
  const upcomingWeather = document.getElementById('upcoming');

  const conditions = {
    Sunny: '&#x2600;', // ☀
    'Partly sunny': '&#x26C5;', // ⛅
    Overcast: '&#x2601;', // ☁
    Rain: '&#x2614;', // ☂
    Degrees: '&#176;',   // °
  }

  getWeatherBtn.addEventListener('click', getWeather);

  function getWeather() {
    fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
      .then(res => res.json())
      .then(data => {
        const cityIndex = data.findIndex(city => city.name === inputLocation.value);
        forecast.style.display = 'block';

        if (cityIndex === -1) {
          throw new Error();
        }

        let cityCode = data[cityIndex].code;

        fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`)
          .then(res => res.json())
          .then(data => {
            const forecasts = document.createElement('div');
            forecasts.className = 'forecasts';

            const condtSymbol = document.createElement('span');
            condtSymbol.className = 'condition symbol';
            condtSymbol.innerHTML = conditions[data.forecast.condition];
            forecasts.appendChild(condtSymbol);

            let condition = document.createElement('span');
            condition.className = 'condition';

            const span1 = document.createElement('span');
            span1.className = 'forecast-data';
            span1.textContent = data.name;
            condition.appendChild(span1);

            const span2 = document.createElement('span');
            span2.className = 'forecast-data';
            span2.innerHTML = `${data.forecast.low}${conditions.Degrees}/${data.forecast.high}${conditions.Degrees}`;
            condition.appendChild(span2);

            const span3 = document.createElement('span');
            span3.className = 'forecast-data';
            span3.textContent = data.forecast.condition;
            condition.appendChild(span3);

            forecasts.appendChild(condition);
            currentWeather.appendChild(forecasts);
          });

        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`)
          .then(res => res.json())
          .then(data => {
            const fcInfo = document.createElement('div');
            fcInfo.className = 'forecast-info';

            data.forecast.forEach(day => {
              const upcoming = document.createElement('span');
              upcoming.className = 'upcoming';

              const symbol = document.createElement('span');
              symbol.className = 'symbol';
              symbol.innerHTML = conditions[day.condition];
              upcoming.appendChild(symbol);

              const fcData = document.createElement('span');
              fcData.className = 'forecast-data';
              fcData.innerHTML = `${day.low}${conditions.Degrees}/${day.high}${conditions.Degrees}`;
              upcoming.appendChild(fcData);

              const fcData2 = document.createElement('span');
              fcData2.className = 'forecast-data';
              fcData2.textContent = day.condition;
              upcoming.appendChild(fcData2);

              fcInfo.appendChild(upcoming);
            });

            upcomingWeather.appendChild(fcInfo);
          })
          .catch(() => (forecast.textContent = 'Error'));
      })
      .catch(() => (forecast.textContent = 'Error'));
  }
}
attachEvents();