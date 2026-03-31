let name=['bllomberg','Microsoft', 'uber', ' google' ,'IBM',' netflix'];
name.shift();//0 indx ke element ko remove kar ra ha  original array me se
console.log(name);
name.splice(1,1,"Ola");
console.log(name);// agar array me kisi element ko remove kar ke uske jage koi element add karna ho
name.push("Amazon");
console.log(name);