const normalPerson = {
    firstName: 'Jasim',
    lastName: 'Uddin',
    salary  : 522,
    fullName : function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount){
        console.log(this);
        this.salary = this.salary - amount;
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
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonBill(1000);