import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Content_header from './components/Content_header'
import Content from './components/Content'
import Soundkits from './components/Soundkits'

const App = () => {
  return (
    <div>
      <Header />
      <Content_header />
      <Content />
      <Soundkits />
    </div>
  )
}

export default App