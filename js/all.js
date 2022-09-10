$(document).ready(function () {
    // 漢堡選單
    $('.hamburger').click(function (e) { 
    e.preventDefault();
    $('.hamburger').toggleClass('active');
    $('.aside').toggleClass('open');
   });


   //至頂按鈕
   $('.top').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0
    },300);
   });

});