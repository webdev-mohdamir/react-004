import "./TaskList.css";

const tasks = [];

const TaskList = () => {
  if (tasks.length == 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🗃️</div>
        <h3>No Tasks Found</h3>
        <p>Add your first task to get started with organizing your day!</p>
      </div>
    );
  }

  return <div>TaskList</div>;
};

export default TaskList;
