const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged === true) {
    resolve(Math.random());
  } else {
    reject("user is not logged in");
  }
});

const secondPromise = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 0.5) {
     const data = `{name: "John", age: 24}`;
      resolve(data);
    } else {
      reject("error");
    }
  });
};

  firstPromise
  .then((num) => secondPromise (num))
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Promise chain completed!");
  });
