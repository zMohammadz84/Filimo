$(document).ready(function () {
    
    $('.button').click(function (e) { 
        e.preventDefault();
        $('.slider-show').slideToggle();
        $('.button svg').toggleClass('rotate')
    });

});