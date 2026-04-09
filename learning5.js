// Function in JavaScript 
/*    A function is a block of code disigned to perform a specific task .
*   Function in javaScript are reusable blocks of code that can anywhere in the program .

syntax

function  functionName()
{
//code to be executed 
}

*/

function greet(){

    console.log("Hello ");
    
}
greet();  //----->  it's a function call .


/*
// Parameter and Arguements 

Parameter :  Parameter are the variable that are 
             declared in the function definition.

Arguements:  Arguements are the actual value passed through
             the function when the function is called 
             
*/


function greet(firstName, lastName){           //-->here firstName, lastName is the parameter
    console.log(`hello ${firstName}  ${lastName}`);
}
greet("Nanjunda", "K M");   //Nanjunda , K M  are the arguements.


//example 2

function _greet(firstName, lastName){           //-->here firstName, lastName is the parameter
    console.log(`hello ${firstName}  ${lastName}`);
}
_greet(100,300); // You can pass any data type as the arguements .


// Example 3

function $greet(firstName, lastName){           //-->here firstName, lastName is the parameter
    console.log(`hello ${firstName}  ${lastName}`);
}
$greet("Nanjunda");  // here  we only passing single arguements for  2 parameters 
                    // out put:  Nanjunda  undefined ,because we passed only single arguemnt, so another parameter is undefined .



 function greet1(firstName, lastName){           //-->here firstName, lastName is the parameter
    console.log(`hello ${firstName}  ${lastName}`);
}
greet1("Nanjunda", "K M", "Gowda");  //here we passing 3 arguments for the 2 parameters the javscript engine take only  2 parametres and
                                    // it ignores the extra parameters 



// Default parameters 

// the dafault parameters in javaScript that have a dafault value .

 // This means that if the arguments is not passed to the function the dafault value will be used.


 //ex1;

 function sum(x,y) {
 console.log(x+y);
 }
   sum(10,40);

 //ex2:
 
 function $sum(x,y){
    console.log(x+y);  // 10 + undefoined = Nan ==> Not a Number.
 }
 $sum(10);  //
 
  //ex3:

 function sum1(x,y=0) {
    console.log(x+y);
    }
      sum1(10);  //output: 10


/*
   //Function return

   the return statement can be used to return the value , when the funcction is called.

*  The return statement denotes that the function has ended . 
   Any code after return(written) is not executed.

*/

function add(a,b){
    return a+b;
}
let result=add(10,20);
console.log("The sum is : " +result);


//ex2:
function $add(a,b){
    return a+b;
    a*b;    // here this operation not executed because when we written return statement it indicates there is no more code there to execute.
            // after return staetement no code will executed
}
let $result=$add(10,20);
console.log("The sum is : " +result);


//Function inside function 

function fn1(x){
    function fn2(y){
        return x*y;
    }
    return fn2;
}
let _result= fn1(3);

console.log(_result);

//ex2:

function fn1(x){
    function fn2(y){
        return x*y;
    }
    return fn2;
}
let result_= fn1(3);

console.log(result_(2));  //output :6


/*

// Anonymous Function :- 
   
   Anonymous function in javaScript ,are functions that are not declared with a name .


   syntax :

  function(){

      //code to be executed

       }

*  function( parameter){

// code to be executed 

}

Example :1  Function Expression :- function expression means A function is assigned to a variable known as Function expression

*/

let _sum =function(x,y){

    return x+y;
}
sum(12,23 );


//Example :2 IIFE function :- Immidiate invokable function expression .

  (
    function (){                       //you can pass parameter 
        console.log("Hello ");
    }
  ) ();

  (
    function (firstName, lastName){                       //you can pass parameter 
        console.log(`Hello  ${firstName} ${ lastName}`);
    }
  ) ("Nanjunda", "K M");     //IIFE

/*
  //Example :

     syntax:
     
     setTimeout(function,time)  //here function and time
    
     *  time in milli seconds

     */

     //setTimeout is the javascript built in function.

     setTimeout(function(){
        console.log("Nanjunda K M you are busy in learning JavaScript ");
     },2000)

/*
     //Recursive function  in JavaScript 

     recursive fuction in javaScript is a function that calls itself .

    

     function myFunction(){           
        //Function code 

        myFunction();      //callimg the same function 
     } 

     myfunction();  


*/
     /*   Recursive function must have condition to stop calling itself 
         otherwise will be calling itself infinitely .To prevent infinite recursion we can use if else statement 
         or any conditional statement.
    */


   //  Recursive Function  
   /*   SYNTAX 
   
  function myfunction(){
    if (condition){
        myFunction();
    }
    else {
        //stop calling recursive 
    }
  }
   myFunction();

   */

   //EXAMPLE :
   
   function countDown(num){
    console.log(num);              // 
    num--;
    if(num>=0){
        countDown(num);   // calling itself 
    }
   }
    countDown(5);





    



    