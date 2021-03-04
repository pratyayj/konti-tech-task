var express = require('express');
var router = express.Router();
var postController = require('../controller/postController');

router.route('/all')
.get(postController.all);

router.route('/:id')
.get(postController.read);

router.route('/add')
.post(postController.add);

router.route('/update')
.put(postController.update);

router.route('/delete/:id')
.delete(postController.delete);

module.exports = router;
