var express = require('express');
var fs = require('fs');
var router = express.Router();
var multer = require('multer');
var DIR = './UI/src/assets/uploads';
var upload = multer({dest: DIR}).single('photo');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
	 var path = '';
	 upload(req, res, function (err) {
	    if (err) {
	      // An error occurred when uploading
	      console.log(err);
	      return res.status(422).send("an Error occured")
			}  
			
			var destFolder = DIR + '/';
			fs.rename(destFolder + req.file.filename, destFolder + req.file.originalname);
			
			var responseData = req.file;
			responseData.path = 'assets/uploads/' + responseData.originalname;
	    return res.send(responseData); 
  });	 
})


module.exports = router;
