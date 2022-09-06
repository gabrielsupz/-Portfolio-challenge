import { useState, useEffect } from 'react'

import React from 'react'
import Aside from './pieces/aside/aside'
import Main from './pieces/main/main'

const App = () => {
  const url = 'https://api.github.com/users/gabrielsupz'
  const [user, setUser] = useState({ name: '', avatar: '', login: '' })
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
          repo: data.repos_url
        })
      })
  }, [])
  return (
    <div className="page">
      <Aside user={user} />
      <Main user={user} />
    </div>
  )
}
export default App
