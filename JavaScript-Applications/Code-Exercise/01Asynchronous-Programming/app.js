async function getInfo() {
    const stopId = document.getElementById("stopId").value;
    const busesListEl = document.getElementById("buses");
    const stopName = document.getElementById("stopName");
    busesListEl.innerHTML = '';

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time]) => {
            const li = document.createElement("li");
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesListEl.appendChild(li);
        });
    } catch (err) {
        stopName.textContent = 'Error';
    }

}