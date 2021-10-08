


$(document).ready(function(){
    // $('.shop__child--link').click(function(el){
    //     el.preventDefault();
    //     $('.shop__child').toggleClass('active');
    // });
    // b = $('.shop_nav');
    // console.log(b);
    // console.log('hello');
    // $('.shop__child--link').each(function(index, value) {
    //     // console.log(`div${index}: $}`);
    //     var a = $('.shop__child--link');
    //     console.log(value);
    //     value.click(function(el){
    //         el.preventDefault();
    //         console.log(index);
    //         $('.shop__child').toggleClass('active');
    //     });
    // });
    $('.shop__child--link').each(function(index , value) {
        // console.log(`div${index}: $}`);
        // $(this).click(function(){
        //     $('.shop__child').each(function(){
        //         $(this).toggleClass('active');
        //     });
        // });
        // console.log(value);
        a = $('.shop__child');
        $(this).click(function(el){

            el.preventDefault();
            $('.shop__child')[index].classList.toggle('active');
            $('.shop__child--icon')[index].classList.toggle('fa-angle-down fa-angle-up');
        });
        
    });

});