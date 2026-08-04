const { Router } = require('express');
const controller = require('../controllers/tasks');

const router = Router();

/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: List all tasks
 *     responses:
 *       200:
 *         description: Array of tasks
 */
router.get('/', controller.index);

/**
 * @openapi
 * /tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A task
 *       404:
 *         description: Task not found
 */
router.get('/:id', controller.show);

/**
 * @openapi
 * /tasks:
 *   post:
 *     summary: Create a task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Created task
 *       400:
 *         description: Validation error
 */
router.post('/', controller.add);

/**
 * @openapi
 * /tasks/{id}:
 *   put:
 *     summary: Update a task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Updated task
 *       400:
 *         description: Validation error
 *       404:
 *         description: Task not found
 */
router.put('/:id', controller.update);

/**
 * @openapi
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Deleted
 *       404:
 *         description: Task not found
 */
router.delete('/:id', controller.destroy);

module.exports = router;
