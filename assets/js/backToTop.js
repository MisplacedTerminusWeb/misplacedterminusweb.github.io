
//
// Version : 1.0.0
// Created by : JBS Group
//


$(document).ready(function() {
    $('#toTopBtn').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
        } else {
        $('#toTopBtn').fadeOut();
        }
    });
    
    $('#toTopBtn').click(function() {
        $("html, body").animate({
        scrollTop: 0
        }, 500);
        return false;
    });



});