gsap.registerPlugin(ScrollTrigger);

gsap.from("body",{opacity:0,duration:1});

gsap.to(".leaf-wrapper",{
  y:-30,
  duration:3,
  repeat:-1,
  yoyo:true
});

const leaf = document.querySelector(".leaf-wrapper");

leaf.addEventListener("mousemove",(e)=>{
  const rect = leaf.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width/2;
  const y = e.clientY - rect.top - rect.height/2;

  gsap.to(leaf,{
    rotationY:x*0.1,
    rotationX:-y*0.1,
    duration:0.3
  });
});

leaf.addEventListener("mouseleave",()=>{
  gsap.to(leaf,{
    rotationY:0,
    rotationX:0,
    duration:0.6
  });
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