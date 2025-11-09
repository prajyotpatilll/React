import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-xl rounded-xl bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">📝 To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border rounded">
            <span
              className={`flex-1 ${task.done ? "line-through text-gray-400" : ""}`}
              onClick={() => toggleDone(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 font-bold px-2">
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
