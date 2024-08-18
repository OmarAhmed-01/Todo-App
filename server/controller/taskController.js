import taskModel from "../models/Tasks.js";

async function addTask(req, res) {
    try {
        const { title, desc, completed, important } = req.body;
        const taskData = {
            title,
            desc,
            completed, 
            important,
            user: req.user.userId
        } 
        const newTask = new taskModel(taskData);
        await newTask.save();
        return res.status(200).json({ success: false, message: "Task added successfully", task: newTask});
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error"});
    }
}

export { addTask };