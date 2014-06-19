'use strict';
var _featuredBackground = $('.featured-background'),
    _mainHeader = $('#header'),
    _featuredText = $('h1.featured-text'),
    _featuredPlay = $('.featured-play'),
    waitForAnimationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    verticalCenterAlignment;

verticalCenterAlignment = function(_element) {
    var _height = _element.outerHeight();

    _element.css('top', $(window).outerHeight() / 2).css('margin-top', (_height/2)*1);
    return _element;
}

verticalCenterAlignment(_featuredText);

_mainHeader.addClass('animated fadeInDown').one(waitForAnimationEnd, function () {
    _featuredBackground.backstretch(_featuredBackground.data('image-src'));
    _featuredBackground.addClass('animated fadeInDown').one(waitForAnimationEnd, function() {
    });

    _featuredText.addClass('animated fadeInDown').one(waitForAnimationEnd, function() {
        });
    _featuredPlay.addClass('animated fadeInUp');
});
