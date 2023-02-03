function repeatHello(callback) {
    setInterval(callback, 1000);
}

function sayHello(){
    console.log("Hello");
}

repeatHello(sayHello);
