(function () {
  "use strict";
  angular
    .module('main')
    .directive('portfolioDirective', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/portfolioDisplay.html',
        link: function (scope, element, attributes) {
          var currBool = 0;
          scope.showVideo = function(){
            if(currBool === 0){
              currBool = 1;
              console.log(currBool)
              $('#we-day-video').css({'width':'700px','height':'700px'})
          }else if(currBool === 1){
            currBool = 0;
            console.log('else if')
            $('#we-day-video').css({'width':'1px','height':'1px'})
          }
        }
      }
    }
    });

})();
