console.log('linked');
// gsap ease https://greensock.com/docs/v2/Easing

const tl = gsap.timeline({defaults: {ease: "power1.out"} });

function loadingAnimation(){
    // tl.to(".square", {transform:'scale(0)', duration:1, delay:1});
    // tl.to(".square", {transform:'scale(1)', duration:1});
    // tl.to(".loadingScreen",{display:'none'});
    tl.to(".nav",{transform:"translateY(0px)",duration:1,delay:1});
    tl.to(".left",{transform:"translateX(0px)",duration:1}, "-=0.5" );
    
}