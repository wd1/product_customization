var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

fs = require('fs');
sys = require('sys');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.post('/send', function(req, res, next) {
	var img = req.body.img;
	var special1 = req.body.special1;
	var special2 = req.body.special2;
	var special3 = req.body.special3;
	var username = req.body.username;
	var usermail = req.body.usermail;
	var phonenumber = req.body.phonenumber;
  console.log(special1);
// strip off the data: url prefix to get just the base64-encoded bytes
var data = img.replace(/^data:image\/\w+;base64,/, "");
var buf = new Buffer(data, 'base64');
fs.writeFile('image.png', buf);
  console.log(req.body.message);
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'custombike@studio-cycles.com',
			pass: 'qwerty79qwerty79'
		}
	});

	var mainOptions = {
		from: 'Studio Cycles Mail<custombike@studio-cycles.com>',
		// to: 'sales@totalbodyexperts.com',
		to: 'jamil@studio-cycles.com',
    // to: 'aoto.daiki@yandex.com',
		subject: 'Website Submission',
		html: '<p>My Bike</p><h4>Color Instruction:'+special1+'</h4>'+'<h4>Frame Instruction:'+special2+'</h4>'+'<h4>Flywheel Instruction:'+special3+'</h4>'+
		'<h4>Username:'+username+'</h4>'+'<h4>User Email:'+usermail+'</h4>'+'<h4>Phone Number:'+phonenumber+'</h4>',
    attachments: [
        {   
            path: req.body.img
        }
    ]
	}

	transporter.sendMail(mainOptions, function(error, info) {
		if(error) {
			console.log(error);
			// res.redirect('/');
		}
		else {
			console.log('Message Sent: '+info.response);
			// res.redirect('/');
		}
	});
});

module.exports = router;
