//****many thanks to http://stackoverflow.com/users/3170465/birrel ***////

(function () {
  "use strict";
  angular
    .module('main')
    .directive('mainDirective', ['$interval',
      function ($interval) {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/horizontalScroll.html',
        link: function (scope, element, attributes) {
          var pageWidth = $(window).width();
          var scroller = {};
          scroller.e = document.getElementById("b");

          if (scroller.e.addEventListener) {
            scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
            scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
          } else scroller.e.attachEvent("onmousewheel", MouseWheelHandler,false);


          function MouseWheelHandler(e) {

    // cross-browser wheel delta
          var e = window.event || e;
          var delta = - 20  * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));
          var pst = $('#b').scrollLeft() + delta;
          if (pst < 0) {
            pst = 0;
          } else if (pst > $('.img_holder').width()) {
            console.log('hello')
            pst = $('.img_holder').width();
          }

          $('#b').scrollLeft(pst);

          return false;
        }
        }
      };
    }]);

})();
