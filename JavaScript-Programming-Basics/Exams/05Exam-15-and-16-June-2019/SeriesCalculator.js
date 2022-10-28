function seriesCalculator(input) {
  let name = input[0];
  let seasons = Number(input[1]);
  let episodes = Number(input[2]);
  let time = Number(input[3]);

  let adsPerEpisode = time * 0.2;
  let episodePlusAds = time + adsPerEpisode;
  let special = seasons * 10;

  let total = (episodePlusAds * episodes * seasons) + special;

  console.log(`Total time needed to watch the ${name} series is ${total} minutes.`);
}
seriesCalculator(["Game of Thrones", "7", "10", "50"])