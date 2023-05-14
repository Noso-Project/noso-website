var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        var body = this.nextElementSibling;
        this.classList.toggle("active");
        body.classList.toggle("active");
    });
}
$('.toggle-bar').click(function(){
    $('.nav-right').slideToggle();
});
AOS.init();