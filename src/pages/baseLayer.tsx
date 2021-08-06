import React, { useState, useEffect } from 'react'
// import fun from '@src/common/utils'

// const { urlParamHash, setStorage } = fun

interface Props {
  children: React.ReactNode
}

export default function BaseLayer(props: Props) {
  const [bool, setbool] = useState(false)
  useEffect(() => {
    // init()
    setbool(true)
  }, [])

  // 获取初始化数据
  function init() {
    // const { appId = '' } = urlParamHash()
    // if (appId) {
    //   setStorage('appId', appId)
    //   setbool(true)
    // }
  }

  return <>{bool ? props.children : ''}</>
}
