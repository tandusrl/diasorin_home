/*! js-cookie v3.0.0-beta.4 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var r=e.Cookies,n=e.Cookies=t();n.noConflict=function(){return e.Cookies=r,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var t={read:function(e){return e.replace(/%3B/g,";")},write:function(e){return e.replace(/;/g,"%3B")}};return function r(n,i){function o(r,o,u){if("undefined"!=typeof document){"number"==typeof(u=e({},i,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),r=t.write(r).replace(/=/g,"%3D"),o=n.write(String(o),r);var c="";for(var f in u)u[f]&&(c+="; "+f,!0!==u[f]&&(c+="="+u[f].split(";")[0]));return document.cookie=r+"="+o+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var u=r[o].split("="),c=u.slice(1).join("="),f=t.read(u[0]).replace(/%3D/g,"=");if(i[f]=n.read(c,f),e===f)break}return e?i[e]:i}},remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(t,{path:"/"})});

/* ---- SLIDER CANVAS ---- */
$(document).ready(function(){
    $('.dsComingSoon').delay(500).fadeIn(3000);
    $('.slider-machinery').delay(1500).fadeIn(3000);
    $('#dsDisclaimerDiv').delay(1500).fadeIn(5000);
});

$(document).ready(function(){

    var currentSlide = 0;
    var interval = null;

    interval = setInterval(nextSlide, 7000);

    $('#sliderBullets a').click(function(e) {
        e.preventDefault();
        currentSlide = $(this).data('slide');
        clearInterval(interval);
        interval = setInterval(nextSlide, 7000);
        nextSlide(currentSlide);
    });

    function nextSlide(index) {
        if (index != null){
            currentSlide = index;
        } else {
            currentSlide += 1;
            currentSlide = currentSlide % 5;
        }

        $('.dsSlide').fadeOut(1000);
        $('.dsSlide[data-slide="' + currentSlide + '"]').fadeIn(1000);            

        $('#sliderBullets a').removeClass('current');
        $('#sliderBullets a[data-slide="' + currentSlide + '"]').addClass('current');
    }
});


/* ---- SIDE MENU ---- */

$(document).ready(function(){
    $('#menuMobileActive').on('click', function(e){
        $('#menuMobile').animate({
            right: 0,
        });
        $('#menuMobileOverlay').fadeIn(300);
        // $('#menuMobileActive').text('Close Menu');
    });
    $('#menuMobileOverlay, #menuMobileClose').on('click', function(e){
        $('#menuMobile').animate({
            right: '-320px',
        });
        // $('#menuMobileActive').text('Open Menu');
        $('#menuMobileOverlay').fadeOut(300);
    });
});

function smallMenu(){
    $('#dsMenu_desktop').animate({
        height: '50px',
    });
    $('#dsMenuElements ul.dsMenuDesktop li a').animate({
        padding: '15px 20px',
    });
    $('#dsLogo img').animate({
        width: '50px',
    });
}

function normalMenu(){
    $('#dsMenu_desktop').animate({
        height: '100px',
    });
    $('#dsMenuElements ul.dsMenuDesktop li a').animate({
        padding: '42px 20px',
    });
    $('#dsLogo img').animate({
        width: '100px',
    });
}

/* ---- GROUP MENU ---- */

var stateD = true;
var stateM = true;

$('#dsGroupMenu').on('click', function(e){
    if ( stateD ) {
            $('#dsMenuWrapper').animate({
                top: '0'
            });
            $('img#arrow').animate({
                transform: 'rotateZ(180deg)'
            });
        } else {
            $('#dsMenuWrapper').animate({
                top: '-300px'
            });
            $('img#arrow').animate({
                transform: 'rotateZ(0deg)'
        });
    }
    stateD = !stateD;
});

$('#dsGroupMenuMobile').on('click', function(e){
    if ( stateM ) {
            $('#dsMenuWrapper').animate({
                top: '0'
            });
            $('img#arrow').animate({
                transform: 'rotateZ(180deg)'
            });
        } else {
            $('#dsMenuWrapper').animate({
                top: '-70vh'
            });
            $('img#arrow').animate({
                transform: 'rotateZ(0deg)'
        });
    }
    stateM = !stateM;
});

// $(window).on('scroll', function() {
//       var scroll = $(this).scrollTop();
//       var scrollState = "top";
//       console.log(scroll);
//       if(scroll != 0) {
//           smallMenu();
//       } else if (scroll < 20) {
//           normalMenu();
//       }
//  });

/* MACHINERY SLIDER */

$(document).ready(function(){

    var currentBullet = 0;
    $(".dsBullets[data-project='" + currentBullet + "']").addClass('activeBullet');

    $(".dsBullets").click( function(e) {
        e.preventDefault();
        // console.log("click on " + currentBullet);
        currentBullet = parseInt($(this).data('project'));
        $('.dsBullets').removeClass('activeBullet');
        $(this).addClass('activeBullet');
        updateMachines(currentBullet);
    });

    function updateMachines(index){
        // SHOWS CORRECT IMAGE OF MACHINERY
        $('.dsMachineryImg').hide();
        $(".dsMachineryImg[data-img='" + currentBullet + "']").show();

        // SHOWS CORRECT TITLE - DESCRIPTION OF MACHINERY
        $('.dsMachinesContainer').hide();
        $(".dsMachinesContainer[data-description='" + currentBullet + "']").show();
    }

});

/* FOOTER POP-UP */

$(document).ready(function(){
    $('#appPopup').on('click', function(e){
        $('#dsPopupOverlay').fadeIn(300).css('display', 'flex');
        $('').delay(300).show();
        // $('#menuMobileActive').text('Close Menu');
    });
    $('#dsPopupOverlay').on('click', function(e){
        // $('#menuMobileActive').text('Open Menu');
        $('#dsPopupOverlay').fadeOut(300);
        $('dsPopUpApp').hide();
    });
});

/* ANIMATIONS 

AOS.init(
    { disable: 'mobile', }
);*/

/* --- POPUP - COVID --- */
// $(document).ready(function(){
//     // if (Cookies.get('cvd9') !== 'read') {

//     // } else {
//     //     $('.covid-popup-wrapper').remove()
//     // } 
//     setTimeout(function(){
//         $('.covid-popup-wrapper').fadeIn()
//     }, 1000)
//     $('.covid-close-popup').on('click', function(){
//         // $('.covid-popup-wrapper').removeClass('active')
//         // // Cookies.set('cvd9', 'read', { expires: 30 } )
//         // setTimeout(function(){
//         //     $('.covid-popup-wrapper').remove()
//         // }, 2000)
//         $('.covid-popup-wrapper').fadeOut(1000, function(){
//             $('.covid-popup-wrapper').remove()
//         })
//     })
// })