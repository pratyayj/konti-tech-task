var express = require('express');
var router = express.Router();
var postController = require('../controller/postController');

/* GET home page. */
router.route('/')
.get(postController.display);

module.exports = router;
