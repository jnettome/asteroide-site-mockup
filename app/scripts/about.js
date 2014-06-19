'use strict';
var _mainHeader = $('#header'),
    _featuredBackground = $('.featured-background'),
    waitForAnimationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

_mainHeader.addClass('animated fadeInDown').one(waitForAnimationEnd, function () {
    _featuredBackground.backstretch(_featuredBackground.data('image-src'));
    _featuredBackground.addClass('animated fadeInDown');

    $('#content').addClass('animated fadeInUp');
});
