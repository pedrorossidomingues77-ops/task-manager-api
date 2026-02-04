
let tasks = [];
let idCounter = 1;

exports.create = ((req, res) => {
    const { title } = req.body

    if (!title) {
        return res.status(400).json({ error: "Title is required..." })
    } else {
        const newTask = {
            id: idCounter++,
            title: title,
            done: false
        }
        tasks.push(newTask)

        return res.status(201).json(newTask)
    }
})

exports.list = ((req, res) => {
    return res.json({ tasks: tasks })
})

exports.getById = ((req, res) => {
    const getId = Number(req.params.id)
    const task = tasks.find(t => t.id === getId)

    if (!task) {
        return res.status(404).json({error: "The task doesn't exists..."})
    }
    return res.json(task)

})

exports.update = ((req, res) => {
    const getId = Number(req.params.id)
    const data = req.body
    const task = tasks.find(t => t.id === getId)

    if (!task) {
        return res.status(404).json({message: "The task doesn't exists..."})
    }
    if (data.title !== undefined) {
        if (data.title === "") {
            return res.status(400).json({ error: "Title cannot be empty" })
        }
        task.title = data.title
    }
    if (data.done !== undefined) {
        if (typeof data.done !== "boolean") {
            return res.status(400).json({ error: "Done must be boolean" })
        }
        task.done = data.done
    }

    return res.status(200).json(task)
})

exports.delete = ((req, res) => {
    const getId = Number(req.params.id)
    const index = tasks.findIndex(t => t.id === getId)

    if (index === -1) {
        return res.status(404).json({error: "The task doesn't exists..."})
    }

    tasks.splice(index, 1)

    return res.status(200).json({message: "The task was deleted"})

})