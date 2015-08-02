var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  // res.render('index', { title: 'Express' });

  if (!(req.body.event == 'email')){
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
      from: '<jamesleboeuf@gmail.com>', // sender address
      to: 'jamesleboeuf@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world ✔', // plaintext body
      html: '<b>Hello world ✔</b>' // html body
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

module.exports = router;
