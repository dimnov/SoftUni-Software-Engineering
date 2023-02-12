function notify(message) {
  const notification = document.getElementById('notification');

  notification.style.display = 'block';
  notification.textContent = message;

  notification.addEventListener('click', hideNotification);

  function hideNotification() {
    notification.style.display = 'none';
  }
}