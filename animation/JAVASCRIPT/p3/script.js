var array=[{name:"Feroz" ,age:20, gender:"male"},
{name:"abeera" ,age:2, gender:"male"},
{name:"Farhan" ,age:2, gender:"male"},
{name:"abdul" ,age:10, gender:"female"},

]
let array2=[]


     // using for each
// array.forEach(function(val,index){
//     if(val.age>10)
//     {
//       array2.push(val)
//     }
// })
// console.log(array2)


// using filter

 var array3= array.filter(function(val,index){
return val.age>=10;
})
console.log(array3)