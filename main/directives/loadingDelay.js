//****many thanks to http://stackoverflow.com/users/3170465/birrel ***////

(function () {
  "use strict";
  angular
    .module('main')
    .directive('loadingDelay', ['$interval',
      function ($interval) {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/loadingDelay.html',
        link: function (scope, element, attributes) {


        }
      }
    }]);

})();
