(function(){
"use strict";

angular
  .module('main')
  .controller('MainController',function($interval,$scope,$state){

  
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
