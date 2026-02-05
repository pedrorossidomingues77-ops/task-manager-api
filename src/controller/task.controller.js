const taskService = require("../services/task.service")

exports.create = (req, res) => {
  try {
    const { title } = req.body
    const task = taskService.createTask(title)
    return res.status(201).json(task)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

exports.list = (req, res) => {
  try {
    const tasks = taskService.taskList()
    return res.status(200).json({ tasks })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

exports.getById = (req, res) => {
  try {
    const id = Number(req.params.id)
    const task = taskService.getTaskById(id)
    return res.status(200).json(task)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

exports.update = (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = req.body
    const updatedTask = taskService.taskUpdate(id, data)
    return res.status(200).json(updatedTask)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

exports.delete = (req, res) => {
  try {
    const id = Number(req.params.id)
    taskService.taskDelete(id)
    return res.status(200).json({ message: "The task was deleted" })
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}
