//var
//string
var name="keerthana";
//number
var age="21";
//boolean
var sheis_student=true;
//array
var array_datatype=["html","css","js","java","sql"];
//object
var student={name:"keerthana",age:21,female:true};
//undefined
var x;
console.log(x);
//null
var x=null;
console.log(x);

//let
//why let->many people are working one project... they are maybe used same variable name so let is help for solving that king of problem... instead of var we can use let .
//var is gloabal value->function scope
//let is local value ->block scope
{
    //local declaration
let name="priya";
name="rusandhiya"
console.log("local value:"+name);
}
//global declaration
console.log("global value:"+name);

//let example
//console.log("let");
let string_let = "welcome";
let num = 4;

if (num > 3) {
    let string_let = "hello javascript";
    //console.log(hello);// "say Hello instead"
}
//even that statement is true but it's not assign the local value for using let.
console.log(string_let);
// here normal declare but not assigning the value.. anyway it's not showing the error.
var m;
let c;

//const
//in const without assigning value of variable showes error
// const pi;
//it's throws error:Uncaught SyntaxError: Missing initializer in const declaration.
const pi=3.14;
//console.log(pi);
{
   // pi=3;
    console.log(pi);
    //error will occure after reinitialize the pi value
}
const fruits=["mango","apple","orange"];
console.log(fruits);
fruits.push("banana");//push(),pop()->datastructure  concepts
console.log(fruits);
// now there is no error after insert the value of array
// here array size is increase but no error
//fruits=["banana","watermelon"];
//console.log(fruits);
//this one is showing error

