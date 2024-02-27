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
  const [choice, setChoice] = useState('monthly');
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const [subscriptions, setSubscriptions] = useState([]); 


  const handleSubscriptionClick = (subscriptionName, subscriptionPrice) => {
      
      const subscription = {
          name: subscriptionName,
          price: year ? subscriptionPrice * 10 : subscriptionPrice 
      };

      setSelectedSubscription(subscription);
      setSelectedDiv(selectedDiv);

      setSubscriptions([...subscriptions, subscription])

      console.log(subscription)
  }
  
  
  const [total, setTotal] = useState(0); 

  

  const handleNext = (subscription) => {
    setSelectedSubscription(subscription);
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
        return <Select handleSubscriptionClick={handleSubscriptionClick}
        choice={choice} setChoice={setChoice} onNext={nextComponent} handleNext={handleNext} onBack={prevComponent} toggleYear={toggleYear} 
      moneyArcade={moneyArcade} moneyAdvenced={moneyAdvenced} moneyPro={moneyPro} Arcade={Arcade} Advenced={Advenced} Pro={Pro} />
      case 2:
        return <Pick subscriptions={subscriptions} setSubscriptions={setSubscriptions}
        handleSubscriptionClick={handleSubscriptionClick} onNext={nextComponent} onBack={prevComponent} year={year}
          moneyArcade={moneyArcade} moneyAdvenced={moneyAdvenced} moneyPro={moneyPro}
        />
      case 3:
        return <Summary  handleSubscriptionClick={handleSubscriptionClick} setSubscriptions={setSubscriptions}
        subscriptions={subscriptions}
        setSelectedSubscription={setSelectedSubscription}
        selectedSubscription={selectedSubscription} 
        total={total} choice={choice} onBack={prevComponent} 
        moneyAdvenced={moneyAdvenced} moneyArcade={moneyArcade} moneyPro={moneyPro}/>
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

