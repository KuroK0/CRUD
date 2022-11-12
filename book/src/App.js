import React, { useState } from "react";
import ContactBook from "./components/ContactBook.jsx";
import ListBook from "./components/ListBook.jsx";
import EditBook from "./components/EditBook/EditBook.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const [modal, setModal] = useState(false);

  const [editTodo, setEditTodo] = useState({});

  function saveArr(newObj) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);

    console.log(newTodos);
  }

  function handleDelete(id) {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    console.log(newTodos);
  }

  function handleEdit(index) {
    setModal(true);
    setEditTodo(todos[index]);
  }

  function handleClose() {
    setModal(false);
  }

  function handleSaveTask(newTask) {
    const newTodos = todos.map((item) => {
      if (item.id === newTask.id) {
        return newTask;
      }
      return item;
    });
    setTodos(newTodos);
    handleClose();
  }

  return (
    <div>
      <ContactBook saveArr={saveArr} />
      <ListBook
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? (
        <EditBook
          handleSaveTask={handleSaveTask}
          editTodo={editTodo}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
}

export default App;
