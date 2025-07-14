import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Statistics from "./components/Statistics";

import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // 1, 2, 3
  // 2 -> 1 !== 2, 2 !== 2, 2 !== 3

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleTaskStatus = (id) => {
    // const updatedTasks = tasks.map((task) => {
    //   if (task.id == id) {
    //     task.completed = !task.completed;
    //   }
    //   return task;
    // });

    // setTasks(updatedTasks);

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));

    if (localTasks.length > 0) {
      setTasks(localTasks);
    }
  }, []);

  // Save each time the tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Task Tracker</h1>
        <p className="app-subtitle">
          Organize your tasks and boost productivity
        </p>
      </header>

      <main className="app-main">
        {/* Task form */}
        <TaskForm onTaskChange={setTasks} />

        {/* task list */}
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleTaskStatus={handleTaskStatus}
        />

        {/* statistics */}
        <Statistics tasks={tasks} />
      </main>
    </div>
  );
};

export default App;
