import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String},
    completed: {type: Boolean, default: false},
    important: {type: Boolean, default: false},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
});

const taskModel = mongoose.models.tasks || mongoose.model("tasks", taskSchema);

export default taskModel;