(function () {
  "use strict";
  angular
    .module('main')
    .directive('aboutDirective', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/about.html',
        link: function (scope, element, attributes) {
          scope.currentImages = [];
          scope.timeline = [
            {date:2011,information:"Graduated from Clemson Unviversity with B.A in Language and International Trade",photo:'../../Photos/clemson.png'},
          {date:2012,information:'Taught English in Beijing',photo:'../../Photos/wall.jpg'},
          {date:2013,information:'Graduated from Beijing Language and Culture University,moved to Columbia, SC, and started at South Carolina department of Commerce',photo:'../../Photos/university.jpg'},
          {date:2014,information:'Worked for Tupper Builders',photo:'../../Photos/tupper.jpg'},
          {date:2015,information:'Started at The Iron Yard in Front End Engineering Program',photo:'../../Photos/ironsign.jpg'},
          {date:2016,information:'Graduated from The Iron Yard',photo:'../../Photos/ironyard.jpg'}

        ];
          scope.currentInformation = 'Download Resume';
          scope.currentImage = '../../Photos/CharlesLane.jpg';
          var currentIndex = 0;

          //change dateViews
          setInterval(function(){
            if(currentIndex < scope.timeline.length-1){currentIndex++}
            else{currentIndex = 0}
            scope.currentInformation = scope.timeline[currentIndex].information;
            scope.currentImage = scope.timeline[currentIndex].photo;
            var currentDate = scope.timeline[currentIndex].date;
            var li = $('.horizontal-timeline li span');
            li.removeClass('highlight')
            li.eq(currentIndex).addClass('highlight');
            scope.$apply();
          },8000);
          //change pictures by year

          scope.showInfo = function(obj,index){
            currentIndex = index;
            scope.currentInformation = obj.information;
            scope.currentImage = obj.photo;
          }

        }
      };
    });

})();
