import React, { useState, useEffect } from 'react'
import Page from '@comps/page'
import Usecall from './usecall'
import styles from './ts.module.less'

interface Props {
  history: any
}

export default function TsSay(props: Props) {
  const { history } = props
  const [name, setname] = useState('JACK')

  useEffect(() => {
    setname('Smith')
  }, [])

  function btnClick() {
    setname('Smith is first name')
  }

  return (
    <Page title={`TS`}>
      <h3 className={styles.titlebox}>
        <span>I am come form h5-sample</span>
        <span>Name: {name}</span>
        <Usecall history={history} />

        <a onClick={btnClick}>wwee</a>
      </h3>
    </Page>
  )
}
