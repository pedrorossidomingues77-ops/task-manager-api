const express = require('express');
const router = express.Router();
const taskController = require('../controller/task.controller');

router.post("/", taskController.create)
router.get("/", taskController.list)
router.get('/:id', taskController.getById)
router.put('/:id', taskController.update)
router.delete('/:id', taskController.delete)

module.exports = router