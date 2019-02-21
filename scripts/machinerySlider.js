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