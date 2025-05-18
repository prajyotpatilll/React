import React, { useState } from "react";

const TodoList = () => {
  const [todo, settodo] = useState([]);
  const [text, settext] = useState("");

  const addtodo = () => {
    if (text.trim()) {
      settodo([...todo, { text, complete: false }]);
      settext(" ");
    }
  };

  const del = (index) => {
    const newtodo = todo.filter((_, i) => i !== index);
    settodo(newtodo);
  };

  const cpl = (index) => {
    const newtodo = [...todo];
    newtodo[index].complete = !newtodo[index].complete;
    settodo(newtodo);
  };

  return (
    <div>
      <input
        className=" border-2"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button
        onClick={() => {
          addtodo();
        }}
      >
        Add
      </button>
      <ul>
        {todo.map((todo, index) => (
          <li key={index} className="flex items-center justify-center border-2">
            <p className={todo.complete ? "line-through" : "no-underline"}>
              {todo.text}
            </p>

            <button
              onClick={() => {
                del(index);
              }}
            >
              Del
            </button>
            <button
              onClick={() => {
                cpl(index);
              }}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
