// console.log($);
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var gee = window.gee || $.fn.gene;
window.gee = gee;


gee.hook("initScrollMagic", me => {

	// console.log('initScrollMagic');
  
  const tl = gsap.timeline({onUpdate:updateProgress});

  const _num = me.find('.ad-section').length;
  const _h = me.find('.ad-section').height();
  const _d = 800;

  const _dd = _d*3;

  tl
  .addLabel("0", 0)
  .from(me.find('.ads-2'),_d*1,{width:"0px"},_d)
  .from(me.find('.ads-2 .section-title'),_d,{x:-100,alpha:0},_d)
  .from(me.find('.ads-2 .p1'),_dd,{y:100},_d)
  .from(me.find('.ads-2 .p2'),_dd,{y:50},_d)
  .from(me.find('.ads-2 .p3'),_dd,{y:-50},_d)
  .from(me.find('.ads-2 .p4'),_dd,{y:-100},_d)
  .from(me.find('.ads-2 .p5'),_dd,{y:-200},_d)
  .from(me.find('.ads-2 .p6'),_dd,{y:-20,x:-150},_d)
  .addLabel("1", _d*2)
  .from(me.find('.ads-3'),_d*1,{width:"0px"},_d*3)
  .from(me.find('.ads-3 .section-title'),_d,{x:-100,alpha:0},_d*3)
  .fromTo(me.find('.ads-3 .p1'),_dd,{y:100},{y:40,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p9'),_dd,{y:100},{y:40,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p2'),_dd,{y:-100},{y:-40,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p3'),_dd,{y:-150},{y:-60,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p4'),_dd,{y:-200},{y:-80,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p5'),_dd,{y:-300},{y:-120,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p6'),_dd,{y:-400},{y:-160,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p7'),_dd,{y:-500},{y:-200,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p8'),_dd,{y:-600},{y:-240,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p10'),_dd,{y:-700},{y:-280,ease:"none"},_d*3)
  .fromTo(me.find('.ads-3 .p11'),_dd,{y:-20,x:-150},{y:-8,x:-60,ease:"none"},_d*3)
  .from(me.find('.ads-4 .p1'),_dd,{y:60,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p9'),_dd,{y:60,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p2'),_dd,{y:-60,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p3'),_dd,{y:-90,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p4'),_dd,{y:-120,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p5'),_dd,{y:-180,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p6'),_dd,{y:-240,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p7'),_dd,{y:-300,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p8'),_dd,{y:-360,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p10'),_dd,{y:-420,ease:"none"},_d*5)
  .from(me.find('.ads-4 .p11'),_dd,{y:-12,x:-90,ease:"none"},_d*5)
  .addLabel("2", _d*4)
  .from(me.find('.ads-4'),_d*1,{width:"0px"},_d*5)
  .from(me.find('.ads-4 .section-title'),_d,{x:-100,alpha:0},_d*5)
  .addLabel("3", _d*6)
  .to(me.find(".ad-nav"),_d/5,{color:'black'},_d*6-_d/5)
  .from(me.find('.ads-5'),_d*1,{width:"0px"},_d*7)
  .from(me.find('.ads-5 .section-title'),_d,{x:-100,alpha:0},_d*7)
  .addLabel("4", _d*8)
  .from(me.find('.ads-5 .pic'),_d*2,{y:100},_d*7)



  ScrollTrigger.create({
    animation: tl,
    trigger: me,
    start: 'top top',
    end: `+=${_num*_d+(_d*(_num-1))}`,
    pin: true,
    // markers: true,
    scrub: 1,
  })

  let _channelNow = 0 ;
  function updateProgress(){
    // console.log(+tl.currentLabel());
    let _now = +tl.currentLabel();
    if(_now!==_channelNow){
      _channelNow = _now;
      console.log(_channelNow);
      // _channelNow = +tl.currentLabel();
      // console.log('_channelNow: ', _channelNow);

      me.find('.ad-nav .ad-nav-item').removeClass('active');
      me.find('.ad-nav .ad-nav-item').eq(_channelNow).addClass('active');
    }
    
    // TweenMax.set( $('#progress'), { value: tl1.progress()*100 } );
  }

  // console.log(me.width());

  // const sections = gsap.utils.toArray(me.find('.ad-section'));
  // const _w = me.height();
  // const stopTime = 500;
  // console.log('_w: ', _w);


  // ScrollTrigger.create({
  //   trigger: me,
  //   pin: true,
  //   // end: ()=> "+=100" + (sections.length-1) * me.width(),
  //   end: ()=> `+=${sections.length * stopTime}`,
  //   id: 'mom',
  //   markers: true,
  // })


  // const tl1 = gsap.timeline();

  // tl1.to(me.find('.ads-1 .pic .imgWrap'), 10, {
	// 	y: '-50%',
	// 	repeat: -1,
	// 	ease: "none"
	// });

  // ScrollTrigger.create({
  //   animation: tl1,
  //   trigger: me.find('.ads-1'),
  //   // start: `top bottom`,
  //   end: `bottom top`,
  //   markers: true,
  //   id: 'ad-2',
  //   // scrub: 1,
  // })


  // const tl2 = gsap.timeline();

  // tl2
  // .from(me.find('.ads-2'),{width:"0px"},0)
  // .from(me.find('.ads-2 .p1'),{y:100},0)
  // .from(me.find('.ads-2 .p2'),{y:50},0)
  // .from(me.find('.ads-2 .p3'),{y:-50},0)
  // .from(me.find('.ads-2 .p4'),{y:-100},0)
  // .from(me.find('.ads-2 .p5'),{y:-200},0)
  // .from(me.find('.ads-2 .p6'),{y:-20,x:-150},0)

  // ScrollTrigger.create({
  //   animation: tl2,
  //   trigger: me.find('.ads-2'),
  //   // start: `top top`,
  //   // end: `+=100%`,
  //   markers: true,
  //   id: 'ad-2',
  //   scrub: 1,
  // })
});



gee.hook("up-loop-infinte", me => {
	gsap.set(me.find('.pic'), {
		rotate: '-15deg'
  });
  
	gsap.to(me.find('.pic .imgWrap'), 10, {
    scrollTrigger: {
      trigger: me,
      toggleActions: 'resume pause resume pause',
      end: "bottom+=800px top",
    },
		y: '-50%',
		repeat: -1,
		ease: "none"
	});
});


gee.hook("aniPic", me => {

  const el = $(`<span class="inset-y-0 absolute bg-${me.data('color')} z-10"></span>`);
  me.append(el);

  const tl = gsap.timeline();
  const pic = me.find('.img');

  tl.set(me,{overflow:'hidden'})
  .set(pic,{autoAlpha: 0,scale:1.05})
  .set(el,{width: '0%'})
  .to(el,{duration:.3,width: '100%'})
  .set(pic,{autoAlpha: 1})
  .to(pic,{duration:3,scale:1},'in')
  .to(el,{duration:.3,width: '0%',left: '100%'},'in')
  .to(el,{autoAlpha: 0})


  ScrollTrigger.create({
    animation: tl,
    trigger: me,
    start: `top+=200 bottom`,
  })
});
