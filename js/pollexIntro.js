//스크롤 애니메이션//
function Visible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(),
        scrolltop = $(window).scrollTop(),
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval === "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval === "above") return ((y < (viewportHeight + scrolltop)));
}

$(window).on('scroll',function(){ action(); });
var sec_1 = false;
var sec_2a = false;
var sec_2b = false;
var sec_3a = false;
var sec_3b = false;

function action(){
    //SEC1 animation//
    if (Visible($('#sec1_intro'))&&!sec_1) {
        sec_1=true;
        $('#sec1_intro').css("animation-play-state", "running");
        $('.introduce').css("animation-play-state", "running");
    }
    //SEC2 animation//
    if (Visible($('.intro_top'))&&!sec_2a) {
        sec_2a=true;
        $('.intro_top>h2').css("animation-play-state", "running");
        $('.intro_top>span').css("animation-play-state", "running");
        $('.intro_mid').css("animation-play-state", "running");
        $('.intro_mid>h2::before').css("animation-play-state", "running");
    }
    if (Visible($('.intro_bottom'))&&!sec_2b) {
        sec_2b=true;
        $('.intro_bottom').css("animation-play-state", "running");
        $('.intro_bottom>div').css("animation-play-state", "running");
        $('.percent').css("animation-play-state", "running");
        $('.intro_bottom').css("animation-play-state", "running");
    }
    //SEC3 animation//
    if (Visible($('#sec3_intro'))&&!sec_3a) {
        sec_3a=true;
        $('#tmp3-1').css("animation-play-state", "running");
    }
    if (Visible($('#tmp3-2'))&&!sec_3b) {
        sec_3b=true;
        $('#tmp3-2').css("animation-play-state", "running");
    }
}