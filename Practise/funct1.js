// function vowels(str){
//     str=str.toUpperCase();
//     let count=0;
//        for(let i=0;i<str.length;i++)
//        {
//            if(str.charAt(i)=='A' || str.charAt(i)=='E' ||  str.charAt(i)=='I'  || str.charAt(i)=='O' ||  str.charAt(i)=='U')
//             count+=1;
//        }
//        return count;
// }
// let str=prompt("Enter a String");
// console.log(vowels(str));
const vowel=(str)=>{
    str=str.toUpperCase();
    let count=0;
      for(let i=0;i<str.length;i++)
      {
          if(str.charAt(i)=='A' || str.charAt(i)=='E' ||  str.charAt(i)=='I'  || str.charAt(i)=='O' ||  str.charAt(i)=='U')
       count+=1;
      }
       return count;
}
let str=prompt("Enter a String");
console.log(vowel(str));