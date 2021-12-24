$(document).ready(function(){
    var currSlide = 1
    
function moveSlide(){
    if(currSlide < 3){
        $('.slide-container').animate({
            'left' : '-=100%'
        },1500)
        currSlide++
    }
    else{
        $('.slide-container').animate({
            'left' : '0'
        },1500)
        currSlide = 1
    }
}
setInterval(moveSlide,2000)

})


