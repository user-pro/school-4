loadScreen = document.querySelector('.load-screen')

function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});;





'use strict'



const asideMenu = document.querySelector('.menu'),
      openCloseButton = document.querySelector('.menu-open-close'),
      openCloseButtonSvg = document.querySelector('.menu-open-close__svg'),
      menuOpenCloseCross = document.querySelector('.menu-open-close__cross'),
      pathInMenu = document.getElementById('tophalf'),
      colorChangerBlock = document.querySelector('.color-changer-block'),
      fifthBlock = document.querySelector('.fifth-block'),
      fifthBlockStickyWrapper = document.querySelector('.fifth-block__sticky-wrapper'),
      seventhBlockContentSliderProgress = document.querySelector('.seventh-block-content-slider-progress'),
      body = document.querySelector('body');


body.classList.add('_locked')
const canvas1 = document.querySelector('.page-type_first-canvas');
const ctx = canvas1.getContext('2d');
const radius = 50;
canvas1.width = innerWidth;
canvas1.height = innerHeight;
const canvas2 = document.querySelector('.sixth-block-content__canvas');
const ctx2 = canvas2.getContext('2d');
canvas2.width = innerWidth;
canvas2.height = innerHeight;


let lastCoords = {
   x: undefined,
   y: undefined
}, 
oldCoords = {
   x: undefined,
   y: undefined
},
lastCoordsOnScroll = {
   x: undefined,
   y: undefined
}, 
oldCoordsOnScroll = {
   x: undefined,
   y: undefined
},
lastClientCoords = {
   x: undefined,
   y: undefined
};
let lastCoords2 = {
   x: undefined,
   y: undefined
}, 
oldCoords2 = {
   x: undefined,
   y: undefined
},
lastCoordsOnScroll2 = {
   x: undefined,
   y: undefined
}, 
oldCoordsOnScroll2 = {
   x: undefined,
   y: undefined
},
lastClientCoords2 = {
   x: undefined,
   y: undefined
}


const slidersCount = 3;

let scrollTop = 0;

const firstBlockContent = document.querySelector('.first-block-content');
let FirstBlockCoefTodownScroll = 0;
let ThirdBlockCoefTodownScroll = 0;
let SixthBlockCoefTodownScroll = 0;
let colorChangeCoef = 0;


let lightElems = document.querySelectorAll('.light');
// console.log(lightElems);

let windowWidth = window.innerWidth,
    HorScrollBlock = document.querySelector(".third-block"),
    horScrollInto = document.querySelector(".third-block-content"),
    textBlockThird = document.querySelector('.third-block-content__scroller-text'),
    siteCreateScreenContentTextBlock = document.querySelector('.site-create-screen-content__text-block'),
    siteCreateScreenContentImg = document.querySelector('.site-create-screen-content__img'),
    siteCreateScreenContentTextBlock_2 = document.querySelector('.site-create-screen-content__text-block_2'),
    siteCreateScreenContentImage_2 = document.querySelector('.site-create-screen-content__image_2'),
    siteCreateScreenContentTextBlock_3 = document.querySelector('.site-create-screen-content__text-block_3'),
    siteCreateScreenContentImage_3 = document.querySelector('.site-create-screen-content__image_3')
    textBlockFourth = document.querySelector('.fourth-block__scroller-text');

let HorScrollBlockFourth = document.querySelector(".fourth-block"),
    horScrollIntoFourth = document.querySelector(".fourth-block__content");
   //  horScrollIntoFifth = document.querySelector(".fourth-block__content")

let HorScrollBlockSixth = document.querySelector(".sixth-block"),
   horScrollIntoSixth = document.querySelector(".sixth-block__content");

let horLength = horScrollInto.scrollWidth,
    horLengthFourth = horScrollIntoFourth.scrollWidth;
    horLengthSixth = horScrollIntoSixth.scrollWidth;
   //  horLengthFifth = horScrollIntoFourth.scrollWidth;

let distFromTop = HorScrollBlock.offsetTop,
    distFromTopFourth = HorScrollBlockFourth.offsetTop,
    distFromTopSixth = HorScrollBlockSixth.offsetTop;
   //  distFromTopFifth = HorScrollBlockFourth.offsetTop;

let scrollDistance = distFromTop + horLength;
let scrollDistanceFourth = distFromTopFourth + horLengthFourth;
let scrollDistanceSixth = distFromTopSixth + horLengthSixth;
   //  scrollDistanceFifth = distFromTopFifth + horLengthFifth;




