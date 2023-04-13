import { Route, Routes } from "react-router-dom";
import Completed from "./pages/Completed";
import Incomplete from "./pages/Incomplete";
import Home from "./pages/Home";
import Header from "./myComponents/Header";
import { useState, useEffect } from "react";

function App() {
  const getData = () => {
    let localTodos = localStorage.getItem("todos");
    console.log(localTodos);
    if (localTodos) {
      return JSON.parse(localTodos);
    } else {
      return [];
    }
  };

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(getData);

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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="font-Rajdhani">
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
    </div>
  );
}

export default App;
