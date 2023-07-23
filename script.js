// // imported locomotive code from : https://github.com/locomotivemtl/locomotive-scroll

// // for smooth scroll 
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

// uppar waale ki zaroorat hi nahi h baas explain karne ke liye bataya tha ! :)


// changes ".smooth-trigger" -> ".main" 
function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}


init();

// Gsap ka code - scroll trigger 

// cursor code : Line:  44 ->55
var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")

// adding event listner
// dets == details of the cursor 
document.addEventListener("mousemove",function(dets){
//    cursor will follow x - axis 
    crsr.style.left = dets.x+ 3 + "px";
    // cursor will follow y-axis 
    crsr.style.top = dets.y + 3 + "px";
})

// mouse-enter & mouse-leave event -- for future updates 






var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 20%",
        end: "top 0",
        scrub: 3
    }
})



tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "98%"
}, "anim")

// background color black to white
var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -70%",
      end: "top -10%",
      scrub: 3
  }
})
tl2.to(".main", {
  // white 
  backgroundColor: "#fff",
})

tl2.to(".page2 h1",{
    x: -19,
},"2nd")

tl2.to(".page2-left h2",{
    x: -33,
},"2nd")

tl2.to(".page2-right p",{
    x: 33
},"2nd")

tl2.to(".page2-right button",{
    x: 33
},"2nd")

// timeline 3 

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -70%",
        end: "top -10%",
        scrub: 3
    }
  })

  tl4.to(".page3 h1",{
    x: 33,
    y:20
  })

  tl4.to(".page3-part1 img",{
    x: -33,
    y:1
  })

  tl4.to(".page3-part1 video",{
    x: 13,
    y:1
  })




// timeline 4
var tl23 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
  })

  tl23.to(".main",{
    backgroundColor:"#0F0D0D"
  })


//   last effect



// all boxes selected --> node list m aaata 
// similar in the form of array
var boxes = document.querySelectorAll(".box")

boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        // elem.style.backgroundColor = "red"
        // get the attributes of the boxes
        var att = elem.getAttribute("data-image")
        crsr.style.height = "170px"
        crsr.style.width = "150px"
        crsr.style.borderRadius = "0"
        // use of template literalles -> converts in into url 
        crsr.style.backgroundImage = `url(${att})`
   
   
   
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        // opposite of what we have done 
        crsr.style.height = "19px"
        crsr.style.width = "19px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `none`
        crsr.style.borderRadius = "50%"


    })
})
