var array=[
{img:"https://i.pinimg.com/736x/43/32/58/4332588de51bf26c092db609d1c6debe.jpg",name:"Abdullah"},
{img:"https://i.pinimg.com/736x/a3/2d/5b/a32d5be3e63f07ca79ff60c86efe7313.jpg",name:"Gafar"},
{img:"https://i.pinimg.com/564x/e4/7a/7d/e47a7d432369ac798f0840504d7d1b5e.jpg",name:"Allizah"},
{img:"https://i.pinimg.com/736x/97/94/e2/9794e291b3de7df31e1bba10ac5cf7a7.jpg",name:"Amir"},
{img:"https://i.pinimg.com/736x/03/d6/c4/03d6c45a7bb0b547943d907e58011143.jpg",name:"Anees"},
{img:"https://i.pinimg.com/736x/43/32/58/4332588de51bf26c092db609d1c6debe.jpg",name:"Abdullah"},
{img:"https://i.pinimg.com/736x/a3/2d/5b/a32d5be3e63f07ca79ff60c86efe7313.jpg",name:"Gafar"},
{img:"https://i.pinimg.com/564x/e4/7a/7d/e47a7d432369ac798f0840504d7d1b5e.jpg",name:"Allizah"},
{img:"https://i.pinimg.com/736x/97/94/e2/9794e291b3de7df31e1bba10ac5cf7a7.jpg",name:"Amir"},
{img:"https://i.pinimg.com/736x/03/d6/c4/03d6c45a7bb0b547943d907e58011143.jpg",name:"Anees"},
{img:"https://i.pinimg.com/736x/43/32/58/4332588de51bf26c092db609d1c6debe.jpg",name:"Abdullah"},
{img:"https://i.pinimg.com/736x/a3/2d/5b/a32d5be3e63f07ca79ff60c86efe7313.jpg",name:"Gafar"},
{img:"https://i.pinimg.com/564x/e4/7a/7d/e47a7d432369ac798f0840504d7d1b5e.jpg",name:"Allizah"},
{img:"https://i.pinimg.com/736x/97/94/e2/9794e291b3de7df31e1bba10ac5cf7a7.jpg",name:"Amir"},
{img:"https://i.pinimg.com/736x/03/d6/c4/03d6c45a7bb0b547943d907e58011143.jpg",name:"Anees"},
{img:"https://i.pinimg.com/736x/43/32/58/4332588de51bf26c092db609d1c6debe.jpg",name:"Abdullah"},
{img:"https://i.pinimg.com/736x/a3/2d/5b/a32d5be3e63f07ca79ff60c86efe7313.jpg",name:"Gafar"},
{img:"https://i.pinimg.com/564x/e4/7a/7d/e47a7d432369ac798f0840504d7d1b5e.jpg",name:"Allizah"},
{img:"https://i.pinimg.com/736x/97/94/e2/9794e291b3de7df31e1bba10ac5cf7a7.jpg",name:"Amir"},
{img:"https://i.pinimg.com/736x/03/d6/c4/03d6c45a7bb0b547943d907e58011143.jpg",name:"Anees"},
]
var clutter='';
 array.forEach(function(val,index){
   
    clutter+=`<div id="story">
    <img id="${index}" src="${val.img}" alt="${val.name}">
    <h2>"${val.name}"</h2>
    </div>`
    
 })

 // Story loaders
 
var storyclick=document.querySelector("#stories")
 storyclick.innerHTML=clutter;

//  View Story

document.querySelector("#main").addEventListener("click",function(details){
var id=array[(details.target.id)]
document.querySelector("#overlay").style.opacity=1
document.querySelector("#overlay").style.backgroundImage=`url(${id.img})`

setTimeout(function(){
    document.querySelector("#overlay").style.opacity=0
},3000)

})




  

