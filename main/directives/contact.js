(function () {
  "use strict";
  angular
    .module('main')
    .directive('contactDirective', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: '/main/directives/views/contact.html',
        link: function (scope, element, attributes) {
          var isDragging = false;
          var x = 0;
          var position = 0;
          // $('#phone').circleType();

          var wrapp = $('.other-circle')
            .mousedown(function(){
              isDragging = false;
            })
            .mousemove(function(){
              isDragging = true;
            })
            .mouseup(function(){
              wrapp.css('z-index','5')
              var wasDragging = isDragging;
              var spinD = 90;
              var increment = spinD + x;
              var placeholder = increment + 'deg';
              var sateliteRotation = (increment*-1) + 'deg';
              if(wasDragging){
                $('.wrapper-contact').css({
                  '-webkit-transform' : 'rotate('+placeholder+')',
                  '-moz-transform'    : 'rotate('+placeholder+')',
                  '-ms-transform'     : 'rotate('+placeholder+')',
                  '-o-transform'      : 'rotate('+placeholder+')',
                  'transform'         : 'rotate('+placeholder+')'
                });
                $('.moon-circle').css({
                  '-webkit-transform' : 'rotate('+sateliteRotation+')',
                  '-moz-transform'    : 'rotate('+sateliteRotation+')',
                  '-ms-transform'     : 'rotate('+sateliteRotation+')',
                  '-o-transform'      : 'rotate('+sateliteRotation+')',
                  'transform'         : 'rotate('+sateliteRotation+')'
                });
                x+=spinD;
                (position == 270)? position = 0: position+= spinD;
                console.log(position)
                isDragging = false;
              }
              if(position == 0){
                $('#phone').css("color",'red')
                // $('#phone').addClass('fade-out-slow');
                // setTimeout(function () {$('#phone').removeClass('fade-out-slow');}, 6000);
              }else if(position == 90){
                $('#name').addClass('fade-out-slow');
                // setTimeout(function () {$('#name').removeClass('fade-out-slow');}, 6000);
              }else if(position == 180){
                $('#address').addClass('fade-out-slow');
                // setTimeout(function () {$('#address').removeClass('fade-out-slow');}, 6000);
              }else if(position == 270){
                $('.contact-drop-down').css("opacity",'1')
              }
            });
            scope.showContact = function(bool){
              console.log('showContact');
              if(bool){
                $('.contact-drop-down').css('top','200px');
              }else{
                $('.contact-drop-down').css('top','-500px');
              }

            }
            scope.showAudio = function(event){
              var audio = event.target.parentElement.children[1];
              console.log('audio',audio)
              $(audio).addClass('fade-in')
              var vis = event.target;

              // $(this).closest("a").css('display','none');
            }



        }
      };
    });

})();
