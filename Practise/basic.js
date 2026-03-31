let value=5;
value=10;//it can be updated and can't be declared
console.log(value);
const pi=10;//kepp the value constant
var global=10;
var global=2;//it can be redeclared
function myname()
{
    console.log(global);//global scope of var
}
myname();
