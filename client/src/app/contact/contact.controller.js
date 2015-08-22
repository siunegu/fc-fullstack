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
      contactEmail: form.email
      // TODO: Add country as data to send
    };

    var req = {
     method: 'POST',
     url: 'http://localhost:9030/email',
     // url: 'https://secret-river-5414.herokuapp.com/email',
     headers: {
       'Content-Type': 'application/json'
     },
     data: data
    };

    this.$http(req)
    .then(function(result) {
      console.log('success is...', result);
      return result;      
    })
    .catch(function(error) {
      console.log('error is...', error);
          return error;
        });

        console.log(form);
        this.ngDialog.open({
            template: '/app/preorder/submit.html'
        }); 
      }    



}

export default ContactController;