# Task Tracker Application

A simple and elegant React-based task management application that helps you organize your tasks and boost productivity. Built with modern React patterns and clean CSS styling.

## Features

- ✅ **Add new tasks** with titles and due dates
- 📅 **Set due dates** for better task planning
- ✔️ **Mark tasks as completed/incomplete** with intuitive checkboxes
- 🗑️ **Delete tasks** you no longer need
- 📊 **View statistics** including total tasks, completed tasks, and completion percentage
- ⚠️ **Overdue task alerts** to keep you on track
- 💾 **Automatic data persistence** using localStorage
- 📱 **Responsive design** that works on all devices
- 🎨 **Beautiful UI** with smooth animations and hover effects

## Technologies Used

- **React 18** - Modern React with hooks for state management
- **JavaScript** - Clean and modern JavaScript with ES6+ features
- **CSS3** - Custom CSS with modern features like CSS Grid and Flexbox
- **Vite** - Fast build tool and development server
- **Lucide React** - Clean and consistent icons
- **localStorage** - Browser storage for data persistence

## Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Quick Start

```bash
# Clone the repository
git clone <your-repository-url>
cd task-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### From Scratch

Create a new Vite React JavaScript project and build the Task Tracker yourself:

```bash
# Create a new Vite project
npm create vite@latest task-tracker -- --template react

# Navigate to the project directory
cd task-tracker

# Install dependencies
npm install

# Install Lucide React for icons
npm install lucide-react

# Start the development server
npm run dev
```

## Usage

### Adding Tasks

1. Fill in the task title in the input field
2. Select a due date using the date picker
3. Click "Add Task" to add it to your list

### Managing Tasks

- **Complete a Task**: Click the circle icon next to any task to mark it as completed
- **Delete a Task**: Click the trash icon to remove a task permanently
- **View Progress**: Check the statistics section to see your completion progress

### Understanding the Interface

- **Green checkmark**: Completed tasks
- **Red border**: Overdue tasks
- **Progress bar**: Shows overall completion percentage
- **Statistics cards**: Display total, completed, pending, and completion rate

## Project Structure

```
src/
├── components/
│   ├── Task.jsx              # Individual task component
│   ├── Task.css              # Task styling
│   ├── TaskForm.jsx          # Form for adding new tasks
│   ├── TaskForm.css          # Form styling
│   ├── TaskList.jsx          # List container for all tasks
│   ├── TaskList.css          # List styling
│   ├── Statistics.jsx        # Statistics display component
│   └── Statistics.css        # Statistics styling
├── App.jsx                  # Main application component
├── App.css                  # Global application styles
├── main.jsx                 # React application entry point
└── index.css                # Global CSS imports
```

## Key Components

### Task Interface

```javascript
// Task object structure
const task = {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  createdAt: string;
};
```

### Main App Component

The main `App.jsx` handles:

- State management for tasks array
- localStorage persistence
- Task CRUD operations (Create, Read, Update, Delete)

### TaskForm Component

- Controlled form inputs
- Form validation
- Task creation with current timestamp

### TaskList Component

- Task rendering with sorting (incomplete tasks first)
- Empty state handling
- Task interaction handlers

### Statistics Component

- Real-time statistics calculation
- Progress visualization
- Overdue task warnings

## Core React Concepts Demonstrated

### State Management

```jsx
const [tasks, setTasks] = useState([]);
```

### Side Effects

```jsx
useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);
```

### Event Handling

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  if (title.trim() && dueDate) {
    onAddTask(title.trim(), dueDate);
    setTitle("");
    setDueDate("");
  }
};
```

### Conditional Rendering

```jsx
{
  tasks.length === 0 ? (
    <div className="empty-state">
      <div className="empty-icon">📝</div>
      <h3>No tasks yet</h3>
      <p>Add your first task to get started!</p>
    </div>
  ) : (
    <TaskList />
  );
}
```

## Styling Approach

### CSS Architecture

- **Component-based CSS**: Each component has its own CSS file
- **BEM-like naming**: Clear and descriptive class names
- **CSS Custom Properties**: Used for consistent spacing and colors
- **Responsive Design**: Mobile-first approach with breakpoints

### Key Design Features

- **Gradient backgrounds**: Modern visual appeal
- **Glassmorphism effects**: Backdrop blur and transparency
- **Smooth animations**: Hover effects and transitions
- **Consistent spacing**: 8px spacing system
- **Accessible colors**: High contrast ratios

## Data Persistence

The application uses browser's localStorage to persist tasks between sessions:

```jsx
// Save tasks to localStorage
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

// Load tasks from localStorage
useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory and can be deployed to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- AWS S3

## Performance Optimizations

- **Efficient re-renders**: Proper use of React keys
- **Optimized sorting**: Tasks sorted only when needed
- **localStorage batching**: Updates saved on task changes
- **CSS animations**: Hardware-accelerated transforms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a learning project demonstrating core React concepts. Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Development Guidelines

- Write clean, readable code
- Use modern JavaScript features (ES6+)
- Follow the existing CSS structure
- Add comments for complex logic
- Test on multiple devices

## Learning Outcomes

By studying this project, you'll learn:

- **React Hooks**: useState, useEffect
- **Modern JavaScript**: ES6+ features, destructuring, arrow functions
- **Component Architecture**: Separation of concerns
- **State Management**: Lifting state up pattern
- **Event Handling**: Form submission, user interactions
- **CSS Styling**: Modern CSS techniques
- **Data Persistence**: localStorage API
- **Responsive Design**: Mobile-first approach

## Future Enhancements

Potential features to add:

- 🏷️ Task categories and tags
- 🔍 Search and filter functionality
- 📅 Calendar view
- 🔄 Task priority levels
- 📤 Export/import tasks
- 🌙 Dark mode toggle
- 📊 Advanced analytics
- 🔔 Browser notifications

## License

This project is open source and available under the MIT License.

## Author

- **Name**: MOHD AMIR
