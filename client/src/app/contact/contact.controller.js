class ContactController {
  constructor ($http, ngDialog) {
    'ngInject';

    console.log("initializing ContactController");
  }

  sendEmail(form) {

    var data = {
      event: 'email',
      contactName: form.name,
      contactEmail: form.email
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

    this.ngDialog.open({
      template: '/app/preorder/submit.html'
    });
  }


}

export default ContactController;
