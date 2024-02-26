import { useState } from 'react'
import './App.css';
import Personal from './Components/Personal/Personal';
import Select from './Components/Select/Select';
import Pick from './Components/Pick/Pick';
import Summary from './Components/Summary/Summary';
import Advenced from './assets/advenced.svg';
import Arcade from './assets/arcade.svg';
import Pro from './assets/pro.svg';
import Thankyou from './assets/thankyou.svg';

function App() {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [moneyArcade, setMoneyArcade] = useState(9)
  const [moneyAdvenced, setMoneyAdvenced] = useState(12)
  const [moneyPro, setMoneyPro] = useState(15)
  const [year, setYear] = useState(false)
  const [selectedSubscription, setSelectedSubscription] = useState('')
  const [choice, setChoice] = useState('monthly');


  
  function selectionAbo(subscriptionType) {
    setSelectedSubscription(subscriptionType)
    setCurrentComponent(currentComponent + 1)
}


  function toggleYear() {
    setYear(!year)
  }
  function nextComponent() {
    setCurrentComponent(currentComponent + 1)
  }

  function prevComponent() {
    setCurrentComponent(currentComponent - 1)
  }

  function renderComponent () {
    switch (currentComponent) {
      case 0:
        return <Personal onNext={nextComponent} />
      case 1:
        return <Select choice={choice} setChoice={setChoice} onNext={(subscription) => selectionAbo(subscription)} onBack={prevComponent} toggleYear={toggleYear} 
      moneyArcade={moneyArcade} moneyAdvenced={moneyAdvenced} moneyPro={moneyPro} Arcade={Arcade} Advenced={Advenced} Pro={Pro} />
      case 2:
        return <Pick onNext={nextComponent} onBack={prevComponent} year={year}
          moneyArcade={moneyArcade} moneyAdvenced={moneyAdvenced} moneyPro={moneyPro}
        />
      case 3:
        return <Summary choice={choice} onBack={prevComponent} selectedSubscription={selectedSubscription}/>
      default:
        return null;
    }
  };

  return (
    <div className='ALL'>
      {renderComponent()}
    </div>
  );
}

export default App

