let tasks = []
let idCounter = 1

function createTask(title) {
  const task = {
    id: idCounter++,
    title: title,
    done: false
  }
  tasks.push(task)
  return task
}

function taskList() {
  const newTasks = structuredClone(tasks)
  return newTasks
}

function findById(id) {
  return tasks.find(t => t.id === id)
}

function taskUpdate(task, data) {
  if (data.title !== undefined) {
    task.title = data.title
  } if (typeof data.done === "boolean") {
    task.done = data.done
  }
  return task
}

function taskDelete(id) {
  const index = tasks.findIndex(t => t.id === id)

  if (index === -1) {
    return undefined
  }

  tasks.splice(index, 1)
  return true
}

module.exports = {
  createTask,
  taskList,
  findById,
  taskUpdate,
  taskDelete
}