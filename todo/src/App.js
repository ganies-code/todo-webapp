import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { status: true, taskTitle: "make tae" },
    { status: false, taskTitle: "make Rice" },
    { status: false, taskTitle: "make Table" },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ padding: 10 }}>TO-DO list app</div>
      <div>Filters:</div>
      <button onClick={(e) => setFilter("completed")}>Show conpleted</button>
      <button onClick={(e) => setFilter("incompleted")}>Show conpleted</button>
      <button onClick={(e) => setFilter("")}>clear filter</button>
      <div style={{ flex: 1, border: "1px solid red" }}>
        {tasks
          .filter((d) => {
            if (filter === "completed") return d.status === true;

            if (filter === "incompleted") return d.status === false;
            return true;
          })
          .map((task, i) => (
            <div
              key={"task" + i}
              style={{
                padding: 5,
                border: "1px solid #ccc",
                textAlign: "left",
              }}
            >
              <input
                type="checkbox"
                checked={task.status}
                onClick={(e) => {
                  const _tasks = [...tasks];

                  _tasks[i].status = !_tasks[i].status;
                  setTasks(_tasks);
                }}
              />
              <span style={{ marginLeft: 10, textTransform: "capitalize" }}>
                {task.taskTitle}
              </span>
            </div>
          ))}
        {/* {JSON.stringify(tasks)} */}
      </div>
      <div style={{ padding: 20 }}>
        <input
          valu={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />{" "}
        <button
          onClick={(e) => {
            setTasks([...tasks, { status: false, taskTitle: newTaskTitle }]);
          }}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}

export default App;
