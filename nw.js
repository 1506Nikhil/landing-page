const tl = gsap.timeline()

tl.from(".nav #middle,.nav #right,.nav #left",{
    y:-100,
    delay:1,
    duration:1,
    opacity:0,
    stagger:0.5
})
tl.from(".main h1",{
    y:100,
    opacity:0,
    stagger:0.2
})

tl.from("#img1,#img2",{
    y:100,
    opacity:0,
    scale:0,
    delay:1
})

tl.from(".main>p",{
   scale:0,
   opacity:0
    
})
tl.from(".main>p",{
   y:100,
   repeat:-1,
   duraton:4,
   yoyo:true
    
})

