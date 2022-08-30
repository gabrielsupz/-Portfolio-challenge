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
          <div className='nameProject'>
             <img src="../public/assets/folder.svg" alt="Ícon Folder" />
             <a href='https://github.com/SuptitzGabriel/-Portfolio-challenge' target="blank">-Portfolio-challenge</a>
          </div>  
             <p>Desafio da rockeseat,realizado com intuito de aprender mais sobre html e css,feito em react para treino.</p>
          <div>
            <div className='infoProject'>
              <div className='infoGitHub'>  
                <div> 
                  <img src="../public/assets/star-project.svg" alt="Ícon Star" /> 
                  <p>000</p>
                </div>
                <div>
                  <img src="../public/assets/git-branch.svg" alt="Ícon Git Branch" />
                  <p>001</p>
                </div>

               
              </div>
           
              <div className='projectTec'>
                <p className='elipseJs'></p>
                <p>JavaScript</p>
                <p className='elipseHtml'></p>
                <p>HTML</p>
                <p className='elipseCss'></p>
                <p>CSS</p>
              </div>
            </div>
               
             </div>
              </div>
              <div className='project projectTwo'>
          <div className='nameProject'>
             <img src="../public/assets/folder.svg" alt="Ícon Folder" />
             <a href='https://github.com/SuptitzGabriel/NLW-Return-' target="blank">NLW-Return-</a>
          </div>  
             <p>Projeto realizado na NLW Return da Rocketseat com intuito de aprender o básico de html e css, criando um site simples.</p>
          <div>
            <div className='infoProject'>
              <div className='infoGitHub'>  
                <div> 
                  <img src="../public/assets/star-project.svg" alt="Ícon Star" /> 
                  <p>000</p>
                </div>
                <div>
                  <img src="../public/assets/git-branch.svg" alt="Ícon Git Branch" />
                  <p>001</p>
                </div>

               
              </div>
           
              <div className='projectTec'>
              <p className='elipseJs'></p>
                <p>JavaScript</p>
                <p className='elipseHtml'></p>
                <p>HTML</p>
                <p className='elipseCss'></p>
                <p>CSS</p>
              </div>
            </div>
               
             </div>
              </div>
        <div>

      </div>
     </div>
    </div>
    <div className='message'>
      <h3>Mensagem</h3>
    </div>
    <div className='message textMessage'>
<div><p className='messagePic'></p></div>
      

      <p>
       <strong>Olá,Tudo certo✌️ ?</strong>  
       <br />
       <br />
Meu nome é Gabriel Suptitz estou no caminho para me tornar um programador e tentando alcançar sempre um próximo nível 🚀, este é um portifólio feito com base no desafio do discover da Rocketseat!
</p>
       
    </div>
  </main>
  )
}

export default Main
