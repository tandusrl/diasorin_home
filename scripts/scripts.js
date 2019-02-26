/* SLIDER CANVAS */
$(document).ready(function(){
    $('h2#dsComingSoon').delay(500).fadeIn(3000);
    $('#dsSlider h5').delay(1500).fadeIn(5000);
});

$(document).ready(function(){

setInterval(function() { 
  $('#dsSlider > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#dsSlider');
},  7000);
});


/* SIDE MENU */

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

var heightWWP = Math.ceil($('#dsPresenceExt').height());
var offsetWWP = Math.ceil($('#dsPresenceExt').offset().top) - $('#dsSlider').height();
var top = Math.ceil($('#dsSlider').offset().top);
console.log(heightWWP);
offsetWWP += heightWWP / 2;
console.log(offsetWWP);



$(window).on('scroll', function() {
    var scroll = $(this).scrollTop();

    console.log(scroll);
    if (scroll > offsetWWP) {
        presenceFade();
    }
});

function presenceFade() {
    $('#dsPresenceContainer').fadeIn(1000);
}*/