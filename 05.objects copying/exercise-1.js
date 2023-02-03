const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

/* perche' abbiamo un solo oggetto ,cio' che viene cambiato e' 
la variabile che punta allo stesso oggetto, quindi modificando un valore 
di person1 o person2 in entrambi i casi modifichiamo lo stesso oggetto */

console.log(person1);
console.log(person2);
