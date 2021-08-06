import React from 'react'
import ToSay from './components/toSay'

export default function App() {
  return (
    <ToSay btnTex="click WE" list={[12, 232]} say={msg => console.log(msg)} />
  )
}
