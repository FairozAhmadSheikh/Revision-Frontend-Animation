let prev =0;
let current=1;
console.log(prev)
    console.log(current)
for(let i=0; i<=7; i++){
    
    let next = prev+current;
    console.log(next)
    prev=current
    current=next
}