(function () {
  "use strict";
  angular
    .module('main')
    .directive('returnLanding', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/returnLanding.html',
        link: function (scope, element, attributes) {
          

        }
      };
    });

})();
