function navAnimation(){
    
var nav=document.querySelector('nav')

nav.addEventListener('mouseenter',function(){
    let tl=gsap.timeline()
    tl.to('#slider',{
        height:"20vh"
    })
    tl.to('.one h5',{
        display:'block'
    })
    tl.to('.one h5 span',{
        y:0,
        stagger:{
            amount:0.5
        }
    })
})



nav.addEventListener('mouseleave',function(){
    let tl=gsap.timeline()
    tl.to('.one h5 span',{
        y:25,   
        stagger:{
            amount:0.2
        }
    })
    tl.to('.one h5',{
        display:"none",
        duration:0.1
    })
    tl.to('#slider',{
        height:0,
        duration:0.2
    })
})
    

}

navAnimation()