HorScrollBlock.style.height = horLength - document.documentElement.clientWidth + document.documentElement.clientHeight + "px";
HorScrollBlockFourth.style.height = horLengthFourth - document.documentElement.clientWidth + document.documentElement.clientHeight + "px";
HorScrollBlockSixth.style.height = horLengthSixth - document.documentElement.clientWidth + document.documentElement.clientHeight + "px";
// HorScrollBlockFifth.style.height = horLengthFifth - document.documentElement.clientWidth + document.documentElement.clientHeight + "px";







let pageTypeTitle = document.querySelector('.page-type__title');
let sixthBlockContentTitle = document.querySelector('.sixth-block-content__title');
      
      

isMobile = {
   Android: function() {
       return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function() {
       return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function() {
       return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function() {
       return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function() {
       return navigator.userAgent.match(/IEMobile/i);
   },
   any: function() {
       return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
   }
};

let screens = document.querySelectorAll('.fifth-block-content-screen');
let zSpacing = -(document.documentElement.clientHeight);
let loaded = false;

let swiper = new Swiper(".seventh-block-content__slider", {
   effect: "creative",
   creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
   },
   autoHeight: true


});

let sliderArrowPrev = document.querySelector('.slider-arrow_prev'),
    sliderArrowNext = document.querySelector('.slider-arrow_next');
let seventhBlockContentSliderProgressStep = document.querySelectorAll('.seventh-block-content-slider-progress__step');
seventhBlockContentSliderProgressStep[swiper.activeIndex].classList.add('_visible')
sliderArrowPrev.classList.add('_enable')

sliderArrowNext.addEventListener('click', ()=>{
   swiper.slideNext(600);
   if (swiper.realIndex == 2) {
      sliderArrowNext.classList.add('_enable')
   }
   if (sliderArrowPrev.classList.contains('_enable')){
      sliderArrowPrev.classList.remove('_enable')
   }
});
sliderArrowPrev.addEventListener('click', ()=>{
   swiper.slidePrev(600);
   if (swiper.realIndex == 0) {
      sliderArrowPrev.classList.add('_enable')
   }
   if (sliderArrowNext.classList.contains('_enable')){
      sliderArrowNext.classList.remove('_enable')
   }
   
});
progressSpan = seventhBlockContentSliderProgress.querySelector('span');
progressSpan.style.transform = `translateX(${(((swiper.activeIndex+1) / slidersCount)*100)-100}%)`;
swiper.on('slideChange', function () {
   progressSpan = seventhBlockContentSliderProgress.querySelector('span');
   progressSpan.style.transform = `translateX(${(((swiper.activeIndex+1) / slidersCount)*100)-100}%)`;
   seventhBlockContentSliderProgressStep.forEach((item,index)=>{
      if (index!=swiper.activeIndex){  
         item.classList.remove('_visible');
      }
   });
   seventhBlockContentSliderProgressStep[swiper.activeIndex].classList.add('_visible')


   if (sliderArrowNext.classList.contains('_enable')){
      sliderArrowNext.classList.remove('_enable')
   }



   if (sliderArrowPrev.classList.contains('_enable')){
      sliderArrowPrev.classList.remove('_enable')
   }
   if (swiper.realIndex == 0) {
      sliderArrowPrev.classList.add('_enable')
   }
   if (swiper.realIndex == 2) {
      sliderArrowNext.classList.add('_enable')
   }

});
window.onload = function() {

   // progressSpan = seventhBlockContentSliderProgress.querySelector('span');
   // progressSpan.style.width = `0px`;




   fifthBlock.style.height = `${(800 * (screens.length))}px`;
   ThirdBlockCoefTodownScroll = (window.scrollY - distFromTop) / document.documentElement.clientHeight;
   if(distFromTop >= scrollTop){

      pageTypeTitle.style.cssText = `
         transform: translateY(${-ThirdBlockCoefTodownScroll*200}px);
         opacity: ${ 1 + ThirdBlockCoefTodownScroll };
      `;
   }
   if(!(scrollTop < fifthBlock.offsetTop)){
      window.scrollTo(0, localStorage.getItem('scrollDistance'))
   }
   fifthBlockScrollDistance = fifthBlock.offsetTop;
   $delta = fifthBlockScrollDistance - localStorage.getItem('scrollDistance');
   let   zVals = [];
   screens.forEach((item, index) => {
      zVals.push((index * zSpacing) + -zSpacing);
      zVals[index] += $delta * -1;
      if($delta <= 0){
         item.style.cssText = `
            transform: scale(1) translate3d(0,0, ${zVals[index]}px);
         `;
      } else if($delta > 0){
         item.style.cssText = `
         transform: scale(1) translate3d(0,0, ${(index * zSpacing) }px);
      `;
      }
   });

   FirstBlockCoefTodownScroll = window.scrollY / document.documentElement.clientHeight;
   firstBlockContent.style.cssText = `
      transform: translateY(-${FirstBlockCoefTodownScroll*100}px);
      opacity: ${ 1 - FirstBlockCoefTodownScroll};
   `;
   // let clientHeight = document.documentElement.clientHeight,
   // HorScrollBlockHeight = HorScrollBlock.getBoundingClientRect().height;
   if((document.documentElement.clientHeight + scrollTop >= HorScrollBlock.getBoundingClientRect().height + distFromTop) && (HorScrollBlock.getBoundingClientRect().height + distFromTop + document.documentElement.clientHeight >= document.documentElement.clientHeight + scrollTop)){

      colorChangeCoef = 1 - ((HorScrollBlock.getBoundingClientRect().height + distFromTop) - scrollTop) / document.documentElement.clientHeight;
      let cS = {
         r: 131,
         g: 81,
         b: 81,
      },
      cE = {
         r: 80,
         g: 53,
         b: 53,
      }
      colorChangerBlock.style.cssText = `
         background-color: rgb(${cS.r - ((cS.r - cE.r) * colorChangeCoef)}, ${cS.g - ((cS.g - cE.g) * colorChangeCoef)}, ${cS.b - ((cS.b - cE.b) * colorChangeCoef)});
      `;
           
   }
   else if(HorScrollBlock.getBoundingClientRect().height + distFromTop + document.documentElement.clientHeight < document.documentElement.clientHeight + scrollTop){
      colorChangerBlock.style.cssText = `
         background-color: rgb(80, 53, 53);
      `;
   } else {
      colorChangerBlock.style.cssText = `
         background-color: rgb(131, 81, 81);
      `;
   }

   if(scrollTop >= distFromTop && scrollTop <= scrollDistanceFourth - document.documentElement.clientWidth + document.documentElement.clientHeight){

      colorChangerBlock.style.position = 'fixed';
      colorChangerBlock.style.top = 0 +'px';
      colorChangerBlock.style.display = 'block';


   } else {
      colorChangerBlock.style.display = 'none';
   }

   const parallax = document.querySelector('.first-block');
   if (!parallax) {
      return;
   }
   const stars1 = document.querySelector(`.first-block-parallax-images__stars1`),
         stars2 = document.querySelector(`.first-block-parallax-images__stars2`),
         stars3 = document.querySelector(`.first-block-parallax-images__stars3`);

   const forStars3 = 33;
   const forStars2 = 41;
   const forStars1 = 28;

   const speed = 0.05;

   let positionX = 0;
   let positionY = 0;

   let coordXprocent = 0;
   let coordYprocent = 0;


   function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);


      stars1.style.cssText = `transform: translate(${positionX / forStars1}%, ${positionY / forStars1}%);`;
      stars2.style.cssText = `transform: translate(${positionX / forStars2}%, ${positionY / forStars2}%);`;
      stars3.style.cssText = `transform: translate(${positionX / forStars3}%, ${positionY / forStars3}%);`;
      requestAnimationFrame(setMouseParallaxStyle);
   }
   setMouseParallaxStyle();

   parallax.addEventListener('mousemove', event =>{
         const parallaxWidth = parallax.offsetWidth;
         const parallaxHeight = parallax.offsetHeight;

         const coordX = event.pageX - parallaxWidth / 2;
         const coordY = event.pageY - parallaxHeight / 2;

         coordXprocent = coordX / parallaxWidth * 100;
         coordYprocent = coordY / parallaxHeight * 100;


   });




   let color;
   lightElems.forEach((item, index) => {
      currentItemIndex =0; 
      if(item.getBoundingClientRect().top <= openCloseButton.getBoundingClientRect().top + openCloseButton.getBoundingClientRect().height && item.getBoundingClientRect().bottom >= openCloseButton.getBoundingClientRect().top ){
         // console.log(item);
         currentItemIndex = index;
         colorBottom = (openCloseButton.getBoundingClientRect().top - lightElems[currentItemIndex].getBoundingClientRect().bottom) / openCloseButton.getBoundingClientRect().height * -1;
         colorTop = (openCloseButton.getBoundingClientRect().bottom - lightElems[currentItemIndex].getBoundingClientRect().top) / openCloseButton.getBoundingClientRect().height;
         openCloseButton.style.cssText = `
            transform: rotate(${scrollTop / 3}deg);
            background-image: linear-gradient(-${(colorBottom < 1 ? (scrollTop / 3) : 180 + scrollTop / 3)}deg, #fff ${100 - (colorBottom < 1 ? (colorBottom) : colorTop) * 100}%, #000 0%);
         `;                                                                      
      } else if(lightElems[currentItemIndex].getBoundingClientRect().top >= openCloseButton.getBoundingClientRect().top + openCloseButton.getBoundingClientRect().height){
         color = (openCloseButton.getBoundingClientRect().bottom - lightElems[currentItemIndex].getBoundingClientRect().bottom) / openCloseButton.getBoundingClientRect().height;
         openCloseButton.style.cssText = `
               transform: rotate(${scrollTop / 3}deg);
            background-image: linear-gradient(-${180 + scrollTop / 3}deg, #fff ${100 - color * 100}%, #000 0%);
         `;

      } else {
         // console.log(item)
         color = (openCloseButton.getBoundingClientRect().bottom - lightElems[currentItemIndex].getBoundingClientRect().bottom) / openCloseButton.getBoundingClientRect().height;
         openCloseButton.style.cssText = `
               transform: rotate(${scrollTop / 3}deg);
            background-image: linear-gradient(-${180 + scrollTop / 3}deg, #000 ${100 - color * 100}%, #fff 0%);
         `;
      }
   });
   if(distFromTop <= scrollTop){
      pageTypeTitle.style.cssText = `transform: translateY(0.362319px); opacity: 0.998188;`;
   }

   loaded = true;
   loadScreen.classList.add('load')
   if(loaded) {
      const animItems = document.querySelectorAll('._anim-item');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight))  {
            animItem.classList.add('_active');

         } 
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);
}
;
      body.classList.remove('_locked')
   }
}



