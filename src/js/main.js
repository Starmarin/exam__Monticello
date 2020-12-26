const mapAPI = 'AIzaSyB-51rZ0eFYnrjZ0li2Q_SIc6zJFSbff5E';
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(".form__btn").click(function () {
    let value = $('input').val();
    if (value == '') {
        alert("Enter Email")
    } else {
        $(this).text(function (i, text) {
            return text === "RETURN FORM" ? "SUBMIT" : "RETURN FORM";
        });
        $("input").toggleClass("close");
    }
});
$(".menu-btn").click(function () {
    $(".nav__menu").toggleClass("open");
    $(".menu-btn").toggleClass("open-btn");

});
$(".about__btn").click(function () {
    $(this).toggleClass("close");

});
$(".gallery__btn").click(function () {
    $(".gallery__main").clone().appendTo(".gallery>.container");
    $(this).toggleClass("close");

});

$('.slider1').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    vertical: true,
    arrows: false,

});
$('.slider2').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]
});
function initMap() {

    let myMap = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.667879,
            lng: -73.890639
        },
        zoom: 13,
        mapId: '5b47619262bf6572'
    });

    let markerCenter = {
        lat: 40.677531,
        lng: -73.901117
    };
    let marker = new google.maps.Marker({
        position: markerCenter,
        map: myMap,
        title: 'Visit our office',
        icon: 'https://raw.githubusercontent.com/Starmarin/exam__Monticello/master/Pin.png'
    });
}
initMap();
