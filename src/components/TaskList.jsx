import Task from "./Task";
import "./TaskList.css";

const TaskList = ({ tasks, handleDelete, handleTaskStatus }) => {
  if (tasks.length == 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🗃️</div>
        <h3>No Tasks Found</h3>
        <p>Add your first task to get started with organizing your day!</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          dueDate={task.dueDate}
          completed={task.completed}
          onDelete={handleDelete}
          onComplete={handleTaskStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;
