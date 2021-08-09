import React, { memo, useState, useEffect, useCallback } from 'react'
import { Button } from 'antd'
import Page from '@comps/page'
import styles from './ts.module.less'

interface hty {
  push(str: string): void
  [pname: string]: any
}

interface mainPro {
  history: hty
}

interface Props {
  say?: (msg: string) => void
  fn: () => void
  [key: string]: any
}

const ChildComponent = memo((props: Props) => {
  console.log('child render!')
  return (
    <Button type="primary" onClick={props.fn}>
      showTime
    </Button>
  )
})

export default function Main(props: mainPro) {
  const { history } = props
  const [count, setcount] = useState(0)

  const ShowTime = useCallback(() => {
    console.log(location.pathname)
    const [, tag] = location.pathname.split('/mkt/')
    const routeKey = tag === 'ts' ? 'usecall' : 'ts'
    history.push(`./${routeKey}`)
  }, [])

  function toShowTags() {
    const arr: number[] = []
    for (let i: number = 0; i < 100; i++) {
      arr.push(i * 2 + 1)
    }
    return arr
  }

  return (
    <Page title="UseCall">
      <div className={styles.callbox}>
        <h3>index：{count}</h3>
        <Button type="primary" onClick={() => setcount(count + 1)}>
          increase
        </Button>
        <ChildComponent fn={ShowTime} />

        <p>{toShowTags().join('-')}</p>
      </div>
    </Page>
  )
}
