import React from "react";
import { useState } from "react";
import './EditBook.css'

const EditBook = (props) => {
  let [item, setItem] = useState(props.editTodo);

  function handleEditname(e) {
    let newObj = { ...item };
    newObj.name = e.target.value;
    setItem(newObj);
  }
  function handleEditsurname(e) {
    let newObj = { ...item };
    newObj.surname = e.target.value;
    setItem(newObj);
  }
  function handleEditnumber(e) {
    let newObj = { ...item };
    newObj.number = e.target.value;
    setItem(newObj);
  }

  function handleSave() {
    if (item.value == "") {
      return alert("Null");
    }
    return props.handleSaveTask(item);
  }

  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleClose}>&times;</button>
        </div>
        <div className="edit-window">
          <input
            value={item.name}
            onChange={handleEditname}
            type="text"
            className="inp-edit"
          />
          <input
            value={item.surname}
            onChange={handleEditsurname}
            type="text"
            className="inp-edit"
          />
          <input
            value={item.number}
            onChange={handleEditnumber}
            type="text"
            className="inp-edit"
          />
          <button onClick={handleSave} className="btn-save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
