'use strict';
var _featuredBackground = $('.featured-background'),
    _mainHeader = $('#header'),
    _featuredText = $('h1.featured-text'),
    _featuredPlay = $('.featured-play'),
    waitForAnimationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    verticalCenterAlignment,
    NProgress,
    slideTime = 3000;

verticalCenterAlignment = function(_element) {
    var _height = _element.outerHeight();

    _element.css('top', $(window).outerHeight() / 2).css('margin-top', (_height/2)*1);
    return _element;
};

verticalCenterAlignment(_featuredText);

_mainHeader.addClass('animated fadeInDown').one(waitForAnimationEnd, function () {
    // First animation
    _featuredBackground.backstretch(_featuredBackground.data('image-src'));
    _featuredBackground.addClass('animated fadeInDown');
    _featuredText.addClass('animated fadeInDown');
    _featuredPlay.addClass('animated fadeInUp').one(waitForAnimationEnd, function() {
        // Start progress bar
        NProgress.start();

        setTimeout(function() {
            // Second animation
            NProgress.done();

            _featuredBackground.addClass('animated fadeOutDown');
            _featuredText.addClass('animated fadeOutUp');
            _featuredPlay.addClass('animated fadeOutDown').one(waitForAnimationEnd, function() {
                _featuredBackground.removeClass('animated fadeOutDown fadeInDown');
                _featuredText.removeClass('animated fadeOutUp fadeInDown');
                _featuredPlay.removeClass('animated fadeOutDown fadeInUp');
                // Enter second slide
                _featuredBackground.backstretch('/images/featured-background-2.jpg');
                _featuredBackground.addClass('animated fadeInDown');
                _featuredText.html('<small>TERRITÓRIO PRESENTS</small>O MELHOR INVERNO DE TODOS OS TEMPOS');
                _featuredText.addClass('animated fadeInDown');
                _featuredPlay.addClass('animated fadeInUp');
            });


        }, slideTime);
    });
});
