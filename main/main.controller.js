(function(){
"use strict";

angular
  .module('main')
  .controller('MainController',function($interval,$scope,$state){

    $scope.showNavigation = function(localBool){
      console.log('localBool',localBool)
      if (localBool) {
        $('.hamburger-nav-wrapper').removeClass("fade-out");
        $('.hamburger-nav-wrapper').addClass('fade-in');
        $('#cgl').removeClass('fade-out');
        $('#cgl').addClass('fade-out');
        $('.wrapper-cube').removeClass('fade-in');
        $('.wrapper-cube').addClass('fade-out');
        setTimeout(function () {
          $('.wrapper-cube').css('display','none');
        }, 900);
      }else{
        $('.hamburger-nav-wrapper').removeClass('fade-in');
        $('.hamburger-nav-wrapper').addClass('fade-out');
        $('.wrapper-cube').removeClass('fade-out');
        $('.wrapper-cube').addClass('fade-in');
        $('.wrapper-cube').css('display','block')
        $('#cgl').removeClass('fade-in');
        $('#cgl').addClass('fade-out');
      }
    }

    $scope.changeXAxis = function(){
      var pst = $('#b').scrollLeft();
      if(pst> 1000){
        $scope.changeMargin = 'expand-div'
        $('.main-div').css('margin-top','0px')
        $("#b").scrollLeft(0);
      }
    };
    $scope.changeFunMode = function() {
      $('.main-div').css('margin-top','-450px')
    };

  });
})();
