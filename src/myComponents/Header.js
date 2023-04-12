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
    <nav className="bg-black flex justify-evenly pt-4 text-white">
      <Link className="text-6xl mx-4" to="/">
        Todo
      </Link>
      <Link to="/completed">Completed</Link>
      <Link to="/incomplete" className="mx-4">
        Incomplete
      </Link>
      <input
        className="ml-10 h-12 text-black"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Eg. Cycling"
      ></input>
      <button
        className="m-4 p-4 bg-white rounded-lg text-black"
        onClick={handleAdd}
      >
        Add New Todo
      </button>
    </nav>
  );
};

export default Header;
