import React from "react";
import "./ListBook.css";

const ListBook = (props) => {
  return (
    <ul className="page">
      {props.todos.map((item, index) => (
        <li key={item.id} className={item.status ? "completed" : ""} >
          {item.name} {item.surname} {item.number}
          <div className="btn-list">
            <button className="btn" onClick={() => props.handleDelete(item.id)}>Delete</button>
            <button className="btn" onClick={()=> props.handleEdit(index)}>Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListBook;
