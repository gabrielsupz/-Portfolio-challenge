import { useState, useEffect } from "react";
import "./styles/main.css";
import Repo from "./components/repo/repo";

function Main({ user }) {
  const repoUrl = "https://api.github.com/users/gabrielsupz/repos";
  const [repositorys, setRepositorys] = useState([]);

  useEffect(() => {
    fetch(repoUrl)
      .then((response) => response.json())
      .then((data) => setRepositorys(data))
      .catch((error) => console.error(error));
  }, []);

  const parseRepo = (repo) => ({
    ...repo,
    star: repo.stargazers_count,
    tecnologi: repo.language,
    link: repo.html_url,
    fork: repo.forks,
  });

  return (
    <main>
      <div className="myProject">
        <h3>My Projects</h3>
        <a href="https://github.com/gabrielsupz" target="blank">
          Veja todos
        </a>
      </div>
      <div className="projects">
        <div>
          <Repo data={repositorys[0] ? parseRepo(repositorys[0]) : {}} />
          <Repo data={repositorys[1] ? parseRepo(repositorys[1]) : {}} />
          <div></div>
        </div>
      </div>
      <div className="message">
        <h3>Mensagem</h3>
      </div>
      <div className="message textMessage">
        <div>
          <img
            id="gitImage"
            className="messagePic"
            src={user.avatar}
            alt="Imagem de perfil"
          />
        </div>

        <p>
          <strong>Olá,Tudo certo✌️ ?</strong>
          <br />
          <br />
          Meu nome é Gabriel Suptitz estou no caminho para me tornar um
          programador e tentando alcançar sempre um próximo nível 🚀, este é um
          portifólio feito com base no desafio do discover da Rocketseat,mas com
          algumas preferências próprias!
        </p>
      </div>
    </main>
  );
}

export default Main;
