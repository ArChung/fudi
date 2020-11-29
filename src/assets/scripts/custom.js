// console.log($);
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var gee = window.gee || $.fn.gene;
window.gee = gee;


gee.hook("initScrollMagic", me => {

	console.log('initScrollMagic');
  
  const tl = gsap.timeline();

  const _num = me.find('.ad-section').length;
  const _h = me.find('.ad-section').height();
  const _d = '800';

  tl
  .from(me.find('.ads-2'),_d*1,{width:"0px"},_d)
  .from(me.find('.ads-2 .p1'),_d*3,{y:100},_d)
  .from(me.find('.ads-2 .p2'),_d*3,{y:50},_d)
  .from(me.find('.ads-2 .p3'),_d*3,{y:-50},_d)
  .from(me.find('.ads-2 .p4'),_d*3,{y:-100},_d)
  .from(me.find('.ads-2 .p5'),_d*3,{y:-200},_d)
  .from(me.find('.ads-2 .p6'),_d*3,{y:-20,x:-150},_d)
  .from(me.find('.ads-3'),_d*1,{width:"0px"},_d*3)
  .from(me.find('.ads-3 .p1'),_d*5,{y:100},_d*3)
  .from(me.find('.ads-3 .p9'),_d*5,{y:100},_d*3)
  .from(me.find('.ads-3 .p2'),_d*5,{y:-100},_d*3)
  .from(me.find('.ads-3 .p3'),_d*5,{y:-150},_d*3)
  .from(me.find('.ads-3 .p4'),_d*5,{y:-200},_d*3)
  .from(me.find('.ads-3 .p5'),_d*5,{y:-300},_d*3)
  .from(me.find('.ads-3 .p6'),_d*5,{y:-400},_d*3)
  .from(me.find('.ads-3 .p7'),_d*5,{y:-500},_d*3)
  .from(me.find('.ads-3 .p8'),_d*5,{y:-600},_d*3)
  .from(me.find('.ads-3 .p10'),_d*5,{y:-700},_d*3)
  .from(me.find('.ads-3 .p11'),_d*5,{y:-20,x:-150},_d*3)
  .from(me.find('.ads-4 .p1'),_d*5,{y:100},_d*3)
  .from(me.find('.ads-4 .p9'),_d*5,{y:100},_d*3)
  .from(me.find('.ads-4 .p2'),_d*5,{y:-100},_d*3)
  .from(me.find('.ads-4 .p3'),_d*5,{y:-150},_d*3)
  .from(me.find('.ads-4 .p4'),_d*5,{y:-200},_d*3)
  .from(me.find('.ads-4 .p5'),_d*5,{y:-300},_d*3)
  .from(me.find('.ads-4 .p6'),_d*5,{y:-400},_d*3)
  .from(me.find('.ads-4 .p7'),_d*5,{y:-500},_d*3)
  .from(me.find('.ads-4 .p8'),_d*5,{y:-600},_d*3)
  .from(me.find('.ads-4 .p10'),_d*5,{y:-700},_d*3)
  .from(me.find('.ads-4 .p11'),_d*5,{y:-20,x:-150},_d*3)
  .from(me.find('.ads-4'),_d*1,{width:"0px"},_d*5)
  .from(me.find('.ads-5'),_d*1,{width:"0px"},_d*7)



  ScrollTrigger.create({
    animation: tl,
    trigger: me,
    start: 'top top',
    end: `+=${_num*_d+(_d*(_num-1))}`,
    pin: true,
    markers: true,
    scrub: 1,
  })
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
