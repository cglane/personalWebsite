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


        }
      };
    });

})();
