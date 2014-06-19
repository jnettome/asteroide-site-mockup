'use strict';
console.log('\'Allo \'Allo!');
$('#header').addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function animateMainText() {
    $('.featured-background').addClass('animated fadeInDown');
});
