import { BarChart3, CheckCircle, Clock, Target } from "lucide-react";
import "./Statistics.css";

const Statistics = () => {
  const stats = [
    {
      icon: <Target size={24} />,
      label: "Total Tasks",
      value: 0,
      color: "#3b82f6",
    },
    {
      icon: <CheckCircle size={24} />,
      label: "Completed",
      value: 0,
      color: "#22c55e",
    },
    {
      icon: <Clock size={24} />,
      label: "Pending",
      value: 0,
      color: "#f59e0b",
    },
    {
      icon: <BarChart3 size={24} />,
      label: "Completion",
      value: `${0}%`,
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
    </div>
  );
};

export default Statistics;
