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

/* POST Mailer. */
router.post('/email', function(req, res) {

    var transporter = nodemailer.createTransport();

    transporter.sendMail({
        from: req.body.contactEmail,
        to: 'info@forcite.com.au',
        subject: req.body.contactName,
        text: req.body.comments
    }, function(err, response) {
        console.log(err || response);
    });


});

module.exports = router;