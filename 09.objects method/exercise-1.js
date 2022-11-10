const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

console.log(Object.keys(person));


/* non richiesto dall'esercizio, ma volevo provare ,
 come mai l'output e'  [Array(2), Array(2), Array(2)] ? */ 
console.log(Object.entries(person));