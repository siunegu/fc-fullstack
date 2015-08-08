class FeatureController {
  constructor () {
    'ngInject';

    console.log("initializing FeatureController");

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
}

export default FeatureController;
