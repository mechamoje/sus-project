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
    { id: 6, name: "Beleza e estética" },
    { id: 7, name: "Alimentação" },
    { id: 8, name: "Outros" },
  ];
  
  return (
    <section id="home-container">
      <div id="doll-container">
        <picture>
          <img id="doll" src={Doll} alt="avatar de boneca" />
        </picture>

        <div id="doll-text">
          <p id="text" className={showForm === "#" ? "disable" : "enable"}>
            <b>Olá!</b> Seja bem vindo(a) ao nosso projeto! <br/>
            Nosso objetivo hoje é que você
            saia daqui sabendo mais do que sabe agora sobre sustentabilidade e
            que saiba exatamente quais AÇÕES tomar a partir de HOJE para
            impactar positivamente o ambiente ao seu redor, para você e para o
            próximo. <br/>
            Você está pronto para essa experiência?
          </p>

          <form className={showForm === "#" ? "enable" : "disable"}>
            <label>
              Qual seu nome?
              <input type="text" className="home-input" />
            </label>

            <label>
              Qual sua idade?
              <input min="1" max="90" className="home-input" type="number" />
            </label>

            <label>
              Qual sua área de atuação?
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
              <Link to={`/info/${selectValue}`} > Iniciar jornada </Link>
            </button>
          </form>

          <button
            id="start"
            onClick={() => setShowForm("#")}
            className={showForm === "#" ? "disable" : "enable startbtn"}
          >
            Com certeza!
          </button>
        </div>
      </div>
    </section>
  );
}
