var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/email', function(req, res) {


  console.log(req.body);
  console.log('Email params:' + req.body.contactName);
  console.log('Email params:' + req.body.contactEmail);

  // if (!(req.body.includes'email')){
  //   return res.status(200).json({
  //     message: 'ignored'
  //   })
  // };

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

  // // setup e-mail data with unicode symbols
  // var mailOptions = {
  //     from: '<jamesleboeuf@gmail.com>', // sender address
  //     to: 'jamesleboeuf@gmail.com', // list of receivers
  //     subject: 'Hello ✔', // Subject line
  //     text: 'Hello world ✔', // plaintext body
  //     html: '<b>Hello world ✔</b>' // html body
  // };

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: '<'+ req.body.contactEmail +'>', //grab form data from the request body , // sender address
      to: 'equalsbrackets@gmail.com', // list of receivers
      subject: 'Interest ✔', // Subject line
      text: 'Hello world ✔', // plaintext body
      html: '<b>Hello world ✔</b>' // html body
  };


  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log('Error message:' + error);
      } else {
        return 
        console.log('Delivering' + info.response);
        res.status(200).json({
          message: info.response
        })        
      }

  });

  // return res.status(200).json({
  //   message: 'this is working'
  // })


});

module.exports = router;

module.exports = router;
