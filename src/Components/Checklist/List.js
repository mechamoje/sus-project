import React from "react";
import New from "../../images/setas.png";
import "./list.css";
import Doll from "../../images/bonecafalando.gif";

export default function List() {
  return (
    <>    
      <article id="doll-text-list">
        <p>
          {" "}
          Que bom que você deseja tomar uma atitude! o mundo precisa de você. Se
          cada um ajudar, podemos chegar mto longe. Vc tb acredita nisso? Então
          vamos lá! Aqui está a lista de ações que vpcê pode tomar ainda HOJE
          pra ajudar com o meio em que vivemos. Vc também pode registrar aqui o
          andamento dessas tarefas. Por que não inicia agora?
        </p>
      </article>

      <div id="doll-container-list">
        <picture>
          <img id="doll-list" src={Doll} alt="avatar de boneca" />
        </picture>
      </div>

     <div id="list">
      <ol>
        <li>
          {" "}
          Reduzir o consumo de plásticos (que tal sacolas retornáveis?)
          <input type="checkbox" />
          <button className="btn-img">
            {" "}
            <img className="btn-img" src={New} />{" "}
          </button>
        </li>
      </ol>
      </div>
    </>
  );
}
