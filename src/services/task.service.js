const taskRepository = require("../repositories/task.repository");

function createTask(title) {

    if (typeof title !== "string") {
        throw new Error("Title must be a string");
    } if (title.trim() === "") {
        throw new Error("Title is required...")
    }

    const task = taskRepository.createTask()
    return task
}

function taskList() {
    return taskRepository.taskList()
}

function getTaskById(id) {

    if (typeof id !== "number") {
        throw new Error("The id must be a number...");
    }
    if (!Number.isInteger(id)) {
        throw new Error("The id must be a integer number...");
    }

    const taskById = taskRepository.findById(id)

    if (!taskById) {
        throw new Error("The task doesn't exists...");
    }

    return taskById
}

function taskUpdate(id, data) {

    if (typeof id !== "number") {
        throw new Error("The id must be a number...");
    }
    if (!Number.isInteger(id)) {
        throw new Error("The id must be a integer number...");
    }

    const taskById = taskRepository.findById(id)

    if (!taskById) {
        throw new Error("The task doesn't exists...");
    }
    if (data.title !== undefined) {
        if (typeof data.title !== "string") {
            throw new Error("The title must be string...");
        } if (data.title.trim() === "") {
            throw new Error("Title is required...")
        }
    }

    if (data.done !== undefined) {
        if (typeof data.done !== "boolean") {
            throw new Error("The done must be boolean...");
        }
    }

    const uptadedtask = taskRepository.taskUpdate(task, data)

    return uptadedtask
}

function taskDelete(id) {

    if (typeof id !== "number") {
        throw new Error("The id must be a number...");
    }
    if (!Number.isInteger(id)) {
        throw new Error("The id must be a integer number...");
    }

    const taskById = taskRepository.findById(id)

    if (!taskById) {
        throw new Error("The task doesn't exists...");
    }

    const deleted = taskRepository.taskDelete(id)

    if (!deleted) {
        throw new Error("Failed to delete task...")
    }

    return true
}

module.exports = {
  createTask,
  taskList,
  getTaskById,
  taskUpdate,
  taskDelete
}