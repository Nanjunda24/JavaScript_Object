//object in JavaScript
/*
In JavaScript object is a non-primitive (Reference) data-type that always you to store mulptiple collection of data . 

OR

object is collection of key-value pairs .

SYNTAX :

const object_name = {
key1:value1,
key2:value2,
key3:value3
}

*/
// when you going to declare object better to use const keyword 
//  to declare variable .

  const person={
    firstName:"Nanjuinda",
    lastName:"K M",
    age:21
  }

  console.log(person);

  /*  when you declare a function as a key : value pair then it known as method.

    [or]

 when you declare function inside the object then it is knows as method .

*/

//accessing element using . (dot) operator 

let $fName=person.firstName;
console.log($fName);  //Nanjunda

//2nd way to accessins element 

let _fName=person["firstName"];

console.log(_fName);

//Update 

person.firstName="Charan";
console.log(person);

//Add new properties 

person.village="Konanuru";

console.log(person);

//delete property from object

delete person.village;   //to delete we must delete key word.

console.log(person);


//object inside object : nested object .

const $person={
    firstName:"Nanjuinda",
    lastName:"K M ",
    age:21,
    address:{                            //nested object .
        street:"Kanaka Badaavane",
        city:"Banglore",
        state:"Karnataka",
        country:"India",
        Zip:"560060"
    },
   phone:8088913797
}
console.log($person);


 // accessing nested object element 

 let nested_element=$person.address.city;

 console.log(nested_element);


 //Checking if propeties exist in object 

 //Syntax : propertyName in objectName .

console.log("age" in $person);  //return boolean value // true 

console.log("firstName" in person);

console.log("country"  in person);  //false.

//if want to display all properties and value of an object without knowing the propertyName .


//The for..in loop allows you to access each property and value of an object without knowing the specific name of the property .


for(let prop in $person)
{
    console.log(prop);
}


for(let prop in $person){
    console.log(person[prop]);
}

for(let prop in person){
    console.log(prop + ":" +person[prop]);
}


//Creating an object with new keyword 

const person_n = new Object();    //Object is case sensitive 

person_n.firstName="Nanjunda";
person_n.lastName="K M";
person_n.age=35;


console.log(person_n);
//Another way declaring object

const people=new Object({        //Object is case sensitive 
    firstName:"Nanjunda",
    lastName:"K M",
    age:21
});

console.log(people);

//javaScript object methods 


//JavaScript object methods 

const container={
    firstName:"Nanjunda",
    lastName:"K M",
    greet:function greet(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let Nanjunda=container.greet();
console.log(Nanjunda);   //Hello Nanjunda K M

//Adding function to  the Object 

const Asus={
    firstName:"Charan",
    lastName:"Vivobook"
}

function greeting(){
    console.log("Hello Nanjunda K M  1");
}


Asus.greet=greeting;

Asus.greet();  //Nanjunda K M 

//Another way of adding method to object or declring methood to variable 

 let $_person={
    firstName:"Nanjunda K M ",
    latName:"K M "
 }
    function $fNamegreet()
 {
    console.log("Hello world  wel come to JvaScrip Woeld");
}


$_person.Nanjunda=$fNamegreet(); 

console.log($_person.Nanjunda);
/*

//javascript this keyword 

  To access properties of an object within a method we use this keyword .

  [or]

  To access properties from the object within the object we use the ths key word .

  */

  const person_1 ={
    firstName:"Nanjunda ",
    lastName:"K M",
    age:21,
  greet :function (){
    console.log("Hello "+this.firstName );  // acessing properties from the object 
  }

  }
  person_1.greet();


   // when we use this keyword within a method , it refers to the same objct 

   let person_2 ={
    firstName:"Nanjunda",
    lastName:"K M",
    age:21,
   getFullName: function (){
    console.log( "Hello " +this.firstName +" " + this.lastName);
   }

}
person_2.getFullName();

console.log(this);  //window property 

/*

*If  we use "this"  keyword lonely(alone). or inside a function. then it will refer
  to global object that is window object .

  * when we use "this" keyword in the "Event" then it will refer to the element that recieve the Event .

  *  "this" is a keyword, it is not variable we can't change the value of ' this ' key word

*/

//  Constructor function 

/*
*  constructor function is similar as a regular function but it is better practice to 
   capitalize the first letter of you constructor function .

 * a constructor function should be called only with "new " operator .
   
*  we can use "new" operator to create an object from a constructor function.

*/

//Adding parameter 

function Person(first,last){
    this.firstName=first,
    this.lastName=last
}
const person1=new Person("nanjunda", "K M");

const person2= new Person("Elon ", "Musk");

//adding property age 

person1.age=21;

console.log(person1.age);

//adding Method 

person2.greet= function(){
console.log("hello wel come to javaScript ");
}
person2.greet();

console.log(person1);
console.log(person2);

//Example

function Person (first , last){
    this.firstName=first,
    this.lastName=last,
    this.getFullName=function(){
      return this.firstName +" "+this.lastName;

    }
    
}
const $person_1 = new Person("Nanjunda ", "K M");
const $person_2= new Person("Elon", "Musk");

console.log($person_2.getFullName());


/* 

//JavaScript Object prototype 

In javaScript every function and object as it's own prototype called prototype .

const person={
name:"Nanjunda K M"
}
console.log(person);

a prototype itself is also another object So, the prototype has it's own prototype. This creates a prototype cahin.

// prototype inheritance 

We can use prototype to add propeties and methods to a constructor fumction 
and objects inherit the properties and methidsnfrom prototype.

*/

function People(fName,lName){
  this.firstName = fName,
  this.lastName = lName
}

//After declared constructor function we can't add new property as like object if want add we should use property .

People.prototype.gender="Male";

const person21= new People("Elon", "Musk");

const person12= new People("Bill","Gates");

console.log(person12.gender);

//adding method 

People.prototype.getFullName=function(){
  return this.firstName+" "+this.lastName;
}
console.log(person21.getFullName());

//we can access person12 also 

console.log(person12.getFullName());

//Changing prototype value 

function $people(){

  this.name="Elon Musk "
}

$people.prototype.age =25;
const person11=new $people();
$people.prototype={age:35};
const person22= new $people();
console.log(person11.age);
console.log(person22.age);

//If a prototype  value is changed , then  all the new object have the changed property value.

//All the previously created object will have the previous value .

//object Derstructuring 

/*

Objet destructing in java script is a feature that allows you to exract the properties of an object into variables.

This can be useful for assigning the properties os an object to variables in a single statement.

*/

 const nanjunda={
  firstName:"Elon ",
  lastName:"Musk"
 }

 //let fName=Nanjunda.firstName;
 //let lName=Nanjunda.lastname;


//Now In ES6 feature

//same thing declare as 
 //syntax:

 //let{property1:variable,property2:variable2}=object;




 let {firstName:fName,lastName:lName}=nanjunda;

 console.log(fName);
 console.log(lName);


 //to add same variable name and propert name .

 let {firstName,lastName}=nanjunda;

 console.log(lastName);

 let{firstName1="Nanjunda",lastName1,age=21}=nanjunda;
console.log(firstName1);  
 console.log(age);


 //Object literals and Extensions 

const $Nanjunda={
  firstName:"Nanjunda ",
  lastName:"K M"
}

console.log(firstName);

console.log(lastName);

//object literal 


let firstName$="Charan ";
let lastName$="H G";

const $_Nanjunda ={
firstName$,
lastName$
}
console.log(firstName$);
console.log(lastName$);

console.log(firstName$+ " "+lastName$);


