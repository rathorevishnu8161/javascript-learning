// single ton object in js
const tinderAccount  = new Object();
// console.log(tinderAccount);

//create add key and value in single ton value

tinderAccount.name = "Vishnu singh rathore";
tinderAccount.email = 'rathorevishnu8161@gmail.com';
tinderAccount.isLogin = true


// console.log(tinderAccount)

// nusted object 

const user = {
    email : 'vkrathore@gmail.com',
    fullname : {
        userFullName :{
            firstname : 'demo',
            lastname  : 'choudhary',
        }
    },
    age  : 21
}

// console.log(user.fullname?.userFullName.firstname) block chaining


// object merge in javascript

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'a',4:'b'};

// const obj3 = Object.assign({},obj1,obj2); //first parameter is target and other parameter is source
// console.log(obj3)

// secound way to merge objects spread method of merge object
const obj3 = {...obj1, ...obj2};
// console.log(obj3);


// how to find object key in an array using Object.keys method

// console.log(Object.keys(tinderAccount))

// get object keys value using Object.values method

const objArr = Object.values(tinderAccount);

// console.log(objArr)

 const multiArr = (Object.entries(tinderAccount))
//  console.log(multiArr[0][1]);


// check this  value is and is not in object
// console.log(tinderAccount.hasOwnProperty('email'))