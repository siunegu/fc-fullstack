  class MainController {

  constructor($timeout, ngDialog, $scope, $document) {
    'ngInject';
    console.log('initialising MainController');

    angular.element(document).ready(function(){
      $scope.ngDialog = ngDialog;

      $scope.slickConfig = {
        autoplay: true,
        draggable: false,
        autoplaySpeed: 3000,
        method: {},
        event: {
          beforeChange: function (event, slick, currentSlide, nextSlide) {
          },
          afterChange: function (event, slick, currentSlide, nextSlide) {
          }
        }
      };
    });


  }

  openModal(htmlFile){
    this.ngDialog.open({
      template: './app/dialogs/' + htmlFile + '.html'
    });
  }

}

export default MainController;
