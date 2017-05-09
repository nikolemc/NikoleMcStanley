//Foundationize this mofo!
$(document).foundation();

//Touch UI Stuff
$(function () {
    var select_delay = 100;
    if (Modernizr.touch) {
        //alert('Touch Screen');
        $("html").addClass("touch-device");
        $('a').on({
            'touchstart': function () {
                $(this).addClass("touched");
            },
            'touchend': function () {
                $(this).removeClass("touched");
                //After the cool animation, go to the link.
                window.location.assign($(this).attr("href"));
            }
        });
    } else {
        $("html").addClass("no-touch");
    }

    //Make our tasty UI look/work better
    $("a").on('click', function (e) {
        //For this demo, disable click
        e.preventDefault();
    });
});

