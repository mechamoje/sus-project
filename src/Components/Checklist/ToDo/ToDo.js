import React from "react";
import {TbEdit} from 'react-icons/tb'
import {HiTrash} from 'react-icons/hi'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import './todo.css'


function ToDo({ toDo: toDoList, setToDo, setEditToDo }) {
    const handleDelete = ({id}) => {
        setToDo(toDoList.filter((toDo) => toDo.id !==id ))
    }

    const handleComplete = (toDo) => {
        setToDo(
          toDoList.map((item) => {
                if(item.id === toDo.id){
                    return {...item, completed: !item.completed}
                } return item  
            })
        )
    }

    const renderToDoList = (list) => { 
      return list.map((toDo) => (
        <li className="list-item" key={toDo.id}>
          <p
            className={`${toDo.completed ? 'complete' : 'not-completed'}`} 
          >
            {toDo.title} </p>      
        <div className="btn-container"> 
        <button className="btn-complete" onClick={() => handleComplete(toDo)}>
        <BsFillCheckCircleFill /> 
        </button>
        <button className="btn-edit" onClick={() => handleEdit(toDo)}>
        <TbEdit />
        </button>
        <button className="btn-delete" onClick={() => handleDelete(toDo)}>
          <HiTrash />  
        </button>
        </div> 
        </li>

      ))
    } 

    const handleEdit = ({id}) => {
        const findToDo = toDoList.find( (toDo) => toDo.id === id )
        setEditToDo(findToDo)
    }

  return (
    <div id="to-do-list">
     <ul>{renderToDoList(toDoList.filter(toDo => !toDo.completed))}
      {renderToDoList(toDoList.filter(toDo => toDo.completed))}</ul>
    </div>
  );
}

export default ToDo;
