
const texts = ["Bolat Zhanserik", "learning design", " yummy yuppie"]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type(){
    if(count===texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 100);
})();
var tlFirstScroll = new TimelineMax();

tlFirstScroll
.set(".iphone-image-wrapper", {scale: 5, transformOrigin: "center top"})
.to(".iphone-image-wrapper", 3, {scale: 2.2, y:"-50%"})
.to(".iphone-image-wrapper",3,{scale:1,y:"0%"})

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger1',
    triggerHook: 0,
    duration: "100%"
})

.setTween(tlFirstScroll)
.addTo(controller);

var tlSecondScroll = new TimelineMax();
tlSecondScroll
.to(".iphone1", 3, {x: "-50%"})
.to(".iphone2", 3, {x: "50%"},  "-=3")
.from(".iphone1-text", 0.3, {autoAlpha: 0}, "-=3")
.from(".iphone2-text", 0.3, {autoAlpha: 0}, "-=3")
.to(".iphone1-text", 3, {x: "-30%"}, "-=3")
.to(".iphone2-text", 3, {x: "30%"}, "-=3")

.set(".iphone-stick", {display: "block"})
.to(".iphone1-img-behind", 3, {x: "-50%"})
.to(".iphone2-img-behind", 3, {x: "60%"},  "-=3")
.to(".iphone1-img", 0.5, {autoAlpha: 0}, "-=3")
.to(".iphone2-img", 0.5, {autoAlpha: 0}, "-=3")
.from(".iphone1-text", 0.3, {autoAlpha: 0}, "-=3")
.from(".iphone2-text", 0.3, {autoAlpha: 0}, "-=3")
var scene2 = new ScrollMagic.Scene({
    triggerElement: '.trigger2',
    triggerHook: 0,
    duration: "100%"
})

.setTween(tlSecondScroll)
.setPin(".trigger2")
.addTo(controller);