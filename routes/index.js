var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/email', function(req, res) {
  // res.render('index', { title: 'Express' });
  console.log('req.body is...', req.body);
  // console.log(req.body);
  if (req.body.event != 'email'){
    return res.status(200).json({
      message: 'ignored'
    })
  };



  // return res.status(200).json({
  //   message: 'this is working'
  // })

  // var opts = {}
  // var transporter = nodemailer.createTransport(opts);

  var transporter = nodemailer.createTransport({
    service: "Hotmail", // use well known service
    auth: {
      user: "somethingverywong@hotmail.com",
      pass: "Tehfug91"
    }
  });

  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: req.body.contactEmail, // The email address of the person who input their email in the form. The customer!!!!
      to: 'eugene.h.lai@gmail.com', // List people you want to be notified of the signup!!!!!! HERE!!!!
      subject: 'Preorder Signup', // Subject line
      // text: 'Preorder Signup description', // plaintext body
      html: '<b>Preorder Signup:</b><br><p>Name: ' + req.body.contactName + '<p><br><p>Email: ' + req.body.contactEmail + '</p>'  // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);

  });

  // return res.status(200).json({
  //   message: 'this is working'
  // })


});

module.exports = router;
