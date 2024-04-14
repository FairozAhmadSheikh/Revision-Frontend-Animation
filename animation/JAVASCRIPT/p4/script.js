let data=[
{name:"Feroz",img:"https://i.pinimg.com/564x/02/74/a5/0274a5f38f22c7e4052f58d4deab1721.jpg",status:"Strangers"},
{name:"Abrar",img:"https://i.pinimg.com/564x/12/a0/11/12a0112641143d787e09565658c28568.jpg",status:"Strangers"},
{name:"Aliza",img:"https://i.pinimg.com/564x/63/98/33/6398330f9f05e4d81586e9230d7b8b2d.jpg", status:"Strangers"},
{name:"Ahmad",img:"https://i.pinimg.com/736x/b6/33/bf/b633bf5071faca68e654c737c053ebb7.jpg" ,status:"Strangers"}]
    
   
function rux(){
       let clutter='' 
        data.forEach(function(val,index){
           
            clutter +=` <div id="card">
            <img id="img" src="${val.img}" alt="profile">
            <h1>${val.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis quia repellat facilis excepturi, necessitatibus similique. Sunt veritatis suscipit eveniet?</p>
            <h2>${val.status}</h2>
            <button id="${index}">Add Freind</button>
           
           </div>`
           })

           document.querySelector("#main").innerHTML=clutter
    }
    
    rux();



var main=document.querySelector("#main")
main.addEventListener("click",function(detail){
   data[detail.target.id].status="Freinds"; 
   rux();
})

