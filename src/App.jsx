const App = () => {
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
        <TaskForm />

        {/* task list */}
        <TaskList />

        {/* statistics */}
        <Statistics />
      </main>
    </div>
  );
};

export default App;
