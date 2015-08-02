class MainController {

  constructor ($timeout) {
    'ngInject';
    console.log('initialising MainController');

    this.images = [
    "http://www.fillmurray.com/g/200/300",
    "http://www.fillmurray.com/g/200/300",
    "http://www.fillmurray.com/g/200/300",
    "http://www.fillmurray.com/g/200/300"
    ]
    
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

export default MainController;
