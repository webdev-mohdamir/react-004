import { BarChart3, CheckCircle, Clock, Target } from "lucide-react";
import "./Statistics.css";

const Statistics = ({ tasks }) => {
  const totalTasks = tasks.length;
  const compLetedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - compLetedTasks;
  const completedPercentage =
    totalTasks > 0 ? Math.floor((compLetedTasks / totalTasks) * 100) : 0;

  const overdueTasks = tasks.filter(
    (task) => new Date(task.dueDate) < new Date() && !task.completed
  ).length;

  const stats = [
    {
      icon: <Target size={24} />,
      label: "Total Tasks",
      value: totalTasks,
      color: "#3b82f6",
    },
    {
      icon: <CheckCircle size={24} />,
      label: "Completed",
      value: compLetedTasks,
      color: "#22c55e",
    },
    {
      icon: <Clock size={24} />,
      label: "Pending",
      value: pendingTasks,
      color: "#f59e0b",
    },
    {
      icon: <BarChart3 size={24} />,
      label: "Completion",
      value: `${completedPercentage}%`,
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="statistics">
      <h2 className="statistics-title">Statistics</h2>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={`stat-${i}`} className="stat-card">
            <div className="stat-icon" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {overdueTasks > 0 && (
        <div className="overdue-alert">
          <div className="alert-icon">⚠️</div>
          <div className="alert-content">
            <strong>Attention:</strong> You have {overdueTasks} overdue task
            {overdueTasks > 1 ? "s" : ""}
          </div>
        </div>
      )}

      {totalTasks > 0 && (
        <div className="progress-section">
          <div className="progress-header">
            <span>Overall Progress</span>
            <span className="progress-percentage">{completedPercentage}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completedPercentage}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
