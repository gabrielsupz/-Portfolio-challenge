import { useState, useEffect } from 'react'
import './styles/main.css'

function Main() {
  const url = 'https://api.github.com/users/suptitzgabriel'
  const repoUrl = 'https://api.github.com/users/SuptitzGabriel/repos'
  const [user, setUser] = useState({ name: '', avatar: '' })
  const [repositorys, setRepositorys] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      })
  }, [])

  useEffect(() => {
    fetch(repoUrl)
      .then(response => response.json())
      .then(data => {
        setRepositorys(data)
      })
      .then(console.log(repositorys))
      .catch(error => console.error(error))
  }, [])

  const FirstRepo = () => {
    const data = repositorys[0]
    console.log('firstRepo data', data)

    return (
      <div className="project projectOne">
        <div className="nameProject">
          <img src="../public/assets/folder.svg" alt="Ícon Folder" />
          <a href="" target="blank">
            -Portfolio-challenge
          </a>
        </div>
        <p>
          Desafio da rockeseat,realizado com intuito de aprender mais sobre html
          e css,feito em react para treino.
        </p>
        <div>
          <div className="infoProject">
            <div className="infoGitHub">
              <div>
                <img src="../public/assets/star-project.svg" alt="Ícon Star" />
                <p>000</p>
              </div>
              <div>
                <img
                  src="../public/assets/git-branch.svg"
                  alt="Ícon Git Branch"
                />
                <p>001</p>
              </div>
            </div>

            <div className="projectTec">
              <p className="elipseJs"></p>
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SecondRepo = () => {
    const data = repositorys[0]
    console.log('secondRepo data', data)
    return (
      <div className="project projectTwo">
        <div className="nameProject">
          <img src="../public/assets/folder.svg" alt="Ícon Folder" />
          <a
            href="https://github.com/SuptitzGabriel/NLW-Return-"
            target="blank"
          >
            NLW-Return-
          </a>
        </div>
        <p>
          Projeto realizado na NLW Return da Rocketseat com intuito de aprender
          o básico de html e css, criando um site simples.
        </p>
        <div>
          <div className="infoProject">
            <div className="infoGitHub">
              <div>
                <img src="../public/assets/star-project.svg" alt="Ícon Star" />
                <p>000</p>
              </div>
              <div>
                <img
                  src="../public/assets/git-branch.svg"
                  alt="Ícon Git Branch"
                />
                <p>001</p>
              </div>
            </div>

            <div className="projectTec">
              <p className="elipseHtml"></p>
              <p>HTML</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className="myProject">
        <h3>My Projects</h3>
        <a href="https://github.com/SuptitzGabriel" target="blank">
          Veja todos
        </a>
      </div>
      <div className="projects">
        <div>
          <FirstRepo />
          <SecondRepo />
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
  )
}

export default Main
