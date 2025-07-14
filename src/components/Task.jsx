import { Calendar, CheckCircle2, Circle, Trash2 } from "lucide-react";
import "./Task.css";

const Task = ({ id, title, dueDate, completed, onDelete, onComplete }) => {
  const isOverDue = new Date(dueDate) < new Date() && !completed;

  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <div className="task-content">
        <button className="task-checkbox" onClick={() => onComplete(id)}>
          {completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
        </button>

        {/* Task Detaisl */}
        <div className="task-details">
          <h3 className="task-title">{title}</h3>
          <div className="task-meta">
            <div className="task-date">
              <Calendar size={14} />
              <span>Due: {dueDate ?? "-"}</span>
            </div>

            {isOverDue && <span className="overdue-badge">Overdue</span>}
          </div>
        </div>
      </div>

      <button className="delete-button" onClick={() => onDelete(id)}>
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default Task;
