let tl=gsap.timeline();
gsap.set("#center",{scale:1.5})
tl.from("#left",{
    width:0,
    duration:2,
    ease:Expo.easeInOut
})
tl.to("#center",{
    scale:1,
})
tl.to("#txt",{
    y:10,
    x:420,
    ease:Expo.easeInOut,
    color:"black",
    opacity:1,
   
})
tl.from("#expbtn",{
    y:300,
    x:420,
    color:"black",
    
   
})