const { Router } = require('express');
const controller = require('../controllers/tasks');

const router = Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.add);

module.exports = router;
