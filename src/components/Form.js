import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({
  todos,
  setTodos,
  newTodo,
  setNewTodo,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, id, status) => {
    const tasks = todos.map((todo) =>
      todo.id === id ? { id, title, status } : todo
    );
    setTodos(tasks);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setNewTodo(editTodo.title);
    } else {
      setNewTodo("");
    }
  }, [setNewTodo, editTodo]);
  const addTodo = (e) => {
    e.preventDefault();
    if (!editTodo) {
      if (newTodo) {
        const newEntry = { id: uuidv4(), title: newTodo, status: false };
        setTodos([...todos, newEntry]);
        setNewTodo("");
      }
    } else {
      updateTodo(newTodo, editTodo.id, editTodo.status);
    }
  };
  return (
    <form onSubmit={addTodo}>
      <div className="row">
        <div className="col">
          <input
            type="text"
            name=""
            id=""
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg">
            {editTodo ? "Update" : "Add To-Do"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
