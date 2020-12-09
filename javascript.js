$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$('.newsCarousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});