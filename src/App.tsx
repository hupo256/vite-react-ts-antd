import React, { useState } from 'react'
import logo from './logo.svg'
import praseImg from '@/static/1@2x.png'
import styles from './mless.module.less'

const defaultImg = 'http://img.inbase.in-deco.com/crm-saas/img/games/default/';

function App() {
  const [count, setCount] = useState(0)

  function touchNum(){
    setCount(count + 1)
  }

  return (
    <div className={styles.mainBox}>
      <p>Hello Vite + React!</p>
      <h3 onClick={touchNum}>this is my father's world * {count}</h3>
      <img src={logo} alt=""/>
      <img src={praseImg} alt=""/>
      <img src={`${defaultImg}wheelIcon.png`} alt=""/>
    </div>
  )
}

export default App
