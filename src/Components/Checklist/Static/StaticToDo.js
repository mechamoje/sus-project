import React, { useState, useEffect } from "react";
import data from "../list.json";
import { useParams } from "react-router-dom";
import { TbExchange } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./static.css";
import { HiTrash } from "react-icons/hi";

const swap = (tasks) => (position1, position2) => {
  const newTasks = tasks.slice();
  const firstItem = newTasks[position1];
  newTasks[position1] = newTasks[position2];
  newTasks[position2] = firstItem;

  return newTasks;
};

function StaticToDo({ initialState, value }) {
  const params = useParams();
  const idValue = params.id;

  const map = (idValue) => {
    switch (idValue) {
      case "1":
        return "Educação";
      case "2":
        return "Vendas";
      case "3":
        return "Saúde";
      case "4":
        return "Tecnologia";
      case "5":
        return "Informação";
      case "6":
        return "Beleza e estética";
      case "7":
        return "Alimentação";
      default:
        return "Outros";
    }
  };

  const allTasksFromLocalStorageRaw = localStorage.getItem('allTasks');
  const allTasksFromLocalStorage = allTasksFromLocalStorageRaw ? JSON.parse(allTasksFromLocalStorageRaw) : null;

  const [allTasks, setAlltasks] = useState(
    allTasksFromLocalStorage ??
    data
      .filter(
        (tarefa) => tarefa.field === map(idValue) || tarefa.field === "Outros"
      )
      .sort((task1, task2) => {
        if (task1.field === "Outros") {
          return 1;
        } else if (task2.field === "Outros") {
          return -1;
        }
        return 1;
      })
  );

  const completedTasks = allTasks.filter((task) => task.complete);
  const incompleteTasks = allTasks.filter((task) => !task.complete);

  const setTasks = (tasks) => {
    setAlltasks(tasks);
    localStorage.setItem('allTasks', JSON.stringify(tasks));
  }

  const completeTask = (task) => {
    const position = allTasks.findIndex((t) => t === task);
    allTasks[position].complete = true;
    const newTasks = swap(allTasks)(position, 3);
    setTasks(swap(newTasks)(3, newTasks.length - 1));
  };

  const buscarTarefa = (task) => {
    if (allTasks.filter((t) => !t.complete).length <= 3) return;
    const position = allTasks.findIndex((t) => t === task);
    const newTasks = swap(allTasks)(position, 3);
    const restante = newTasks.slice(4).concat(allTasks[position])
    const swapvar = newTasks.slice(0, 3).concat(restante)
    setTasks(swapvar);
    console.log(swapvar);
  };

  const apagarTarefa = task => {
    const position = allTasks.findIndex(t => t === task);
    const newTasks = [...allTasks];
    newTasks.splice(position, 1);
    setTasks(newTasks);
  }


  const Troca = (tasks, idValue, dataItem) => {
    if (idValue) {
      return (
        <>
          <ul className="list">
            {incompleteTasks.slice(0, 3).map((dado, key) => (
              <li className="data-item" key={key}>
                {dado.task}
                <div className="not-completed">
                  <button
                    className="btn-complete"
                    onClick={() => {
                      completeTask(dado);
                    }}
                  >
                    <BsFillCheckCircleFill className="mobile-icon" />
                  </button>
                  <button
                    className="btn-new"
                    onClick={() => {
                      buscarTarefa(dado);
                    }}
                  >
                    <TbExchange className="mobile-icon"/>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <ul className="list complete-list">
            {completedTasks.map((dado, key) => (
              <li className="data-item" key={key}>
                {dado.task}

                <button
                  className="btn-new"
                  onClick={() => apagarTarefa(dado)}
                >
                  <HiTrash className="mobile-icon"/>
                </button>
              </li>
            ))}
          </ul>
        </>
      );
    } else {
      return (
        <div>
          {" "}
          Volte à home e preencha o formulário para uma experiência completa e
          personalizada!{" "}
        </div>
      );
    }
  };

  return <div id="static-list">{Troca(allTasks, idValue)}</div>;
}

export default StaticToDo;