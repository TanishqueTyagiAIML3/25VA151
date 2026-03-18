/*Pop up Box
 alert("Hello");
  let number=prompt("Enter A Message");
 confirm("Press ok for blank page");
 */
// document.write("Hello World"); document.write matlab apne  browser ko info dena  kya likna ha
// console.log("Hello"); console me kuch print karana ha 
/*Line Break --start with the new line
 document.write("<diV>Hello Tanishque</div>");
document.write("<br>");
document.write("<pre>Hello World</pre>");
 document.write("<p>Hello Sachin</p>");
 document.write("<pre>Hello\nTanishque</pre>");
console.log("CSE");
*/

// var names="Tanishque";
//  var names="Sachin"; var se pure varible ko dubare declare kar sakte ha & global scope
//  let rs="rahul";//let se variable ke value ko initialize kar sakte ha & block scope
//  rs="raj";
// const name="Tanishque"; const se ek varibale ke value ko constant kardege
// console.log(rs);
function myname(){
    let names={
     'Sachin':"Not interest",
    }
    let value=document.getElementById("name");
    value.innerText=` ${names.Sachin}`;
}//function is non primitive data type
// let names="Tanishque";
// names='Tanishque'; string data type
let num=9;
let isnum;
if(num===9)
isnum=true;
else
isnum=false;
num=null;
let sym1=Symbol("ID");//har ek symbol ke unique value hote ha
//Non primitive data type
var student={
    name:`Tanishque`,
    roll_no: 31,
}//object create
let arr=['Tanishque','Sachin',67,78];//array created

