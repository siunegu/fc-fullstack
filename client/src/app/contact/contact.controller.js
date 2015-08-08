class ContactController {
  constructor ($http, ngDialog) {
    'ngInject';

    console.log("initializing ContactController");
  }

  sendEmail(form) {

    var data = {
      contactName: form.name,
      contactEmail: form.email
      // TODO: Add country as data to send
    };

    this.$http.post('http://localhost:9030/email', data)
    .then(function(result){
      console.log('success is...', result);
      return result;
    })
    .catch(function(error){
      console.log('error is...', error);
      return error;
    })

    console.log(form);
    this.ngDialog.open({
      template: '/app/preorder/popupTmpl.html'
    });
  }
}

export default ContactController;
