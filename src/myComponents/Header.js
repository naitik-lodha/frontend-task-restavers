import React from "react";
import { Link } from "react-router-dom";

const Header = ({ newTodo, setNewTodo, todos, setTodos }) => {
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (newTodo !== "" && newTodo !== " " && newTodo !== null) {
      const newId = todos.length + 1;
      const newTodoObj = { id: newId, name: newTodo, completed: false };
      setTodos([...todos, newTodoObj]);
      setNewTodo("");
    }
  };
  return (
    <nav className="bg-black flex justify-around pt-4 text-white">
      <div className="mx-4 mt-2 text-3xl">
        <Link to="/completed" className="hover:text-yellow-300">
          Completed
        </Link>
        <Link to="/incomplete" className="mx-8 hover:text-yellow-300">
          Incomplete
        </Link>
      </div>
      <div>
        <input
          className="ml-10 bg-transparent h-12 text-white rounded-lg border-2 border-solid border-white pl-3"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Eg. Cycling"
        ></input>
        <button
          className="m-4 mt-2 ml-2 p-3 rounded-lg bg-green-500 text-white"
          onClick={handleAdd}
        >
          Add New Todo
        </button>
      </div>
    </nav>
  );
};

export default Header;
