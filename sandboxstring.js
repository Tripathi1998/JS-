//string
console.log('hello , world');

//string concatination

let firstName="Aditi";
let lastName="Tripathi";
let fullName=firstName+' '+lastName;
console.log(fullName);

//getting  string

console.log(fullName[0]);

//string length
console.log(fullName.length);
console.log(firstName.length);
console.log(lastName.length);

//string method

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.indexOf('i'));

//common string method
//lastInexOf
let email="adititripathi@sstsinc.com";
let result=email.lastIndexOf('i');
console.log(result);

//slice() need two argument
let result1=email.slice(0,10);
console.log(result1);

//substr() 
let result2=email.substr(4,10);
console.log(result2);

//replace()
let result3=email.replace('i','n');
console.log(result3);