openCloseButton.addEventListener('click', ()=> {
   console.log(openCloseButton);
   if(asideMenu.classList.contains('show')) {
      asideMenu.classList.remove('show');
   } else asideMenu.classList.add('show');
   
});
menuOpenCloseCross.addEventListener('click', ()=>{
   if(asideMenu.classList.contains('show')) {
      asideMenu.classList.remove('show');
   } else asideMenu.classList.add('show');
});





function calculate(){

   if (document.documentElement.clientWidth <= 767){
      openCloseButtonSvg.querySelector('rect').setAttribute('x', '43')
      openCloseButtonSvg.querySelector('rect').setAttribute('y', '43')
   }
   else{
      
      openCloseButtonSvg.querySelector('rect').setAttribute('y', '41')
      openCloseButtonSvg.querySelector('rect').setAttribute('x', '41')
   }


   requestAnimationFrame(calculate);
   clientHeight =document.documentElement.clientHeight;

   localStorage.removeItem('scrollDistance')
   fifthBlock.style.height = `${clientHeight*(screens.length)}px`;

   fifthBlockScrollDistance = fifthBlock.offsetTop;
   $delta = fifthBlockScrollDistance - scrollTop;
   let   zVals = [];
   fifthBlockStickyWrapper.style.cssText = `perspective: ${clientHeight}px`
   screens.forEach((item, index) => {
      zVals.push((index * zSpacing));
      zVals[index] += $delta * -1;
      if($delta <= 0){


         item.style.cssText = `
            transform: scale(1) translate3d(0,0, ${zVals[index]}px);
            opacity: ${zVals[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0};
            display: ${zVals[index] < Math.abs(zSpacing) / 1.3 ? "flex" : "none"};
         `;

      } 
      // console.log($delta);
      if($delta < -((screens.length-1)*clientHeight)){
         $delta = -((screens.length-1)*clientHeight)
      }
   });
   localStorage.setItem('scrollDistance', scrollTop);


   if(document.documentElement.clientWidth <= 767){
      pathInMenu.setAttribute('d', 'M17,50a33,33 0 1,0 66,0a33,33 0 1,0 -66,0');
   } else if(document.documentElement.clientWidth > 767){
      pathInMenu.setAttribute('d', 'M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0');

   }



   horScrollInto = document.querySelector(".third-block-content");
   HorScrollBlockFourth = document.querySelector(".fourth-block");

   windowWidth = window.innerWidth

   horLength = horScrollInto.scrollWidth;
   horLengthFourth = horScrollIntoFourth.scrollWidth;
   horLengthSixth = horScrollIntoSixth.scrollWidth;

   distFromTop = HorScrollBlock.offsetTop;
   distFromTopFourth = HorScrollBlockFourth.offsetTop;
   distFromTopSixth = HorScrollBlockSixth.offsetTop;

   scrollDistance = distFromTop + horLength;
   scrollDistanceFourth = distFromTopFourth + horLengthFourth;
   scrollDistanceSixth = distFromTopSixth + horLengthSixth;

   HorScrollBlock.style.height = horLength - document.documentElement.clientWidth + document.documentElement.clientHeight + "px";
   HorScrollBlockFourth.style.height = horLengthFourth - document.documentElement.clientWidth + document.documentElement.clientHeight + "px";
   HorScrollBlockSixth.style.height = horLengthSixth - document.documentElement.clientWidth + document.documentElement.clientHeight + "px";


   scrollTop = window.pageYOffset;
   specialScrollLength = Number(HorScrollBlockSixth.style.height.slice(0,4)) - document.documentElement.clientHeight
   // console.log(specialScrollLength);
   if (scrollTop >= distFromTop && scrollTop < scrollDistance - document.documentElement.clientWidth) {
      horScrollInto.style.transform = "translateX(-" + (scrollTop - distFromTop)+"px)";
      textBlockThird.style.transform = "translateX(-" + ((scrollTop - distFromTop) * 0.35)+"px)";
      textBlockFourth.style.transform = "translateX(-" + ((scrollTop - distFromTop) * 0.35)+"px)";
   }
   else if(scrollTop < distFromTop){
      horScrollInto.style.transform = "translateX(-0px)";
            textBlockThird.style.transform = "translateX(-" + ((scrollTop - distFromTop) * 0.35)+"px)";
            textBlockFourth.style.transform = "translateX(-" + ((scrollTop - distFromTop) * 0.35)+"px)";
   }
   else if(scrollTop > scrollDistance - document.documentElement.clientWidth){
      horScrollInto.style.transform = `translateX(-${(horLength - document.documentElement.clientWidth)}px)`;
            textBlockThird.style.transform = "translateX(-" + ((scrollTop - distFromTop) * 0.35)+"px)";
            textBlockFourth.style.transform = "translateX(-" + ((scrollTop - distFromTop) * 0.35)+"px)";
   }

   if (scrollTop >= distFromTopFourth && scrollTop < scrollDistanceFourth - document.documentElement.clientWidth) {
      horScrollIntoFourth.style.transform = "translateX(-" + (scrollTop - distFromTopFourth)+"px)";
      // textBlockThird.style.transform = "translateX(-" + ((scrollTop - distFromTopFourth) * 0.35)+"px)";
   }
   else if(scrollTop < distFromTopFourth){
      horScrollIntoFourth.style.transform = "translateX(-0px)";
      // textBlockThird.style.transform = "translateX(-" + ((scrollTop - distFromTopFourth) * 0.35)+"px)";
   }
   else if(scrollTop > scrollDistanceFourth - document.documentElement.clientWidth){
      horScrollIntoFourth.style.transform = `translateX(-${(horLengthFourth - document.documentElement.clientWidth)}px)`;
            // textBlockThird.style.transform = "translateX(-" + ((scrollTop - distFromTopFourth) * 0.35)+"px)";
   }
   if (scrollTop >= distFromTopSixth && scrollTop < scrollDistanceSixth - document.documentElement.clientWidth) {
      horScrollIntoSixth.style.transform = "translateX(" + (-specialScrollLength + (scrollTop - distFromTopSixth))+"px)";
      // textBlockThird.style.transform = "translateX(-" + ((scrollTop - distFromTopSixth) * 0.35)+"px)";
      siteCreateScreenContentTextBlock.style.cssText = `transform: translateX(-${(scrollTop - (distFromTopSixth+document.documentElement.clientWidth/1.25)) * 0.25 * (document.documentElement.clientWidth / 1920)}px)`
      siteCreateScreenContentImg.style.cssText = `transform: rotate(-${(scrollTop - (distFromTopSixth+document.documentElement.clientWidth/1.25)) * 0.015}deg)`
      siteCreateScreenContentTextBlock_2.style.cssText = `transform: translateY(${(scrollTop - (distFromTopSixth+(document.documentElement.clientWidth * 2 )/1.25)) * 0.04}px)`
      siteCreateScreenContentImage_2.style.cssText = `transform: translateY(-${(scrollTop - (distFromTopSixth+(document.documentElement.clientWidth * 2 )/1.25)) * 0.04}px)`
      siteCreateScreenContentTextBlock_3.style.cssText = `transform: translateX(${((distFromTopSixth + horLengthSixth) - (scrollTop +document.documentElement.clientWidth)) *0.18}px)`
      siteCreateScreenContentImage_3.style.cssText = `transform: translateX(${((distFromTopSixth + horLengthSixth) - (scrollTop +document.documentElement.clientWidth)) *0.18}px)`
   }
   else if(scrollTop < distFromTopSixth){
      horScrollIntoSixth.style.transform = `translateX(${-specialScrollLength}px)`;
      // textBlockThird.style.transform = "translateX(-" + ((scrollTop - distFromTopSixth) * 0.35)+"px)";
   }
   else if(scrollTop > scrollDistanceSixth - document.documentElement.clientWidth){
      horScrollIntoSixth.style.transform = `translateX(-0px)`;
      siteCreateScreenContentTextBlock_3.style.cssText = `transform: translateX(${0}px)`
      siteCreateScreenContentImage_3.style.cssText = `transform: translateX(${0}px)`
   }

   



}
calculate();





