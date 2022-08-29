import { useState } from 'react'
import './css/aside.css'


function Aside() {
  const [count, setCount] = useState(0)

  return (
   <aside>
    <div className='profile'>
    <p  className='profilePic'   />
      <h1>Gabriel Suptitz</h1>
      <h2>Novice Developer</h2>
    </div>
    <div className='contact'>
      <ul>
        <li  id='contactFrase'> <img src="../public/assets/star.svg" alt="Ícon star" /><a>Contato</a></li>
      <li> <img src="../public/assets/map-pin.svg" alt="Ícon map" /> <a href='https://goo.gl/maps/afDMc9DMK3PzCMoB8'>Sapiranga do RS, Brasil</a> </li>

      <li><img src="../public/assets/linkedin.svg" alt="Ícon linkedin" /><a href='https://www.linkedin.com/in/gabriel-suptitz-51340124a/'>Gabriel Suptitz </a> </li>
      <li><img src="../public/assets/github.svg" alt="Ícon github" /><a href='https://github.com/SuptitzGabriel'>SuptitzGabriel</a> </li>
      <li><img src="../public/assets/instagram.svg" alt="Ícon instagram" /><a href='https://www.instagram.com/gabriel_supz/'>gabriel_supz</a></li>
      <li><img src="../public/assets/mail.svg" alt="Ícon" /><a
      href='mailto:gabrielsuptitz@gmail.com'>gabrielsuptitz@gmail.com</a></li>

      
      </ul>
    </div>
    <div className='exp'><p>Experiência</p></div>
    <div className='tec'><p>Tecnologias</p></div>
    <div className='education'><p>Educação</p></div>
   </aside>
  )
}

export default Aside
