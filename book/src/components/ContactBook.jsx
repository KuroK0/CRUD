import React from "react";
import { useState } from "react";
import "./ContactBook.css";

const ContactBook = ({ saveArr }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");

  const nameInp = (e) => {
    setName(e.target.value);
  };
  const surnameInp = (e) => {
    setSurname(e.target.value);
  };
  const numberInp = (e) => {
    setNumber(e.target.value);
  };

  function Adder() {
    if (name == '' || surname == '' || number == '') {
      return alert("NuN");
    } else {
      let newContact = {
        name: name,
        surname: surname,
        number: number,
        status: false,
        id: Date.now(),
      };
      saveArr(newContact);

      setName("");
      setNumber("");
      setSurname("");
    }
  }

  return (
    <div>
      <h1>Contact Book</h1>
      <div className="inputs">
        <div className="texts">
          <input
            className="number1"
            value={name}
            type="text"
            placeholder="Name"
            onChange={nameInp}
          />
          <input
            value={surname}
            type="text"
            placeholder="Surname"
            onChange={surnameInp}
          />
          <input
            value={number}
            type="text"
            placeholder="ur number"
            onChange={numberInp}
          />

          <button onClick={Adder} className="create">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBook;
