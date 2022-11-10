import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import {HiOutlineSave} from 'react-icons/hi'

const Form = ({ input, setInput, toDo, setToDo, editToDo, setEditToDo }) => {
  const updateToDo = (title, id, completed) => {
    const newToDo = toDo.map((toDo) =>
      toDo.id === id ? { title, id, completed } : toDo
    );
    setToDo(newToDo);
    setEditToDo("");
  };

  useEffect(() => {
    if (editToDo) {
      setInput(editToDo.title);
    } else {
      setInput("");
    }
  }, [setInput, editToDo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editToDo) {
      setToDo([...toDo, { id: uuidV4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateToDo(input, editToDo.id, editToDo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit} className ='form-input'>
      <input
        type="text"
        placeholder="Insira uma nova task"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
       {editToDo ? 'Editar' : 'Criar tarefa'} <HiOutlineSave />
      </button>
    </form>
  );
};

export default Form;
