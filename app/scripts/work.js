'use strict';
var _mainHeader = $('#header'),
    _featuredBackground = $('.featured-background'),
    waitForAnimationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    verticalCenterAlignment;

_mainHeader.addClass('animated fadeInDown').one(waitForAnimationEnd, function () {
    $('#content').addClass('animated fadeInUp');
    $('.page-header').addClass('animated fadeInDown');

    _featuredBackground.backstretch(_featuredBackground.data('image-src'), { centeredX: true, centeredY: false });
    _featuredBackground.addClass('animated fadeInDown');
});

verticalCenterAlignment = function(_element) {
    var _height = _element.outerHeight();

    _element.css('top', $(_element).parent().outerHeight() / 2).css('margin-top', (_height/2)*-1);
    return _element;
};

$(window).on('resize load', function() {
    $('.work-post .caption').css('width', $('.img-responsive').outerWidth());
    $('.work-post .caption').css('height', $('.img-responsive').outerHeight());

    verticalCenterAlignment($('.work-post .caption h3'));
});

$('.work-post a').on('mouseenter', function() {
    $(this).find('.caption').removeClass('animated fadeOut').addClass('animated fadeIn').one(waitForAnimationEnd, function() {
        // limpar classes
    });
});

$('.work-post a').on('mouseleave', function() {
    $(this).find('.caption').removeClass('animated fadeIn').addClass('animated fadeOut').one(waitForAnimationEnd, function() {
        // limpar classes
    });
});