let scrolling = false;
addEventListener('scroll', ()=>{

   if(!loaded){
      return;
   }

   let color;
   currentItemIndex =0; 
   
   lightElems.forEach((item, index) => {
      if(item.getBoundingClientRect().top <= openCloseButton.getBoundingClientRect().top + openCloseButton.getBoundingClientRect().height && item.getBoundingClientRect().bottom >= openCloseButton.getBoundingClientRect().top ){
         currentItemIndex = index;

         colorBottom = (openCloseButton.getBoundingClientRect().top - lightElems[currentItemIndex].getBoundingClientRect().bottom) / openCloseButton.getBoundingClientRect().height * -1;
         colorTop = (openCloseButton.getBoundingClientRect().bottom - lightElems[currentItemIndex].getBoundingClientRect().top) / openCloseButton.getBoundingClientRect().height;
         openCloseButton.style.cssText = `
            transform: rotate(${scrollTop / 3}deg);
            background-image: linear-gradient(-${(colorBottom < 1 ? (scrollTop / 3) : 180 + scrollTop / 3)}deg, #fff ${100 - (colorBottom < 1 ? (colorBottom) : colorTop) * 100}%, #000 0%);
         `;                                                                      
      } else if(lightElems[currentItemIndex].getBoundingClientRect().top >= openCloseButton.getBoundingClientRect().top + openCloseButton.getBoundingClientRect().height){
         color = (openCloseButton.getBoundingClientRect().bottom - lightElems[currentItemIndex].getBoundingClientRect().bottom) / openCloseButton.getBoundingClientRect().height;
         openCloseButton.style.cssText = `
               transform: rotate(${scrollTop / 3}deg);
            background-image: linear-gradient(-${180 + scrollTop / 3}deg, #fff ${100 - color * 100}%, #000 0%);
         `;
         // console.log(item);
      
      } else if(lightElems[currentItemIndex].getBoundingClientRect().bottom < openCloseButton.getBoundingClientRect().top){
         openCloseButton.style.cssText = `
            transform: rotate(${scrollTop / 3}deg);
            background-image: linear-gradient(-${180 + scrollTop / 3}deg, #fff 100%, #000 0%);
         `;
      }
   });





   scrolling = true;
   scrollTop = window.pageYOffset;
   FirstBlockCoefTodownScroll = window.scrollY / document.documentElement.clientHeight;
   ThirdBlockCoefTodownScroll = (window.scrollY - distFromTop) / document.documentElement.clientHeight;
   SixthBlockCoefTodownScroll = (window.scrollY - distFromTopSixth) / document.documentElement.clientHeight;
   firstBlockContent.style.cssText = `
      transform: translateY(-${FirstBlockCoefTodownScroll*100}px);
      opacity: ${ 1 - FirstBlockCoefTodownScroll};
   `;
   let clientHeight = document.documentElement.clientHeight,
       HorScrollBlockHeight = HorScrollBlock.getBoundingClientRect().height;
   if((clientHeight + scrollTop >= HorScrollBlockHeight + distFromTop) && (HorScrollBlockHeight + distFromTop + clientHeight >= clientHeight + scrollTop)){

      colorChangeCoef = 1 - ((HorScrollBlockHeight + distFromTop) - scrollTop) / clientHeight;
      let cS = {
         r: 131,
         g: 81,
         b: 81,
      },
      cE = {
         r: 80,
         g: 53,
         b: 53,
      }
      colorChangerBlock.style.cssText = `
         background-color: rgb(${cS.r - ((cS.r - cE.r) * colorChangeCoef)}, ${cS.g - ((cS.g - cE.g) * colorChangeCoef)}, ${cS.b - ((cS.b - cE.b) * colorChangeCoef)});
      `;
           
   }

   if(distFromTop >= scrollTop){

      pageTypeTitle.style.cssText = `
         transform: translateY(${-ThirdBlockCoefTodownScroll*200}px);
         opacity: ${ 1 + ThirdBlockCoefTodownScroll };
      `;
   }
   if(distFromTopSixth >= scrollTop){

      sixthBlockContentTitle.style.cssText = `
         transform: translateY(${-SixthBlockCoefTodownScroll*200}px);
         opacity: ${ 1 + SixthBlockCoefTodownScroll };
      `;
   } else {
      sixthBlockContentTitle.style.cssText = `transform: translateY(0.362319px); opacity: 0.998188;`;
   }
   if(scrollTop >= distFromTop && scrollTop <= scrollDistanceFourth - document.documentElement.clientWidth + document.documentElement.clientHeight){

      colorChangerBlock.style.position = 'fixed';
      colorChangerBlock.style.top = 0 +'px';
      colorChangerBlock.style.display = 'block';

   } else {
      colorChangerBlock.style.display = 'none';
   }
   








   Object.assign(oldCoordsOnScroll, lastCoordsOnScroll);

   lastCoordsOnScroll.x = lastClientCoords.x - canvas1.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTop < 0){
      lastCoordsOnScroll.y = lastClientCoords.y - (distFromTop - window.pageYOffset);
   } else{
      lastCoordsOnScroll.y = lastClientCoords.y;
   }

   Object.assign(oldCoords, lastCoords);

   lastCoords.x = lastClientCoords.x - canvas1.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTop < 0){
      lastCoords.y = lastClientCoords.y - (distFromTop - window.pageYOffset);
   } else{
      lastCoords.y = lastClientCoords.y;
   }




   Object.assign(oldCoordsOnScroll2, lastCoordsOnScroll2);

   lastCoordsOnScroll2.x = lastClientCoords2.x - canvas2.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTopSixth < 0){
      lastCoordsOnScroll2.y = lastClientCoords2.y - (distFromTopSixth - window.pageYOffset);
   } else{
      lastCoordsOnScroll2.y = lastClientCoords2.y;
   }
   Object.assign(oldCoords2, lastCoords2);

   lastCoords2.x = lastClientCoords2.x - canvas2.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTopSixth < 0){
      lastCoords2.y = lastClientCoords2.y - (distFromTopSixth - window.pageYOffset);
   } else{
      lastCoords2.y = lastClientCoords2.y;
   }

});

