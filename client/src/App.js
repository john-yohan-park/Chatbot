import React from 'react'
import Image from './Chatbot/Sections/Image'
import logo from './logo.jpg'
import {Typography} from 'antd'
import Chatbot from './Chatbot/Chatbot'
const {Title} = Typography

function App() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <Title level={2}>Cora&nbsp;</Title>
        <Image src={logo} width={40} height={40} mode='fit'/> 
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Chatbot/>
      </div>
    </div>
  )// return
}// app

export default App