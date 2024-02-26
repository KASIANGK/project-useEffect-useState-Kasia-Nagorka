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

  function nextComponent() {
    setCurrentComponent(currentComponent + 1)
  };

  function prevComponent() {
    setCurrentComponent(currentComponent - 1)
  };

  function renderComponent () {
    switch (currentComponent) {
      case 0:
        return <Personal onNext={nextComponent} />
      case 1:
        return <Select onNext={nextComponent} onBack={prevComponent} Arcade={Arcade} Advenced={Advenced} Pro={Pro} />
      case 2:
        return <Pick onNext={nextComponent} onBack={prevComponent} />
      case 3:
        return <Summary onBack={prevComponent} />
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