addEventListener('mousemove', e=> {

   lastCoordsOnScroll.x = lastClientCoords.x - canvas1.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTop < 0){
      lastCoordsOnScroll.y = lastClientCoords.y - (distFromTop - window.pageYOffset);
   } else{
      lastCoordsOnScroll.y = lastClientCoords.y;
   }

   lastClientCoords.x = e.clientX;
   lastClientCoords.y = e.clientY;
   Object.assign(oldCoords, lastCoords);

   lastCoords.x = e.clientX - canvas1.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTop < 0){
      lastCoords.y = e.clientY - (distFromTop - window.pageYOffset);
   } else{
      lastCoords.y = e.clientY;
   }




   lastCoordsOnScroll2.x = lastClientCoords2.x - canvas2.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTopSixth < 0){
      lastCoordsOnScroll2.y = lastClientCoords2.y - (distFromTopSixth - window.pageYOffset);
   } else{
      lastCoordsOnScroll2.y = lastClientCoords2.y;
   }

   lastClientCoords2.x = e.clientX;
   lastClientCoords2.y = e.clientY;
   Object.assign(oldCoords2, lastCoords2);

   lastCoords2.x = e.clientX - canvas2.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTopSixth < 0){
      lastCoords2.y = e.clientY - (distFromTopSixth - window.pageYOffset);
   } else{
      lastCoords2.y = e.clientY;
   }

   scrolling = false;





});
addEventListener('resize', e=> {
   canvas1.width = innerWidth;
   canvas1.height = innerHeight;
   canvas2.width = innerWidth;
   canvas2.height = innerHeight;


   Object.assign(oldCoords, lastCoords);  

   lastCoords.x = e.clientX - canvas1.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTop < 0){
      lastCoords.y = e.clientY - (distFromTop - window.pageYOffset);
   } else{
      lastCoords.y = e.clientY;
   }


   Object.assign(oldCoords2, lastCoords2);  

   lastCoords2.x = e.clientX - canvas2.getBoundingClientRect().x;
   if(window.pageYOffset - distFromTopSixth < 0){
      lastCoords2.y = e.clientY - (distFromTopSixth - window.pageYOffset);
   } else{
      lastCoords2.y = e.clientY;
   }

});



