var express = require('express');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/email', function(req, res) {


    console.log(req.body);
    console.log('Email params (name):' + req.body.contactName);
    console.log('Email params (email):' + req.body.contactEmail);
    console.log('Email params (comments):' + req.body.comments);


    // var transporter = nodemailer.createTransport({
    //   service: "Hotmail", // use well known service
    //   auth: {
    //     // user: "a.boyadgis@gmail.com",
    //     // pass: "Minigun3"
    //     user: "somethingverywong@hotmail.com",
    //     pass: "Tehfug91"
    //   }
    // });


    var transport = nodemailer.createTransport("SMTP", {
        service: 'Mandrill', // use well known service.
        // If you are using @gmail.com address, then you don't
        // even have to define the service name
        auth: {
            user: "equalsbrackets@gmail.com",
            pass: "8RrMuPKMVL-7x9jjKB6xRA"
        }
    });

    console.log('SMTP Configured');

    var message = {

        // sender info
        from: 'Sender: <' + req.body.contactEmail + '>',

        // Comma separated list of recipients
        to: '"Info:" <info@forcite.com.au>',

        // Subject of the message
        subject: 'Nodemailer is unicode friendly ✔', //

        headers: {
            'X-Laziness-level': 1000
        },

        // plaintext body
        text: "Interest\n" +
            "===========\n" +
            "\n" +
            "**How** are you?"
    };

    console.log('Sending Mail');
    transport.sendMail(message, function(error) {
        if (error) {
            console.log('Error occured');
            console.log(error.message);
            return;
        }
        console.log('Message sent successfully!');

        // if you don't want to use this transport object anymore, uncomment following line
        transport.close(); // close the connection pool
    });
    // var mailOptions = {
    //   from: '<'+ req.body.contactEmail +'>', //grab form data from the request body , // sender address
    //   // to: 'equalsbrackets@gmail.com', // List people you want to be notified of the signup!!!!!! HERE!!!!
    //   to: 'info@forcite.com.au', // List people you want to be notified of the signup!!!!!! HERE!!!!
    //   subject: 'Preorder Signup', // Subject line
    //   // text: 'Preorder Signup description', // plaintext body
    //   html: '<b>Preorder Signup:</b><br><p>Name: ' + req.body.contactName + '<p><br><p>Email: ' + req.body.contactEmail + '</p><p>Comments: ' + req.body.comments + '</p>'   // html body
    // };


    // send mail with defined transport object
    // transporter.sendMail(mailOptions, function(error, info){
    //     if(error){
    //         return console.log('Error message:' + error);
    //       return res.status(404).json({
    //         message: error || response
    //       })          
    //     } else {
    //       console.log('Delivering' + info.response);
    //       return res.status(200).json({
    //         message: info.response
    //       })
    //     }

    // });



});

module.exports = router;