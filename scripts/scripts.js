/* SLIDER CANVAS */
$(document).ready(function(){
    $('h2#dsComingSoon').delay(500).fadeIn(3000);
    $('#dsSlider h5').delay(1500).fadeIn(5000);
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
            currentSlide = currentSlide % 3;
        }

        $('.dsSlide').fadeOut(1000);
        $('.dsSlide[data-slide="' + currentSlide + '"]').fadeIn(1000);            

        $('#sliderBullets a').removeClass('current');
        $('#sliderBullets a[data-slide="' + currentSlide + '"]').addClass('current');
    }
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

AOS.init(
    { disable: 'mobile', }
);*/