
let btn=document.querySelector('#submit');
let heading=document.querySelector("h4");
let count=0;
btn.addEventListener("click",()=>{
    count++;
    if(count===1)
    {
    let sub=Number(document.getElementById("subject").value);
    document.getElementById("subject").remove();
       let mark;
       heading.innerText="Enter The Mark of each subject";
       for(let i=0;i<sub;i++)
       {
         mark=document.createElement("input");
         mark.classList.add("multi_input");
         mark.name=`${i+1} subject`;
        document.querySelector("#box").prepend(mark);
       }}
       if(count==2)
       {
        let collect=document.querySelectorAll(".multi_input");
     let arr=[];
     for(let i=0;i<collect.length;i++)
     {
        arr.push(Number(collect[i].value));
     }
     let total=0;
     for(let i=0;i<arr.length;i++)
        total=total+arr[i];
    let avg=total/arr.length;
     for(let k=0;k<collect.length;k++)
     {
        collect[k].remove();
     }
     heading.remove();
     btn.remove();
     let final=document.createElement("h4");
     final.style.gridColumnStart="1";
     final.style.gridColumnEnd="3";
    let grade="";
    if(avg>=90)
        grade="A";
    else if(avg<90 && avg>=70)
        grade="B";
    else if(avg<70 && avg>=50)
        grade="C";
    else
        grade="D";
    final.innerHTML=`Total Score:${total}<br>Average Score:${avg}<br>Grade:${grade}`;
    final.style.fontStyle="italic";
    document.querySelector(".marks").style.backgroundColor="Black";
    document.querySelector(".marks").style.color="orange";
    document.querySelector(".marks").prepend(final);
       }

})