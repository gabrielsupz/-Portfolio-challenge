import { useState } from 'react'
import './styles/main.css'

function Main() {
  const [count, setCount] = useState(0)

  return (
  <main>
    <div  className='myProject'>
      <h3>My Projects</h3>
      <a href="https://github.com/SuptitzGabriel" target="blank">Veja todos</a>
    </div>
    <div className='projects'>
      <div>
          <div className='project projectOne'>
            <h4>-Portfolio-challenge</h4>
            {/* <img src="../public/assets/folder.svg" alt="Ícon Folder" /> */}
          <p>Desafio da rockeseat,realizado com intuito de aprender mais sobre html e css,feito em react para treino.</p>
          <div>
            <div>
            {/* <img src="../public/assets/git-branch.svg" alt="Ícon Git Branch" /> */}
            <p>1</p>
            {/* <img src="../public/assets/star.svg" alt="Ícon Star" /> */}
            <p>1</p>
            </div>
            <p></p>
          </div>
        </div>
        <div className='project projectTwo'>
            <h4>-Portfolio-challenge</h4>
            {/* <img src="../public/assets/folder.svg" alt="Ícon Folder" /> */}
          <p>Desafio da rockeseat,realizado com intuito de aprender mais sobre html e css,feito em react para treino.</p>
          <div>
            <div>
            {/* <img src="../public/assets/git-branch.svg" alt="Ícon Git Branch" /> */}
            <p>1</p>
            {/* <img src="../public/assets/star.svg" alt="Ícon Star" /> */}
            <p>1</p>
            </div>
            <p></p>
          </div>
        </div>
      <div>

      </div>
          </div>
    </div>
    <div className='recentPost'>
      <h3>Recent Posts</h3>
    </div>
    <div className='post'></div>
  </main>
  )
}

export default Main
