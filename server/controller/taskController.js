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
        return res.status(200).json({ success: true, task: task});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: error.message });
    }
};

async function deleteTask(req, res) {
    try {
        const task_id = req.body.id;
        const task = await taskModel.findById(task_id);
        if(!task){
            return res.status(404).json({ status: false, message: "No task found"});
        }
        else{
            await taskModel.findByIdAndDelete(task_id);
            return res.status(200).json({ success: true, message: "OK" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error deleting task"});
    }
};

async function updateTask(req, res) {
    try {
        const task_id = req.params.id;
        const updatedTask = { ...req.body };

        const result = await taskModel.findByIdAndUpdate(task_id, updatedTask, { new: true });

        if (!result) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        return res.status(200).json({ success: true, message: "OK", data: result });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
export { addTask, getTask, deleteTask, updateTask };