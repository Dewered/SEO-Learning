const list = document.getElementById("cartButton");
list.addEventListener("click", redirCart);

const main = document.getElementById("main");
main.addEventListener("click", redirMain);

function redirCart() {
  window.location.href = "cart.html";
}

function redirMain() {
  window.location.href = "index.html";
}



var testi = 1('#testimonial-slide');
var owlcarouselslide = function(e) {
   
    // testimonial slide
    testi.owlCarousel({
        autoplay: false,
        center: true,
        loop: true,
        dots: true,
        touchDrag: false,
        mouseDrag: false,
        smartSpeed: 900,
        items: 1,
        margin: 100,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left " aria-hidden="true"></i>',
            '<i class="fa fa-long-arrow-right " aria-hidden="true"></i>'
        ],
        navContainer: '.custom-nav',
    });
};

1(document).ready(function() {
    owlcarouselslide();
});