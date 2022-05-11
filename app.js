const body = document.body ; 
const slides = document.querySelectorAll(".slider");
const slide = document.getElementById("slideContainer");


let activeSlide = 0;

setBgToBody();

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

slide.addEventListener("click",()=>{
    activeSlide++;
    if(activeSlide >slides.length -1){
        activeSlide = 0;
    }
    setBgToBody();
    slides.forEach(resim => {
        resim.classList.remove("active");
    })
    slides[activeSlide].classList.add("active");
})

