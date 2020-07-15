console.log("hello im java script");
//comments in javascripts
//single line comments are written using //
//multiline comments are written using /* */
/*console.log("hey multiline");
console.log("hey multiline");
console.log("hey multiline");
console.log("hey multiline");
console.log("hey multiline");*/

//time
//time to timeEnd->process time
console.time("time taken");
//console 
console.log("first string");
console.error("this is error ");
console.warn("warning");
 //object 
 var person0={name:"keerthana",age:21,email:"keerthisaivel@gmail.com"} 
 var person1={name:"priya",age:21,email:"priya@gmail.com"} 
 var person2={name:"prabhu",age:21,email:"prabhu@gmail.com"} 
 //console.log(person);
 //if u want to print all together
 //console.log({person0,person1,person2});
 console.table({person0,person1,person2});
 //css also used in js
 //after giving css propertyto add ";"
 console.log("%c custom message","color:pink;");
 //multiple line u soppose give semicolon 
 //forgot to declare semicolon in sigle line .. it's not error in js.. but good program we need to give ";"
console.timeEnd("time taken");