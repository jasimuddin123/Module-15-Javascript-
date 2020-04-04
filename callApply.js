const normalPerson = {
    firstName: 'Jasim',
    lastName: 'Uddin',
    salary  : 522,
    fullName : function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }

}

normalPerson.chargeBill(200);
console.log(normalPerson.salary);

// console.log(normalPerson);

// Below call only First Name
// const normalPerson = {
//     firstName: 'Jasim',
//     lastName: 'Uddin',

//     fullName : function() {
//         console.log(this.firstName, this.lastName);
//     }
// }
// console.log(normalPerson.firstName);