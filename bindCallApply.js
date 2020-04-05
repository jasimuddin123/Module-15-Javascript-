const normalPerson = {
    firstName: 'Jasim',
    lastName: 'Uddin',
    salary  : 522,
    fullName : function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount - tax - tips;
        return this.salary;
    }

}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 3000,
}

const friendlyPerson = {
    firstName: 'Hara',
    lastName: 'Golam',
    salary:3000,
}
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonBill(1000);
// normalPerson.chargeBill.call(heroPerson, 900, 100, 300);
// normalPerson.chargeBill.call(heroPerson, 300, 500, 23);
// console.log(heroPerson.salary);


normalPerson.chargeBill.apply(heroPerson,[3000, 300, 50]);
normalPerson.chargeBill.apply(heroPerson,[2000, 300, 40]);
console.log(heroPerson.salary);