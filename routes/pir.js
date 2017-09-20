var express = require('express');
var router = express.Router();

// Require controller modules
var pir_controller = require('../controllers/pirController');


/* GET PIR events home page. */
router.get('/', pir_controller.pir_list);

/* POST request for creating a PIR event. */
router.post('/', pir_controller.pir_create_post);


module.exports = router;