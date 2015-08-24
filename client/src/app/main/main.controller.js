  class MainController {

  constructor($timeout, ngDialog, $scope, $document) {
    'ngInject';
    console.log('initialising MainController');

    angular.element(document).ready(function(){
      $scope.slickConfig = {
        autoplay: true,
        draggable: false,
        autoplaySpeed: 9000,
        method: {},
        event: {
          beforeChange: function (event, slick, currentSlide, nextSlide) {
          },
          afterChange: function (event, slick, currentSlide, nextSlide) {
          }
        }
      };

      $scope.openImpact = function(){
        console.log("impact");
        ngDialog.open({template:'<div class="ngdialog-message"><div class="row"><div class="col-md-4"><img src="../assets/images/impact-sensor.png" alt=""></div><div class="col-md-8"><h4>IMPACT PROTECTION</h4><p>Designed from the ground up for safety, the  integrate computer system is housed in a high tensile waterproof capsule for protection.</p></div></div></div><div class="mt"></div>',
      plain: true});
      };

      $scope.openMotion = function(){
        ngDialog.open({
          template: '<div class="ngdialog-message ngdialog-motion-sensor"><div class="row"><div class="col-md-4"><img src="../assets/images/motion-sensor.png" alt=""></div><div class="col-md-8"><h4>MOTION SENSOR</h4><p>Maps and measures your run, so you’ll know exactly how fast you went and how much air you really got.</p></div></div></div><div class="mt"></div>',
          plain: true
        })
      };

      $scope.openGps = function(){
        ngDialog.open({
          template: '<div class="ngdialog-message"><div class="row"><div class="col-md-4"><img src="../assets/images/motion-sensor.png" alt=""></div><div class="col-md-8"><h4>GPS</h4><p>Stand  alone GPS means your helmet can still track your location without the need of your smartphone.</p></div></div></div><div class="mt"></div>',
          plain: true
        })
      };

      $scope.openBattery = function(){
        ngDialog.open({
          template: '<div class="ngdialog-message ngdialog-battery"><div class="row"><div class="col-md-3"><img src="../assets/images/swap-out.png" alt=""></div><div class="col-md-9"><h4>NON EXPLOSIVE BATTERY</h4><p>Our unique non-explosive battery design is produced to be non explosive upon cutting, piercing or impact</p></div></div></div><div class="mt"></div>',
          plain: true
        })

      };


    });


  }

  // openModal(htmlFile){
  //   this.ngDialog.open({
  //     template: './app/dialogs/' + htmlFile + '.html'
  //   });
  // }

}

export
default MainController;