class Circle{
   constructor(x, y, radius, color){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color; 
   }

   update(){
      this.draw();
   }

   draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();

      ctx.closePath();
   }

}
class Circle2{
   constructor(x, y, radius, color){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color; 
   }

   update(){
      this.draw();
   }

   draw(){
      ctx2.beginPath();
      ctx2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx2.fillStyle = this.color;
      ctx2.fill();
      ctx2.closePath();
   }

}


   

function animateCanvas(){

   requestAnimationFrame(animateCanvas);
   if (isMobile.any()) {
      return;
  }

   let cLength = Math.sqrt(Math.pow(( lastCoords.x - oldCoords.x), 2) + Math.pow((  lastCoords.y - oldCoords.y), 2));
   let mLength = 15;
   let aLength = oldCoords.y - lastCoords.y;
   let bLength = oldCoords.x - lastCoords.x;
   for (let i = 0; i <= cLength / mLength; i++) {
      let circlesArr = [];
      let x = i / (cLength / mLength) * bLength + lastCoords.x;
      let y =  i / (cLength / mLength) * aLength + lastCoords.y;
      circlesArr.push(new Circle(x, y, radius, 'blue'));

      circlesArr.forEach(item => item.draw());
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas1.width, canvas1.height);
   }


   let cLengthOnScroll = Math.sqrt(Math.pow(( lastCoordsOnScroll.x - oldCoordsOnScroll.x), 2) + Math.pow((  lastCoordsOnScroll.y - oldCoordsOnScroll.y), 2));
   let aLengthOnScroll = oldCoordsOnScroll.y - lastCoordsOnScroll.y;
   let bLengthOnScroll = oldCoordsOnScroll.x - lastCoordsOnScroll.x;
   for (let i = 0; i <= cLengthOnScroll / mLength; i++) {
      if (!scrolling) {
         return;
      }

      let circlesArr = [];
      let x = i / (cLengthOnScroll / mLength) * bLengthOnScroll + lastCoordsOnScroll.x;
      let y =  i / (cLengthOnScroll / mLength) * aLengthOnScroll + lastCoordsOnScroll.y;
      circlesArr.push(new Circle(x, y, radius, 'blue'));

      circlesArr.forEach(item => item.draw());
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas1.width, canvas1.height);

   }


}   
animateCanvas();


