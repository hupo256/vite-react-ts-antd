import React, { memo, useState, useEffect, useCallback } from 'react'
import Page from '../page'
// import Page from '@/components/page/index'
import styles from './showTex.module.less'

interface Props {
  say?: (msg: string) => void
  fn: () => void
  [pname: string]: any
}

const ChildComponent = memo((props: Props) => {
  console.log('child render!')
  return <button onClick={props.fn}>showTime</button>
})

export default function Main() {
  const [count, setcount] = useState(0)

  const arr: string[] = []
  const list: Array<number> = []

  const srt = '{"parlor": 0, "toilet": 0, "bedroom": 0, "kitchen": 0, "liveroom": 0}'
  const tex = JSON.parse(JSON.stringify(srt))
  console.log(tex)

  function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length) // Array has a .length, so no more error
    return arg
  }

  const ShowTime = useCallback(() => {
    console.log('now time :' + new Date())
  }, [])

  function toShowTags() {
    const arr: number[] = []
    for (let i: number = 0; i < 100; i++) {
      arr.push(i * 2 + 1)
    }
    return arr
  }

  return (
    <Page title="usecallback">
      <div className={styles.callbox}>
        <h3>index：{count}</h3>
        <button onClick={() => setcount(count + 1)}>increase</button>
        <ChildComponent fn={ShowTime} />

        <p>{toShowTags().join('-')}</p>
      </div>
    </Page>
  )
}
