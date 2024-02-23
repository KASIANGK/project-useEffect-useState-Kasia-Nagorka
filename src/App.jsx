import { useState, useEffect } from 'react'
import './App.css'
import Personal from './Components/Personal/Personal'
import Advenced from './assets/advenced.svg'
import Arcade from './assets/arcade.svg'
import Pro from './assets/pro.svg'
import Sidebar from './assets/sidebar.svg'
import Thankyou from './assets/thankyou.svg'

function App() {


  return (
    
      <div className='ALL'>
        <Personal Sidebar={Sidebar} ></Personal>
      </div>
    
  )
}

export default App
