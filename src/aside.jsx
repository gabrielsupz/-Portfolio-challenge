import { useState, useEffect } from "react";
import "./styles/aside.css";

function Aside({ user }) {
  return (
    <aside>
      <div className="profile">
        <img
          id="gitImage"
          className="profilePic"
          src={user.avatar}
          alt="Imagem de perfil"
        />
        <h1>{user.name}</h1>
        <h2>Novice Developer</h2>
      </div>
      <div className="contact">
        <ul>
          <li id="contactFrase">
            {" "}
            <img src="../public/assets/star.svg" alt="Ícon star" />
            <p>Contato</p>
          </li>
          <li>
            {" "}
            <img src="../public/assets/map-pin.svg" alt="Ícon map" />{" "}
            <a href="https://goo.gl/maps/afDMc9DMK3PzCMoB8">
              Sapiranga do RS, Brasil
            </a>{" "}
          </li>

          <li>
            <img src="../public/assets/linkedin.svg" alt="Ícon linkedin" />
            <a href="https://www.linkedin.com/in/gabriel-suptitz-51340124a/">
              Gabriel Suptitz{" "}
            </a>{" "}
          </li>
          <li>
            <img src="../public/assets/github.svg" alt="Ícon github" />
            <a href="https://github.com/gabrielsupz">gabrielsupz</a>{" "}
          </li>
          <li>
            <img src="../public/assets/instagram.svg" alt="Ícon instagram" />
            <a href="https://www.instagram.com/gabriel_supz/">gabriel_supz</a>
          </li>
          <li>
            <img src="../public/assets/mail.svg" alt="Ícon" />
            <a href="mailto:gabrielsuptitz@gmail.com">
              gabrielsuptitz@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="tec">
        <h3>Tecnologias</h3>
        <div className="technologies">
          <a
            title="Clique para ir ao MDN sobre HTML"
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
            target="blank"
          >
            HTML5
          </a>
          <a
            title="Clique para ir ao MDN sobre CSS"
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            target="blank"
          >
            CSS
          </a>
          <a
            title="Clique para ir ao MDN sobre React"
            href="https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
            target="blank"
          >
            REACTJS
          </a>
          <a
            title="Clique para ir ao MDN sobre JavaScript"
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="blank"
          >
            JAVASCRIPT
          </a>
          <a
            title="Clique para ir ao MDN sobre node"
            href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs"
            target="blank"
          >
            NODEJS
          </a>
        </div>
      </div>
      <div className="exp">
        <h3>Experiência</h3>
        <div>
          <ul>
            <li>
              <strong className="topic">Mared Têxtil</strong>
              <ul className="infoLi">
                <li>2021-2022</li>
                <li>Auxiliar de estoque.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="education">
        <h3>Educação</h3>
        <div>
          <ul>
            <li>
              <strong className="topic">
                Instituto Estadual Mathilde Zatar
              </strong>
              <ul className="infoLi">
                <li>2021-Atualmente</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
