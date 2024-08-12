// object in javascript 

// simple object in javascript 

// how to use sumbol in object 
const sym = Symbol('key1');

const  person = {
    name : 'Vishnu singh rathore',
    email : 'vishnu@gmail.com',
    number : 9252268161,
    isLogIn : true,
    [sym]   : 'hello this is use of symbol',
    arra : [1,2,32],


};

// add function 
person.user = function (){
    console.log(`hello you are just login Mr ${this.name}`);
}
// console.log(person);
// console.log(person.arra[2]);
// console.log(person.user())