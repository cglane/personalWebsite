(function () {
  "use strict";
  angular
    .module('main')
    .directive('hamburgerDirective', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/hamburgerNav.html',
        link: function (scope, element, attributes) {


        }
      };
    });

})();
