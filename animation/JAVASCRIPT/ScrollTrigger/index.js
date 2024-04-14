gsap.from(".box1",{
    x:400,
    scale:2,
    duration:2,
    delay:2,
    rotate:360,
    borderRadius:0,
})
gsap.from(".box2",{
    x:400,
    scale:2,
    duration:2,
    delay:2,
    rotate:360,
    borderRadius:0,
    scrollTrigger:{
        trigger:".box2",
        scroller:"body",
        start:"top 50%",
        scrub:4,
        pin:true
    }
})
gsap.from(".box3",{
    x:400,
    scale:2,
    duration:2,
    delay:2,
    rotate:360,
    borderRadius:0,
    scrollTrigger:{
        trigger:".box3",
        scrub:true,


    }
})