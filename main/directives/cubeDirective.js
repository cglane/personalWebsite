(function () {
  "use strict";
  angular
    .module('main')
    .directive('cubeDirective', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/cubeDirective.html',
        link: function (scope, element, attributes) {
          var cube = $('#cube')
          $('.container-cube').hover(function(){
            $('.fullscreen-video').toggleClass('shade');
            $('#my-name').toggleClass('complete-opacity');
          })
          var cubeViews = [
            'show-front',
            'show-back',
            'show-right',
            'show-left',
            'show-top',
            'show-bottom']
            var lastIndex = 0;
          setInterval(function () {
            var index = Math.floor((Math.random() * cubeViews.length -1) + 1);
            if(index != lastIndex){
            cube.addClass(cubeViews[index]);
            setTimeout(function () {
              cube.removeClass(cubeViews[index]);
            }, 1999.9);
            lastIndex = index;
          }
          }, 2000);


        }
      };
    });

})();
