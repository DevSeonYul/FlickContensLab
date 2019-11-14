$(document).ready(function () {

    focusRollPlay();

    // var
    var focusCnt = $('.content .mainBanner>li').length;
    var focusIndex = 1;

    // func
    function focusNext() {
        $('.content .mainBanner>li:first').appendTo('.content .mainBanner');
        onlyFirstFocus();
        focusIndex++;
        if (focusIndex > focusCnt) { focusIndex = 1; }
    }
    function focusRollPlay() {
        focus_roll = setInterval(function () { focusNext(); }, 5000);
    }
    function focusRollStop() {
        clearTimeout(focus_roll);
    }
    function onlyFirstFocus() {
        $('.content .mainBanner>li').hide().eq(0).show();
    }
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function notready() {
    alert("준비 중입니다.");
}