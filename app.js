var slideIndex=1;

showSlide(slideIndex);

var myInterval = setInterval(function(){
    slideAuto();
},4000);

function slideBy(n){
    
    slideIndex += n;
    
    setTimeout(function(){
        clearInterval(myInterval);
        myInterval = setInterval(function(){
            slideAuto();
        },4000);
        showSlide(slideIndex, n);
        return;
        }, 500);
 
}

function slideAuto(){
    slideIndex += 1;
    showSlide(slideIndex, 1);
}


function slideTo(n){
    var m = 0;
    if(slideIndex<n){
        m = 1;
    }
    else{
        m = -1;
    }
    slideIndex = n;
    
    setTimeout(function(){
        clearInterval(myInterval);
        myInterval = setInterval(function(){
            slideAuto();
        },4000);
        showSlide(slideIndex, m);
        return;
        }, 500);
}




function showSlide(slideNo, n){
    
    var slides = document.getElementsByClassName("introduction-slide");
    var dots = document.getElementsByClassName("dot");
    var lastSlide=slideNo-n;
    if(slideNo>slides.length){
        slideIndex = 1;
    }
    if(slideNo<1){
        slideIndex = slides.length;
    }
    
    for(var i=0; i<slides.length; i++){
            slides[i].style.display = "none";   
    }
    for(var i=0; i<dots.length; i++){
        dots[i].classList.remove("active-dot");
        dots[i].classList.add("dotstyle");
    }
    if(n>0){
        slides[slideIndex-1].classList.remove("animation-slider-right");
        slides[slideIndex-1].classList.remove("animation-slider-left");
        slides[slideIndex-1].classList.add("animation-slider-right");
    }
    if(n<0){
        slides[slideIndex-1].classList.remove("animation-slider-left");
        slides[slideIndex-1].classList.remove("animation-slider-right");
        slides[slideIndex-1].classList.add("animation-slider-left");
    }
    slides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].classList.add("active-dot");
    dots[slideIndex-1].classList.remove("dotstyle");
  
}


function latestHover(n){
    var header = document.getElementsByClassName("latest-header");
    header[n].style.color ="#00c282";
}

function latestHoverOff(n){
    var header = document.getElementsByClassName("latest-header");
    header[n].style.color = "black";
}

