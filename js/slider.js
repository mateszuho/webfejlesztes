$(document).ready(function () {
    $('.slider').slick({
        dots: true, 
        infinite: true, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 4000, 
        arrows: false, 
        responsive: [ 
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    arrows: false, 
                    dots: true
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true, 
                }
            },
            
        ]
    });
});
