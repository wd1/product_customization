var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
	console.log('vvvv');
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'dabieri1019@gmail.com',
			pass: ''
		}
	});

	var mainOptions = {
		from: 'John Doe <johndoe@outlook.com>',
		to: 'jianmyphy123@tutanota.com',
		submit: 'Website Submission',
		text: 'You have a new submission with the following details ... Name: '+req.body.name+ ' Email: '+req.body.email+' Message: '+req.body.message,
		html: '<p>You have a new submission with the following details ... <ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul></p>'
	}

	transporter.sendMail(mainOptions, function(error, info) {
		if(error) {
			console.log(error);
			res.redirect('/');
		}
		else {
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});
});

module.exports = router;
