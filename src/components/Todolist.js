import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
const TodoList = ({ todos, setTodos, setEditTodo, filterTodos }) => {
  const deleteTodo = (id) => {
    const delEntry = todos.filter((todo) => todo.id !== id);
    setTodos(delEntry);
  };
  const doneTodo = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(newTodo);
  };
  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div className="div">
      {todos && todos.length ? "" : "No Tasks to do"}
      {filterTodos &&
        filterTodos.map((todo, index) => {
          return (
            <div key={todo.id}>
              <div className="col todoBg">
                <div className={todo.status ? "done" : ""}>
                  <span className="todoText">{todo.title}</span>
                </div>
                <div className="iconsWrap">
                  <span
                    title="Complete"
                    onClick={() => {
                      doneTodo(todo.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {todo.status ? (
                    ""
                  ) : (
                    <span
                      title="Edit"
                      onClick={() => {
                        handleEdit(todo.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span
                    title="Delete"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
