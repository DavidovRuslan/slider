let slide = document.querySelectorAll(".slide");
function slider(){
    let i = 0;
    setInterval(function(){
        if ( i < slide.length-1){
        slide[i].classList.remove("slide_active")
        slide[i+1].classList.add("slide_active")
        i++
        }else {
            slide[i].classList.remove("slide_active")
            slide[0].classList.add("slide_active")
            i = 0
        }
        
    }, 2000)
}
slider()


