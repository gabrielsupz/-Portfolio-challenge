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
      <p>Contato</p>
    </div>
    <div className='exp'><p>Experiência</p></div>
    <div className='tec'><p>Tecnologias</p></div>
    <div className='education'><p>Educação</p></div>
   </aside>
  )
}

export default Aside
