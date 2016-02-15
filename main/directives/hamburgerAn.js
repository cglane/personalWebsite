(function () {
  "use strict";
  angular
    .module('main')
    .directive('animatedHamburger', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/hamburgerAnimation.html',
        link: function (scope, element, attributes) {

          $('#hamburger-icon').hover(function(){
              $('#hamburger-icon span').each(function(i) {
                var $span = $(this);
                setTimeout(function() {
                  $span.addClass('flip');
                }, i*100); // delay 100 ms
                setTimeout(function(){
                  $span.removeClass('flip');
                },(i*100)+1000);
              });
          });

        }
      };
    });

})();
