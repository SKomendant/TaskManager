import "./App.css";
import TaskList from "./component/TaskList/TaskList";
import TaskForm from "./component/TaskForm";

function App() {
  return (
    <div>
      TaskManager
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
