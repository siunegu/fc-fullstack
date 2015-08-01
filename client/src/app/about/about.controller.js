class AboutController {

  constructor ($timeout) {
    'ngInject';
    console.log('initalising AboutController')
    this.test = 'okay this works';
    // this.classAnimation = '';
    // this.creationDate = 1438406593708;
    // this.toastr = toastr;

    // this.activate($timeout, webDevTec);
  }

  // activate($timeout, webDevTec) {
  //   this.getWebDevTec(webDevTec);
  //   $timeout(() => {
  //     this.classAnimation = 'rubberBand';
  //   }, 4000);
  // }
  //
  // getWebDevTec(webDevTec) {
  //   this.awesomeThings = webDevTec.getTec();
  //
  //   angular.forEach(this.awesomeThings, (awesomeThing) => {
  //     awesomeThing.rank = Math.random();
  //   });
  // }
  //
  // showToastr() {
  //   this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
  //   this.classAnimation = '';
  // }
}

export default AboutController;
