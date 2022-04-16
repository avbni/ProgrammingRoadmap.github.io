window.addEventListener("scroll",function(){
    var scrollValue = window.pageYOffset;
    var headerImage = document.querySelector("#header .header-image");
    console.log(scrollValue);

    headerImage.style.transform = "translateY(" + scrollValue*-0.2 + "px)";

    if(scrollValue>=1280){
        document.querySelector(".left-card").classList.remove("animation-stopper");
        document.querySelector(".center-card").classList.remove("animation-stopper");
        document.querySelector(".right-card").classList.remove("animation-stopper");
    }

    if(scrollValue>=90){
        document.querySelectorAll(".main-right")[0].classList.remove("animation-stopper");
    }
    if(scrollValue>=375){
        document.querySelector(".main-left").classList.remove("animation-stopper");
    }
    if(scrollValue>=660){
        document.querySelectorAll(".main-right")[1].classList.remove("animation-stopper");
    }

    if(scrollValue<1280){
        document.querySelector(".left-card").classList.add("animation-stopper");
        document.querySelector(".center-card").classList.add("animation-stopper");
        document.querySelector(".right-card").classList.add("animation-stopper");
    }

    if(scrollValue<90){
        document.querySelectorAll(".main-right")[0].classList.add("animation-stopper");
        document.querySelectorAll(".main-right")[1].classList.add("animation-stopper");
        document.querySelector(".main-left").classList.add("animation-stopper");
    }
})