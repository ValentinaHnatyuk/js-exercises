const isLogged = true;


const myNewPromise = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user == true) {
                resolve(Math.random());
            } else {
                reject("User not logged in");
            
            }
        }, 500)
    })

}

const secondPromise = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0.5) {
                resolve({ name: "John", age: 24 });
            } else {
                reject("Number is too low");
        }, 1000);
    })
}

myNewPromise(isLogged)
    .then((num) => {
        console.log(num);
        return num;
    })
    .then((num) => secondPromise(num))
    .then((obj) => console.log(obj))
    .catch((err) => console.error(err))