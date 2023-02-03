function attachEventsListeners() {
    const inputDays = document.getElementById('days');
    const inputHours = document.getElementById('hours');
    const inputMinutes = document.getElementById('minutes');
    const inputSeconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', convertDays);
    document.getElementById('hoursBtn').addEventListener('click', convertHours);
    document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

    function convertDays() {
        const days = Number(inputDays.value);
        inputHours.value = days * 24;
        inputMinutes.value = days * 1440;
        inputSeconds.value = days * 86400;
    }

    function convertHours() {
        const hours = Number(inputHours.value);
        inputDays.value = hours / 24;
        inputMinutes.value = hours * 60;
        inputSeconds.value = hours * 3600;
    }

    function convertMinutes() {
        const minutes = Number(inputMinutes.value);
        inputDays.value = minutes / 1440;
        inputHours.value = minutes / 60;
        inputSeconds.value = minutes * 60;
    }

    function convertSeconds() {
        const seconds = Number(inputSeconds.value);
        inputDays.value = seconds / 86400;
        inputHours.value = seconds / 3600;
        inputMinutes.value = seconds / 60;
    }
}