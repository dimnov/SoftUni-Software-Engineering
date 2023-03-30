const itemName = 'userData';

export function getUserData() {
  return JSON.parse(sessionStorage.getItem(itemName));
}

export function setUserData(data) {
  return sessionStorage.setItem(itemName, JSON.stringify(data));
}

export function clearUserData() {
  sessionStorage.removeItem(itemName);
}

export function createSubmitHandler(callback) {
  return function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    callback(data);
  }
}