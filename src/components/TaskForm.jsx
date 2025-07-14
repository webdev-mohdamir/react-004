import { Plus } from "lucide-react";
import "./TaskForm.css";
import { useState } from "react";

const TaskForm = ({ onTaskChange }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    // Prevent from reloading
    e.preventDefault();

    // Create task object
    const task = {
      id: Date.now().toString(),
      title,
      dueDate,
      completed: false,
    };

    // update the tasks
    onTaskChange((prev) => [...prev, task]);

    // Reset the state
    setTitle("");
    setDueDate("");
  };

  return (
    <div className="task-form-container">
      <h2 className="form-title">Add New Task</h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Task Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter task title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              required
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          <Plus width={20} />
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
