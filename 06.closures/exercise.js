

function printName() {
    let helloName = "Hello John";
     
    function inner() {
        console.log(helloName);
        return helloName;
    }
    return inner;
    
}

printName()();

