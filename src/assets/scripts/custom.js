// console.log($);
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var gee = window.gee || $.fn.gene;
window.gee = gee;


gee.hook("initScrollMagic", me => {

	console.log('initScrollMagic');
  // var ta = me.data("ta") ? $(me.data("ta")) : me;
  
  const tl = gsap.timeline();
  // const pageChangeTime = 1;
  // const pageAddTime = 0.5;
  // const pageTime = pageChangeTime*2 + pageAddTime;

  tl
  .from(me.find('.ads-2'),1,{width:"0px"},"1")
  .from(me.find('.ads-2 .p1'),3,{y:100},"1")
  .from(me.find('.ads-2 .p2'),3,{y:50},"1")
  .from(me.find('.ads-2 .p3'),3,{y:-50},"1")
  .from(me.find('.ads-2 .p4'),3,{y:-100},"1")
  .from(me.find('.ads-2 .p5'),3,{y:-200},"1")
  .from(me.find('.ads-2 .p6'),3,{y:-20,x:-150},"1")
  .from(me.find('.ads-3'),1,{width:"0px"},`3`)
  .from(me.find('.ads-3 .p1'),5,{y:100},`3`)
  .from(me.find('.ads-3 .p9'),5,{y:100},`3`)
  .from(me.find('.ads-3 .p2'),5,{y:-100},`3`)
  .from(me.find('.ads-3 .p3'),5,{y:-150},`3`)
  .from(me.find('.ads-3 .p4'),5,{y:-200},`3`)
  .from(me.find('.ads-3 .p5'),5,{y:-300},`3`)
  .from(me.find('.ads-3 .p6'),5,{y:-400},`3`)
  .from(me.find('.ads-3 .p7'),5,{y:-500},`3`)
  .from(me.find('.ads-3 .p8'),5,{y:-600},`3`)
  .from(me.find('.ads-3 .p10'),5,{y:-700},`3`)
  .from(me.find('.ads-3 .p11'),5,{y:-20,x:-150},`3`)
  .from(me.find('.ads-4 .p1'),5,{y:100},`3`)
  .from(me.find('.ads-4 .p9'),5,{y:100},`3`)
  .from(me.find('.ads-4 .p2'),5,{y:-100},`3`)
  .from(me.find('.ads-4 .p3'),5,{y:-150},`3`)
  .from(me.find('.ads-4 .p4'),5,{y:-200},`3`)
  .from(me.find('.ads-4 .p5'),5,{y:-300},`3`)
  .from(me.find('.ads-4 .p6'),5,{y:-400},`3`)
  .from(me.find('.ads-4 .p7'),5,{y:-500},`3`)
  .from(me.find('.ads-4 .p8'),5,{y:-600},`3`)
  .from(me.find('.ads-4 .p10'),5,{y:-700},`3`)
  .from(me.find('.ads-4 .p11'),5,{y:-20,x:-150},`3`)
  .from(me.find('.ads-4'),1,{width:"0px"},`5`)
  .from(me.find('.ads-5'),1,{width:"0px"},"7")

  ScrollTrigger.create({
    animation: tl,
    trigger: me,
    start: 'top top',
    end: "+=5000",
    pin: true,
    // markers: true,
    scrub: 1,
  })
	// me.find('')
});



gee.hook("up-loop-infinte", me => {
	gsap.set(me.find('.pic'), {
		rotate: '-15deg'
  });
  
	gsap.to(me.find('.pic .imgWrap'), 10, {
    scrollTrigger: {
      trigger: me,
      toggleActions: 'resume pause resume pause',
      end: "bottom+=500px top",
    },
		y: '-50%',
		repeat: -1,
		ease: "none"
	});
});
