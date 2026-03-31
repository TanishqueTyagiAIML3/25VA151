let num=5;
function number(){
    return (Number(prompt("Enter a number")));
}
while(true)
{
   let  input=((number()===num)?true:false);
    if(input==true)
    {
        console.log("The number was guess");
    break;}
    else
        alert("The Number you guess it was wrong");
}