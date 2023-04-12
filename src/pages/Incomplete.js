import React from "react";

const Incomplete = ({ todos, handleStatus }) => {
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-4">Incomplete Todos</h1>
      {incompleteTodos.map((todo) => (
        <li key={todo.id} className="flex justify-center items-center">
          <h1 className="text-2xl">{todo.name}</h1>
          <button
            className="bg-green-500  rounded-lg m-2 p-4 text-white"
            onClick={() => handleStatus(todo.id)}
          >
            Mark as Completed
          </button>
        </li>
      ))}
    </div>
  );
};

export default Incomplete;
