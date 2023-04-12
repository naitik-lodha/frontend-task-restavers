import React from "react";

const Completed = ({ todos, handleStatus }) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-4">Completed Todos</h1>
      {completedTodos.map((todo) => (
        <li key={todo.id} className="flex justify-center items-center">
          <p className="text-3xl">{todo.name}</p>
          <button
            className="p-4 bg-red-600 m-2 rounded-lg text-white"
            onClick={() => handleStatus(todo.id)}
          >
            Mark as Incomplete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Completed;
