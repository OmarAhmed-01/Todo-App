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

async function getTask(req, res) {
    try {
        const task = await taskModel.find({ user: req.user.userId });
        if(!task || task.length === 0){
            return res.status(404).json({ success: false, message: "Task not found for this user"});
        }
        return res.status(200).json({ success: true, task: task});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

export { addTask, getTask };