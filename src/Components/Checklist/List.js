import React, { useState, useEffect } from "react";
import New from "../../images/setas.png";
import "./list.css";
import Doll from "../../images/bonecafalando.gif";
import Form from "./ToDo/Form";
import ToDo from "./ToDo/ToDo";
import StaticToDo from "./Static/StaticToDo";

export default function List() {
  const initialState = JSON.parse(localStorage.getItem("toDo")) || []; //criar opção limpar localstorage
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState(initialState);
  const [editToDo, setEditToDo] = useState(null);

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <>
      <article id="doll-text-list">
        <p>
          {" "}
          Que bom que você deseja tomar uma atitude, o mundo precisa de você!{" "}
          <br /> Toda mudança acontece a partir de um princípio, mas se cada um
          fizer sua parte, podemos chegar muito longe!
          Mas como nem sempre é fácil saber por onde começar, eu vim te ajudar com isso!<br/>
          Acabei de gerar uma lista de ações que você pode tomar ainda <b>HOJE</b> pra contribuir com o meio
          em que vivemos. <br/> Além disso, Você também pode registrar aqui o andamento dessas
          tarefas. Por que não inicia agora?
        </p>
      </article>

      <div id="doll-container-list">
        <picture>
          <img id="doll-list" src={Doll} alt="avatar de boneca" />
        </picture>

        <div id="list">
          <StaticToDo />
          <Form
            input={input}
            setInput={setInput}
            toDo={toDo}
            setToDo={setToDo}
            editToDo={editToDo}
            setEditToDo={setEditToDo}
          />
          <ToDo toDo={toDo} setToDo={setToDo} setEditToDo={setEditToDo} />
        </div>
      </div>
    </>
  );
}
