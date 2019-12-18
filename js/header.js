$('document').ready(function(){
    //Navigation bar responsive button
    var height = window.innerHeight;
    var width = window.innerWidth;
    $('.nav-menu').on('click',function(){
        $('nav').toggle();
    });
    $('.close-nav').on('click',function(){
        $('nav').toggle();
    });
    
    //responsive scripts
    if(width<=1300){
        $('nav').css('height',height);
        //var hhd_width = $('.hd-home-box').css('width');
        //$('.hd-home-box').css('left',(width/2)-(hhd_width/2));
    }
})