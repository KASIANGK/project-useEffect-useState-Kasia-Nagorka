import { useState, useEffect } from 'react'
import './App.css'
import Personal from './Components/Personal/Personal'
import Select from './Components/Select/Select'
import Pick from './Components/Pick/Pick.jsx'
import Advenced from './assets/advenced.svg'
import Arcade from './assets/arcade.svg'
import Pro from './assets/pro.svg'
import Thankyou from './assets/thankyou.svg'

function App() {


  return (
    
      <div className='ALL'>
        <Personal></Personal>
        {/* <Select Arcade={Arcade}></Select> */}
        {/* <Pick></Pick> */}
      </div>
    
  )
}

export default App
