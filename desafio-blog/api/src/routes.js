const express = require('express');
const router = express.Router();
const blogController = require('./controllers/blogController');



router.get('/ping', blogController.ping);

router.get('/ping', blogController.ping);



module.exports = router;