function animateAnotherCanvas(){
   requestAnimationFrame(animateAnotherCanvas);
   if (isMobile.any()) {
      return;
   }

   let cLength = Math.sqrt(Math.pow(( lastCoords2.x - oldCoords2.x), 2) + Math.pow((lastCoords2.y - oldCoords2.y), 2));
   let mLength = 15;
   let aLength = oldCoords2.y - lastCoords2.y;
   let bLength = oldCoords2.x - lastCoords2.x;
   for (let i = 0; i <= cLength / mLength; i++) {
      let circlesArr = [];
      let x = i / (cLength / mLength) * bLength + lastCoords2.x;
      let y =  i / (cLength / mLength) * aLength + lastCoords2.y;
      circlesArr.push(new Circle2(x, y, radius, 'blue'));

      circlesArr.forEach(item => item.draw());
      ctx2.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
   }


   let cLengthOnScroll = Math.sqrt(Math.pow(( lastCoordsOnScroll2.x - oldCoordsOnScroll2.x), 2) + Math.pow((  lastCoordsOnScroll2.y - oldCoordsOnScroll2.y), 2));
   let aLengthOnScroll = oldCoordsOnScroll2.y - lastCoordsOnScroll2.y;
   let bLengthOnScroll = oldCoordsOnScroll2.x - lastCoordsOnScroll2.x;
   for (let i = 0; i <= cLengthOnScroll / mLength; i++) {
      if (!scrolling) {
         return;
      }

      let circlesArr = [];
      let x = i / (cLengthOnScroll / mLength) * bLengthOnScroll + lastCoordsOnScroll2.x;
      let y =  i / (cLengthOnScroll / mLength) * aLengthOnScroll + lastCoordsOnScroll2.y;
      circlesArr.push(new Circle2(x, y, radius, 'blue'));

      circlesArr.forEach(item => item.draw());
      ctx2.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

   }
}
animateAnotherCanvas()






