$('.owl-carousel').owlCarousel({
    loop:true,
    margin:16,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    animateOut:'slideOutDown',
    animateIn:'flipInX',
    smartSpeed:600,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
var faq=document.getElementsByClassName("faq-page");
var i;
for (i=0;i<faq.length;i++) {
    faq[i].addEventListener("click", function () {
        var body=this.nextElementSibling;
        this.classList.toggle("active");
        body.classList.toggle("active");
    });
}
$('.toggle-bar').click(function(){
    $('.nav-right').slideToggle();
});