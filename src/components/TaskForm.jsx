import { Plus } from "lucide-react";
import "./TaskForm.css";

const TaskForm = () => {
  return (
    <div className="task-form-container">
      <h2 className="form-title">Add New Task</h2>

      <form className="task-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Task Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input type="date" id="dueDate" required />
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
