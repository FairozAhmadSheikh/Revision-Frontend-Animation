var btn=document.querySelector("#btn")
btn.addEventListener("click",function(){
    var ovr=document.querySelector("#overlay")
    ovr.style.opacity=1
})
var array2=[]
var array=[1,-2,3,-4,5,6,-7,-8,9,-1]
for(let i=0;i<array.length;i++){
    if(array[i]<1){
        array2.push(array[i])
    }
}
console.log(array2)