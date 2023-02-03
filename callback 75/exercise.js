
function repeatHello(callback) {
 const intervalId = setInterval(callback, 1000);
 setTimeout(() => clearInterval(intervalId) , 5000);
}

function sayHello(){
    console.log("Hello");
}

repeatHello(sayHello);
