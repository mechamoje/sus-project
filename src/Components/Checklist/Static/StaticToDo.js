import React, { useState, useEffect } from "react";
import data from "../list.json";
import { useParams } from "react-router-dom";
import { TbExchange } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./static.css";

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

  const [complete, setComplete] = useState([]);

  const [lateTasks, setLateTasks] = useState([]);

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

  const [allTasks, setAlltasks] = useState(
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

  const completeTask = (task) => {
    const position = allTasks.findIndex((t) => t === task);
    allTasks[position].complete = true;
    const newTasks = swap(allTasks)(position, 3);
    setAlltasks(swap(newTasks)(3, newTasks.length -1));
  };

  let completedTasks = allTasks.filter((task) => task.complete);
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

  let incompleteTasks = allTasks.filter((task) => !task.complete);

  const buscarTarefa = (task) => {
    if (allTasks.filter((t) => !t.complete).length <= 3) return;
    let position = allTasks.findIndex((t) => t === task);
    const newTasks = swap(allTasks)(position, 3);
    let restante = newTasks.slice(4).concat(allTasks[position])
    let swapvar =  newTasks.slice(0, 3).concat(restante)
    setAlltasks(swapvar);
    console.log(swapvar);
  };
  

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
                    <BsFillCheckCircleFill />
                  </button>
                  <button
                    className="btn-new"
                    onClick={() => {
                      buscarTarefa(dado);
                    }}
                  >
                    <TbExchange />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <ul className="list complete-list">
            {completedTasks.map((dado, key) => (
              <li className="data-item" key={key}>
                {dado.task}
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
