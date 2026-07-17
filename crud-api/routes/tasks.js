const { Router } = require('express');
const controller = require('../controllers/tasks');

const router = Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.add);
router.put('/:id', controller.update);

module.exports = router;
