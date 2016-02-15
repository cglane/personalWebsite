(function () {
  "use strict";
  angular
    .module('main')
    .directive('myName', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/myName.html',
        link: function (scope, element, attributes) {
          var letters = $('#my-name span');
          var currIndex = 0;
          setInterval(function(){
            if(currIndex > letters.length){
              $('#my-name span').addClass('fade-out');
              var cube = '.container-cube';
              $(cube).css({
                'top':'200px',
                'left': '20%',
              });
            }else{
              letters.eq(currIndex).css('opacity','1');
              currIndex++;
            }
        },500);
      }
      };
    });

})();
