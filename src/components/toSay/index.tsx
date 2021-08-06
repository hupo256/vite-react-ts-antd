import React, { useState, useEffect } from 'react'
import priseImg from '@/static/1@2x.png'
import ShowTex from '@/components/showTex'
// import ShowTex from '../showTex'
import styles from './toSay.module.less'

interface Props {
  btnTex: string
  list: number[]
  btnClick?: Function
}

export default function TsSay(props: Props) {
  const { btnTex, list } = props
  const [name, setname] = useState('JACK')

  useEffect(() => {
    setname('Smith')
  }, [])

  function btnClick() {
    setname('Smith is first name')
  }

  return (
    <h3 className={styles.titlebox}>
      <span>I am come form h5-sample</span>
      <span>Name: {name}</span>
      <p>{list.join('-')}</p>
      <ShowTex />
      <img src={priseImg} alt="wer" />
      <a onClick={btnClick}>{btnTex || 'wwee'}</a>
    </h3>
  )
}
