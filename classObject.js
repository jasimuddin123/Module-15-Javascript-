class Person{

    constructor(firstname, lastname, salary){
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 20000)
console.log(friendlyPerson);


function Person1(firstName, lastName, salary){

    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;

}

const oldPerson = new Person1('Grand', 'Papa', 1000);
console.log(oldPerson);