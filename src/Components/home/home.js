import React, { useState } from "react";
import Doll from "../../images/bonecafalando.gif";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [selectValue, setSelectValue] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const selectValues = [
    { id: 1, name: "Educação" },
    { id: 2, name: "Vendas" },
    { id: 3, name: "Saúde" },
    { id: 4, name: "Tecnologia" },
    { id: 5, name: "Informação" },
    { id: 6, name: "Serviços" },
    { id: 7, name: "Beleza e estética" },
    { id: 8, name: "Alimentação" },
    { id: 9, name: "Outros" },
  ];
  
  return (
    <section>
      <div id="doll-container">
        <picture>
          <img id="doll" src={Doll} alt="avatar de boneca" />
        </picture>

        <div id="doll-text">
          <p id="text" className={showForm === "#" ? "disable" : "enable"}>
            Olá! seja bem vindo ao nosso projeto! Nosso objetivo hoje é que você
            saia daqui sabendo mais do que sabe agora sobre sustentabilidade e
            que saiba exatamente quais AÇÕES tomar a partir de HOJE para
            impactar positivamente o ambiente ao seu redor, para você e para o
            próximo. Vamos nessa?
          </p>

          <form className={showForm === "#" ? "enable" : "disable"}>
            <label>
              Qual seu nome?
              <input type="text" />
            </label>

            <label>
              Qual sua idade?
              <input min="1" max="90" type="number" />
            </label>

            <label>
              Qual seu trabalho?
              <select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                {selectValues.map((item, index) => (
                  <option value={item.id}> {item.name}</option>
                ))}
              </select>
            </label>
            <button className="sendbtn enable">
              <Link to='/info'> Iniciar jornada </Link>
            </button>
          </form>

          <button
            id="start"
            onClick={() => setShowForm("#")}
            className={showForm === "#" ? "disable" : "enable startbtn"}
          >
            Vamos!
          </button>
        </div>
      </div>
    </section>
  );
}
