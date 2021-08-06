import React, { useEffect } from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

export default function BasicLoay(props: Props) {
  const { title, children } = props
  useEffect(() => {
    document.title = title
  }, [])

  return <>{children}</>
}
