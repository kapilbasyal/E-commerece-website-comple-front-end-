$(document).ready(function(){

    $(".fp1").owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:2500,
        lazyload: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 4
            }
        }
    });



    $(".brand-logo1").owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        lazyload: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });


    var fullImg = document.getElementById("fullimg");
    var smallImg = document.getElementsByClassName("smallimage");
     smallImg[0].onclick = function(){
          fullImg.src = smallImg[0].src;
      } 
      smallImg[1].onclick = function(){
        fullImg.src = smallImg[1].src;
    } 
    smallImg[2].onclick = function(){
        fullImg.src = smallImg[2].src;
    } 
    smallImg[3].onclick = function(){
        fullImg.src = smallImg[3].src;
    } 








    AOS.init();


});