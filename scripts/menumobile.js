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