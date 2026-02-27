gsap.registerPlugin(ScrollTrigger);

/* Intro Animation */
const intro = gsap.timeline();

intro
.from(".navbar",{y:-100,opacity:0,duration:1})
.from(".hero-text h1",{y:80,opacity:0,stagger:0.2,duration:1})
.from(".hero-text p",{opacity:0,duration:1})
.from(".tree-wrapper",{scale:0.5,opacity:0,duration:1}, "-=1");

/* Floating Tree */
gsap.to(".tree-wrapper",{
  y:-30,
  duration:3,
  repeat:-1,
  yoyo:true
});

/* Scroll Tree Rotation + Zoom */
gsap.to(".tree-wrapper",{
  scale:1.5,
  rotation:360,
  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"bottom+=500 top",
    scrub:true,
    pin:true
  }
});

/* Progress Bar */
gsap.to(".progress-bar",{
  width:"100%",
  scrollTrigger:{
    trigger:document.body,
    start:"top top",
    end:"bottom bottom",
    scrub:true
  }
});

/* Upload */
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const previewImage = document.getElementById("previewImage");

uploadBtn.addEventListener("click",()=>fileInput.click());

fileInput.addEventListener("change",function(){
  const file = this.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      previewImage.src = e.target.result;
      previewImage.style.display="block";
    }
    reader.readAsDataURL(file);
  }
});