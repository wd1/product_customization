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
  console.log(img);
// strip off the data: url prefix to get just the base64-encoded bytes
var data = img.replace(/^data:image\/\w+;base64,/, "");
var buf = new Buffer(data, 'base64');
fs.writeFile('image.png', buf);
  console.log(req.body.message);
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'akmksi211@gmail.com',
			pass: 'djfwjfgu890'
		}
	});

	var mainOptions = {
		from: 'DeveloperTest<akmksi211@gmail.com>',
		to: 'sales@totalbodyexperts.com',
		subject: 'Website Submission',
    html: '<p>My Bike</p>',
    attachments: [
        {   
            path: req.body.img
        }
    ]
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
