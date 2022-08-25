import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/Todolist";
import Lists from "./components/Lists";
function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);

  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [lists, setLists] = useState("All");
  const [filterTodos, setFilterTodos] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterHandler = () => {
    switch (lists) {
      case "Completed":
        setFilterTodos(todos.filter((todo) => todo.status === true));
        break;
      case "Uncompleted":
        setFilterTodos(todos.filter((todo) => todo.status === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    filterHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, lists]);

  return (
    <div className="container App">
      <br />
      <h2>TO-DO LIST</h2>
      <br />
      <Form
        todos={todos}
        setTodos={setTodos}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <Lists lists={lists} setLists={setLists} />
      <br />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
