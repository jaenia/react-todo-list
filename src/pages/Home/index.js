import React from 'react'

import Header from '../../components/presentional/Header'
import TodoListApp from '../../components/containers/TodoListApp'

function Home() {
  return (
    <>
      <Header />
      <TodoListApp />
    </>
  )
}

export default Home