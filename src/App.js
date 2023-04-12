import { Route, Routes } from "react-router-dom";
import Completed from "./pages/Completed";
import Incomplete from "./pages/Incomplete";
import Home from "./pages/Home";
import Header from "./myComponents/Header";
import { useState, useEffect } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  return (
    <>
      <Header
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/completed"
          element={<Completed todos={todos} handleStatus={handleStatus} />}
        />
        <Route
          path="/incomplete"
          element={<Incomplete todos={todos} handleStatus={handleStatus} />}
        />
      </Routes>
    </>
  );
}

export default App;
