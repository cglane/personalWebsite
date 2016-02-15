(function () {
  "use strict";

  var underscore = angular.module('underscore', []);
          underscore.factory('_', function() {
              return window._; //Underscore should be loaded on the page
          });
  var jquery = angular.module('jquery', []);
          jquery.factory('$', function() {
          return window.$; //Underscore should be loaded on the page
        });


  angular
    .module('main', [
      'ngRoute',
      'ui.router',
      'underscore',
      'jquery',

    ])

    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider

          // HOME STATES AND NESTED VIEWS ========================================
          .state('landing', {
              url: '/',
              controller:'MainController',
              templateUrl: 'main/views/landing.html'
          })
          .state('home', {
              url: '/home/:id',
              controller:'HomeController',
              templateUrl: 'main/views/main.html'
          })



  });





})();
