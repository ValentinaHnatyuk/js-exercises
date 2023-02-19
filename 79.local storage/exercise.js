const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserObjectInLocalStorage() {
  localStorage.setItem('user', JSON.stringify(user));
}

window.addEventListener('load', saveUserObjectInLocalStorage);