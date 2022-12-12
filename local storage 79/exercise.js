const user = {
  id: 1,
  name: "John",
  age: 25,
};
const localUserCookie = (user) => {
  const userName = JSON.stringify(user);
  return localStorage.setItem("user", userName);
}

localUserCookie(user);
