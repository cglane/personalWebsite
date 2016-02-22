(function(){
"use strict";

angular
  .module('main')
  .controller('HomeController',function($interval,$scope,$state,$stateParams){

    var currState = $stateParams.id;
    var pageWidth = $(window).width();
    var classViews = ['about','portfolio','contact'];
    $('.img').css('width',pageWidth)
    console.log(pageWidth)
    if(currState === 'portfolio'){
      $('#b').scrollLeft(pageWidth);
    }else if(currState === 'contact'){
      $('#b').scrollLeft(pageWidth*2);
    }
    else if(currState = 'about'){
      $('#b').scrollLeft(0);
    }
    // $scope.changeXAxis = function(){
    //   var pst = $('#b').scrollLeft();
    //   if(pst> 1000){
    //     $scope.changeMargin = 'expand-div'
    //     $('.main-div').css('margin-top','0px')
    //     $("#b").scrollLeft(0);
    //   }
    // };
    

  });
})();
