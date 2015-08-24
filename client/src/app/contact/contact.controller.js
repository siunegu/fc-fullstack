class ContactController {
  constructor($http, ngDialog) {
    'ngInject';

    this.$http = $http;
    this.ngDialog = ngDialog;
    console.log("initializing ContactController");
  }

  sendEmail(form) {

    var data = {
      contactName: form.name,
      contactEmail: form.email,
      comments: form.comments || null
    };

    var req = {
     method: 'POST',
     // url: 'http://localhost:9030/email',
     url: location.origin + '/email',
     // url: 'https://secret-river-5414.herokuapp.com/email',
     headers: {
       'Content-Type': 'application/json'
     },
     data: data
    };

    this.$http(req)
      .then(function(result) {
        console.log('success is...', result);
        this.ngDialog.open({
          template: '<div class="submit-modal"><div class="ngdialog-message"><div class="row"><div class="col-md-12 text-center"><h4 class="margin-top-thirty zero-margin-bottom">THANK YOU FOR YOUR</h4><h3 class="zero-margin-bottom zero-top-margin">INTEREST</h3><h1>WELCOME TO THE TEAM!</h1><img src="../assets/images/logo-glyph.png" alt="..." class="img-rounded"><h4>FOLLOW US ON</h4><div class="row"><ul class="list-inline"><li><a href="https://www.facebook.com/forcitehelmetsystems"><img src="../assets/images/facebook.png"></a></li><li><a href="https://instagram.com/forcitehelmets/"><img src="../assets/images/instagram.png"></a></li><li><a href="https://twitter.com/forcitehelmets"><img src="../assets/images/twitter.png"></a></li></ul></div></div></div></div></div>',
          plain: true
        });
        return result;
      })
      .catch(function(error) {
        console.log('error is...', error);
        return error;
      });

  }



}

export default ContactController;
