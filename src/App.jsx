import { useState, useEffect } from 'react'
import './App.css'
import Personal from './Components/Personal/Personal'
import Select from './Components/Select/Select'
import Pick from './Components/Pick/Pick'
import Summary from './Components/Summary/Summary'
import Advenced from './assets/advenced.svg'
import Arcade from './assets/arcade.svg'
import Pro from './assets/pro.svg'
import Thankyou from './assets/thankyou.svg'

function App() {


  return (
    
      <div className='ALL'>
        <Personal></Personal>
        {/* <Select Arcade={Arcade} Advenced={Advenced} Pro={Pro}></Select> */}
        {/* <Pick></Pick> */}
        {/* <Summary></Summary> */}
      </div>
    
  )
}

export default App
