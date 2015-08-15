class MainController {

  constructor ($timeout, ngDialog) {
    'ngInject';
    console.log('initialising MainController');

    this.ngDialog = ngDialog;


  }

  openModal(htmlFile){
    this.ngDialog.open({
      template: '/app/main/' + htmlFile + '.html'
    });
  }

}

export default MainController;
