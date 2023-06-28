$(function(){

    // 메인 메뉴 보이기
    $('.list_nav').on('mouseenter keyup', function(){
        if ($(window).width() >= 1000) {
            $('.main_menu').find('ul').show();
            $('.bg_nav').show();
        }
        if ($(window).width() < 1000) {
            $('.main_menu').show();
            $('.bg_nav').show();
        }
    });
    
    // 메인 메뉴 숨기기
    $('.list_nav').on('mouseleave', function(){
        if ($(window).width() >= 1000) {
            $('.main_menu').find('ul').hide();
            $('.bg_nav').hide();
        }
        if ($(window).width() < 1000) {
            $('.main_menu').hide();
            $('.bg_nav').hide();
        }
        
    });
    $('.btn_001 button:first-child').on('focus',function(){
        $('.main_menu').find('ul').hide();
        $('.bg_nav').hide();
    });

    //슬라이드 메인베너
    var swiper = new Swiper('.visual', {
        loop:true,
        autoplay:{
            delay:3500,
            disableOnInteraction:false
        },
        navigation: {  //좌우버튼
            nextEl: '.visual .btn_next',
            prevEl: '.visual .btn_prev'
        }        
    });

    $('.btn_pause').on('click', function(){
        swiper.autoplay.stop();
        $(this).hide();
        $(this).next().show();
    });

    $('.btn_play').on('click', function(){
        swiper.autoplay.start();
        $(this).hide();
        $(this).prev().show();
    });

    var swiper = new Swiper('.client_slide', {
    });

//슬라이드  about opco
    var swiper = new Swiper('.visual2', {
        loop:true,
        autoplay:{
            delay:3500,
            disableOnInteraction:false
        },
        navigation: {  //좌우버튼
            nextEl: '.visual2 .btn_next',
            prevEl: '.visual2 .btn_prev'
        }        
    });

    $('.btn_pause').on('click', function(){
        swiper.autoplay.stop();
        $(this).hide();
        $(this).next().show();
    });

    $('.btn_play').on('click', function(){
        swiper.autoplay.start();
        $(this).hide();
        $(this).prev().show();
    });

    var swiper = new Swiper('.client_slide', {
    });

});
