import React, { useState, useEffect } from 'react'
import styles from './toSay.module.less'

interface Props {
  btnTex: string
  list: number[]
  btnClick?: Function
  say: (msg: string) => void
}

export default function TsSay(props: Props) {
  const { btnTex, list, say } = props
  const [name, setname] = useState('JACK')

  useEffect(() => {
    setname('Smith')
  }, [])

  function btnClick() {
    setname('Smith is first name')
    say('this is my fathers world')
  }

  return (
    <h3 className={styles.titlebox}>
      <span>I am come form h5-sample</span>
      <span>Name: {name}</span>
      <p>{list.join('-')}</p>

      <a onClick={btnClick}>{btnTex || 'wwee'}</a>
    </h3>
  )
}
