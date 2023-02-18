const number = 15;
const myPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("number is greater than 10!");
  } else {
    reject("number is less than 10!");
  }
});

myPromise
 .then((val) => console.log(val))
 .catch((err) => console.log(err))
