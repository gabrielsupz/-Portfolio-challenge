import { useState, useEffect } from 'react'
import './styles/main.css'

function Main() {
  const url = 'https://api.github.com/users/gabrielsupz'
  const repoUrl = 'https://api.github.com/users/gabrielsupz/repos'
  const [user, setUser] = useState({ name: '', avatar: '' })
  const [repositorys, setRepositorys] = useState([])
  const [repo1, setRepos1] = useState([])
  const [repo2, setRepos2] = useState([])

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

  useEffect(url => {
    fetch(repoUrl)
      .then(response => response.json())
      .then(data => data[0])
      .then(repository => {
        setRepos1({
          name: repository.name,
          description: repository.description,
          fork: repository.forks,
          star: repository.stargazers_count,
          tecnologi: repository.language,
          link: repository.html_url
        })
      })

      .catch(error => console.error(error))
  }, [])

  useEffect(url => {
    fetch(repoUrl)
      .then(response => response.json())
      .then(data => data[1])
      .then(repository => {
        setRepos2({
          name: repository.name,
          description: repository.description,
          fork: repository.forks,
          star: repository.stargazers_count,
          tecnologi: repository.language,
          link: repository.html_url
        })
      })

      .catch(error => console.error(error))
  }, [])
  useEffect(() => {
    fetch(repoUrl)
      .then(response => response.json())
      .then(data => {
        setRepositorys(data)
      })
      .catch(error => console.error(error))
  }, [])

  const FirstRepo = () => {
    // const data = repositorys[0]
    // console.log('firstRepo data', data)

    return (
      <div className="project projectOne">
        <div className="nameProject">
          <img src="../public/assets/folder.svg" alt="Ícon Folder" />
          <a href={repo1.link} target="blank">
            {repo1.name}
          </a>
        </div>
        <p>{`${repo1.description}...`}</p>
        <div>
          <div className="infoProject">
            <div className="infoGitHub">
              <div>
                <img src="../public/assets/star-project.svg" alt="Ícon Star" />
                <p>{repo1.star}</p>
              </div>
              <div>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-repo-forked mr-2"
                  stroke="#837E9F"
                  fill="#302f3d"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
                <p>{repo1.fork}</p>
              </div>
            </div>

            <div className="projectTec">
              <p className={repo1.tecnologi}></p>
              <p>{repo1.tecnologi}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SecondRepo = () => {
    // const data = repositorys[0]
    // console.log('secondRepo data', data)
    return (
      <div className="project projectTwo">
        <div className="nameProject">
          <img src="../public/assets/folder.svg" alt="Ícon Folder" />
          <a href={repo2.link} target="blank">
            {repo2.name}
          </a>
        </div>
        <p>{`${repo2.description}...`}</p>
        <div>
          <div className="infoProject">
            <div className="infoGitHub">
              <div>
                <img src="../public/assets/star-project.svg" alt="Ícon Star" />
                <p>{repo2.star}</p>
              </div>
              <div>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-repo-forked mr-2"
                  stroke="#837E9F"
                  fill="#302f3d"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
                <p>{repo2.fork}</p>
              </div>
            </div>

            <div className="projectTec">
              <p className={repo2.tecnologi}></p>
              <p>{repo2.tecnologi}</p>
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
        <a href="https://github.com/gabrielsupz" target="blank">
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
