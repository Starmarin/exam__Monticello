const mapAPI = 'AIzaSyB-51rZ0eFYnrjZ0li2Q_SIc6zJFSbff5E';
$(document).ready(function () {
    $(".menu-btn").click(function () {
        $(".nav__menu").toggleClass("open");
        $(".menu-btn").toggleClass("open-btn");

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
