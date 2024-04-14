var txt=document.querySelector("#txt")
var btn= document.querySelector("#btn")
let flag=0;

btn.addEventListener("click",function(){

   
   if(flag==0){
    btn.innerHTML="SENT REQUST";
    txt.style.color="red"
    txt.innerHTML="FREINDS";
    flag =1;
   }
   else{
    btn.innerHTML="ADD FREIND";
    txt.style.color="white"
    txt.innerHTML="STRANGERS";
    flag=0;
   }
   
})
