class MainController {

  constructor ($timeout, ngDialog) {
    'ngInject';
    console.log('initialising MainController');

    this.ngDialog = ngDialog;

    this.slickConfig = {
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
  }

  openModal(htmlFile){
    this.ngDialog.open({
      template: '/app/main/' + htmlFile + '.html'
    });
  }

}

export default MainController;
