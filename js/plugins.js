/*global $, alert, console*/
$(function () {
    'use strict';
    
    //scroll to sections and add class main color 
    
    $('ul li a').click(function () {
        var myId = $(this).data('value');
        $('html, body').animate({
            scrollTop: $('#' + myId).offset().top + 1
        }, 1500);
        $(this).addClass('main-color').parent().siblings().find('a').removeClass('main-color');
        console.log(myId);
    });
    
    // navbar background's change color with scroll   
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.navbar').height()) {
            $('.navbar').css('background', 'rgba(231, 231, 231,0.5)');
        } else {
            $('.navbar').css('background', '#e7e7e7');
        }
        
        //sync navbar links with sections
        $('.block').each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {

                $('ul li a').removeClass('main-color');
                $('ul li a[data-value="' + $(this).attr('id') + '"]').addClass('main-color');
            }
            console.log($('ul li a[data-value="' + $(this).attr('id') + '"]'));
        });
    });
    // circle progress plugin 
    
    $('.circle-one').circleProgress({
        value: .90,
        size: 200,
        reverse: false,
        startAngle: 30,
        fill: {
            color: "#47A279"
        },
        animation: {
            duration: 2000,
            delay: 2000
        }
    });
    $('.circle-two').circleProgress({
        value: .80,
        size: 200,
        reverse: false,
        startAngle: 30,
        fill: {
            color: "#47A279"
        },
        animation: {
            duration: 2000,
            delay: 2500
        }
    });
    $('.circle-three').circleProgress({
        value: .70,
        size: 200,
        reverse: false,
        startAngle: 30,
        fill: {
            color: "#47A279"
        },
        animation: {
            duration: 2000,
            delay: 3000
        }
    });
    $('.circle-four').circleProgress({
        value: .60,
        size: 200,
        reverse: false,
        startAngle: 30,
        fill: {
            color: "#47A279"
        },
        animation: {
            duration: 2000,
            delay: 3500
        }
    });
    
    // latest-news make box shadow by hover 
    
    $('.latest-news .news').hover(function () {
        $(this).css('box-shadow', '10px 15px 31px #a2a2a2');
    }, function () {
        $(this).css('box-shadow', 'none');
    });
    
    //public function as any anchor was not go to another page
    $('a').click(function (e) {
        e.preventDefault();
    });
    
    
    // carousel slidder testimonials
    $('.carousel').carousel({
      interval: 5000
    });
    
    // wow js plugins
    new WOW().init();
    
    
    
    
    
});