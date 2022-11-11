import React from "react";
import "./information.css";
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Agua from "../../images/agua.jpg";
import Alimentacao from "../../images/alimentacao.jpg";
import Animais from "../../images/animais.jpg";
import Clima from "../../images/clima.jpg";
import Nature from "../../images/natureza.jpg";
import People from "../../images/sociedade.jpg";
import { Link, useParams } from "react-router-dom";
import { AiFillInfoCircle } from "react-icons/ai";

export default function Information() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const closeModal1 = () => setOpen1(false);
  const closeModal2 = () => setOpen2(false);
  const closeModal3 = () => setOpen3(false);
  const closeModal4 = () => setOpen4(false);
  const closeModal5 = () => setOpen5(false);
  const closeModal6 = () => setOpen6(false);

  const params = useParams();

  return (
    <div className="about">
      <h2 id="info-title">
        {" "}
        Antes de descobrirmos como ajudar, primeiro vamos conhecer melhor os
        problemas que estamos enfrentando? <br />
        Clique para interagir!{" "}
      </h2>

      <section id="cards-container">
        <button
          type="button"
          className="info-card"
          onClick={() => setOpen1((o) => !o)}
        >
          <p className="text-img"> Sobre a água</p>{" "}
          <img className="btn-img-info" src={Agua} />
        </button>

        <Popup
          open={open1}
          closeOnDocumentClick
          onClose={closeModal1}
          className="information-box"
        >
          <div className="modal">
            <a className="close" onClick={closeModal1}>
              <bold>x</bold>{" "}
            </a>
            O Brasil, que possui 12% das reservas de água doce do planeta, está
            secando: esta é a conclusão obtida pela análise de imagens de
            satélite de todo o território nacional entre 1985 e 2020 feita pela
            equipe do MapBiomas. O país vem perdendo 15% da superfície de água
            desde o começo dos anos 1990.
            <a
              className="info-link"
              href="https://docs.google.com/document/d/1zjbPVbJJhrAdWEBqydFTiz1luTpj-qMFxwHPmnASOv4/edit?usp=sharing"
            >
              <AiFillInfoCircle />
            </a>
          </div>
        </Popup>

        <button
          type="button"
          className="info-card"
          onClick={() => setOpen2((o) => !o)}
        >
          <p className="text-img"> Sobre os animais</p>{" "}
          <img className="btn-img-info" src={Animais} />
        </button>

        <Popup
          open={open2}
          closeOnDocumentClick
          onClose={closeModal2}
          className="information-box"
        >
          <div className="modal">
            <a className="close" onClick={closeModal2}>
              <bold>x</bold>{" "}
            </a>
            A Organização Mundial da Saúde estima que só no Brasil existam mais
            de 30 milhões de animais abandonados, entre 10 milhões de gatos e 20
            milhões de cães. Em cidades de grande porte, para cada cinco
            habitantes há um cachorro. Destes, 10% estão abandonados. No
            interior, em cidades menores, a situação não é muito diferente. Em
            muitos casos o numero de animais em situação de rua chega a 1/4 da
            população humana.
            <a
              className="info-link"
              href="https://docs.google.com/document/d/1zjbPVbJJhrAdWEBqydFTiz1luTpj-qMFxwHPmnASOv4/edit?usp=sharing"
            >
              <AiFillInfoCircle />
            </a>
          </div>
        </Popup>

        <button
          type="button"
          className="info-card"
          onClick={() => setOpen3((o) => !o)}
        >
          <p className="text-img"> Sobre o clima </p>{" "}
          <img className="btn-img-info" src={Clima} />
        </button>

        <Popup
          open={open3}
          closeOnDocumentClick
          onClose={closeModal3}
          className="information-box"
        >
          <div className="modal">
            <a className="close" onClick={closeModal3}>
              <bold>x</bold>{" "}
            </a>
            Existe um desequilíbrio climático imenso que já pode ser notados no
            Brasil. A região Sudeste e parte do Nordeste sofrem com chuvas
            intensas, que deixam mortos e desabrigados. No Sul, secas históricas
            causam desabastecimento de água em centenas de municípios. No Norte,
            a bacia amazônica tem enchentes históricas e o processo de
            savanização da floresta pode aumentar as temperaturas a níveis
            fatais. Alterações de humor, distúrbios psicológicos e redução de
            habilidades físicas e mentais também são consequências de uma
            exposição constante a níveis elevados de calor. “O nível de stress
            térmico nos afeta como se fosse um gatilho no nosso psicológico, nos
            fazendo sentir mais cansados, nervosos e menos dispostos, por
            exemplo”, diz a pesquisadora.
            <a
              className="info-link"
              href="https://docs.google.com/document/d/1zjbPVbJJhrAdWEBqydFTiz1luTpj-qMFxwHPmnASOv4/edit?usp=sharing"
            >
              <AiFillInfoCircle />
            </a>
          </div>
        </Popup>

        <button
          type="button"
          className="info-card"
          onClick={() => setOpen4((o) => !o)}
        >
          <p className="text-img"> Sobre alimentação </p>
          <img className="btn-img-info" src={Alimentacao} />
        </button>
        <Popup
          open={open4}
          closeOnDocumentClick
          onClose={closeModal4}
          className="information-box"
        >
          <div className="modal">
            <a className="close" onClick={closeModal4}>
              <bold>x</bold> {"  "}
            </a>
            O maior problema do Brasil hoje é o aumento exponencial de pessoas
            passando fome e de pessoas em situação de insegurança alimentar.
            Atualmente, 55% da população brasileira vive em situação de
            insegurança alimentar. Além disso, a fome afeta atualmente 15,5% da
            população, sendo as regiões Norte e Nordeste são as mais afetadas.
            As causas para a fome no Brasil compreendem desde questões sociais e
            econômicas até políticas, destacando-se as desigualdades sociais, a
            pobreza, as crises (política, econômica, sanitária) e a má
            distribuição de alimentos.
            <a
              className="info-link"
              href="https://docs.google.com/document/d/1zjbPVbJJhrAdWEBqydFTiz1luTpj-qMFxwHPmnASOv4/edit?usp=sharing"
            >
              <AiFillInfoCircle />
            </a>
          </div>
        </Popup>

        <button
          type="button"
          className="info-card"
          onClick={() => setOpen5((o) => !o)}
        >
          <p className="text-img"> Sobre a sociedade </p>
          <img className="btn-img-info" src={People} />
        </button>
        <Popup
          open={open5}
          closeOnDocumentClick
          onClose={closeModal5}
          className="information-box"
        >
          <div className="modal">
            <a className="close" onClick={closeModal5}>
              <bold>x</bold>{" "}
            </a>
            A pobreza nunca esteve tão alta no Brasil quanto em 2021, que
            comprovou que 29,6% dos brasileiros têm renda familiar inferior a R$
            497 mensais. Além disso, o Brasil permanece um dos países com maior
            desigualdade social e de renda do mundo, segundo o novo estudo
            lançado mundialmente nesta terça-feira (7/12) pelo World Inequality
            Labo Brasil.
            <a
              className="info-link"
              href="https://docs.google.com/document/d/1zjbPVbJJhrAdWEBqydFTiz1luTpj-qMFxwHPmnASOv4/edit?usp=sharing"
            >
              <AiFillInfoCircle />
            </a>
          </div>
        </Popup>

        <button
          type="button"
          className="info-card"
          onClick={() => setOpen6((o) => !o)}
        >
          <p className="text-img"> Sobre a natureza</p>{" "}
          <img className="btn-img-info" src={Nature} />
        </button>
        <Popup
          open={open6}
          closeOnDocumentClick
          onClose={closeModal6}
          className="information-box"
        >
          <div className="modal">
            <a className="close" onClick={closeModal6}>
              <bold>x</bold>{" "}
            </a>
            Florestas ricas em espécies estão sendo destruídas, para muitas
            vezes abrir espaço para a criação de gado, para plantações de soja
            ou de óleo de palma, ou para outras monoculturas agrícolas. Isso
            compreende a 7,3 milhões de hectares de floresta que são destruídos
            a cada ano, principalmente nos trópicos. Florestas tropicais
            costumavam cobrir cerca de 15% da área terrestre do planeta.
            Atualmente elas cobrem de 6% a 7%. Grande parte do que sobrou foi
            degradado pela derrubada de árvores ou queimadas. As florestas
            naturais não atuam apenas como reservas da biodiversidade, eles
            também são reservatórios que mantêm o carbono fora da atmosfera e
            dos oceanos.
            <a
              className="info-link"
              href="https://docs.google.com/document/d/1zjbPVbJJhrAdWEBqydFTiz1luTpj-qMFxwHPmnASOv4/edit?usp=sharing"
            >
              <AiFillInfoCircle />
            </a>
          </div>
        </Popup>
      </section>

      <div id="btn-action-container">
        <button id="btn-action">
          <Link to={`/tasks/${params.id}`}>
            {" "}
            Quero iniciar a mudança agora!{" "}
          </Link>
        </button>
        <button id="btn-action-mobile">
          <Link to={`/tasks/${params.id}`}> Iniciar a mudança agora! </Link>
        </button>
      </div>
    </div>
  );
}
