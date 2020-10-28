var express = require('express');
var router = express.Router();
 
const controller = require("../controllers/registercontroller")
 
/* GET users listing. */
router.get('/', controller.index);
router.get('/show', controller.show);
router.post('/', controller.insert);
router.delete('/:id', controller.destroy);
router.put('/', controller.update);
 
module.exports = router;