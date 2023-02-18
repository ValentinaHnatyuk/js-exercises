class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static fromJson(json) {
    const obj = JSON.parse(json);
    const { id, firstName, lastName, age } = obj;
    return new Person.(..Object.values(obj));
  }

  toJson() {
    return JSON.stringify(this);
  }
}
const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
