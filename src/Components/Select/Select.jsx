import Summary from '../Summary/Summary';
import './Select.css';
import { useState } from 'react';

function Select({ Arcade, Advenced, Pro, onNext, onBack, toggleYear, setChoice, choice}) {
    const [moneyArcade, setMoneyArcade] = useState(9);
    const [moneyAdvenced, setMoneyAdvenced] = useState(12);
    const [moneyPro, setMoneyPro] = useState(15);
    const [year, setYear] = useState(false);
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [total, setTotal] = useState(0);
    const [selectedSubscription, setSelectedSubscription] = useState(null);

    const [subscriptions, setSubscriptions] = useState([]); 


    const handleSubscriptionClick = (subscriptionName, subscriptionPrice) => {
        
        const subscription = {
            name: subscriptionName,
            price: subscriptionPrice 
        };

        setSelectedSubscription(subscription);
        setSelectedDiv(selectedDiv);

        setSubscriptions([...subscriptions, subscription])

        console.log(subscription)
    }

    


    function btnToggle() {
        toggleYear()
        if (year) {
            
                    setMoneyArcade(9);
                    setMoneyAdvenced(12);
                    setMoneyPro(15);
                } else {
                    setMoneyArcade(moneyArcade * 10);
                    setMoneyAdvenced(moneyAdvenced * 10);
                    setMoneyPro(moneyPro * 10);
                }
                setYear(!year)
                setChoice(choice === 'monthly' ? 'yearly' : 'monthly');
            }


    // const handleSubscriptionClick = (subscription) => {
    //     setSelectedSubscription(subscription);
    //     setSelectedDiv(selectedDiv); 
    //     console.log(selectedDiv)

    //     console.log(subscription)
    // };
    

    return (
        <div className='SELECT'>
            <div className='STEP-CONTENT'>
                <div className='STEP'>
                    <div className='STEPS'>
                        <div className='STEPS-NUMBER'>
                            <p>1</p>
                        </div>
                        <div className='STEPS_TXT'>
                            <h6>STEP 1</h6>
                            <h3>YOUR INFO</h3>
                        </div>
                    </div>

                    <div className='STEPS'>
                        <div className='STEPS-NUMBER'>
                            <p>2</p>
                        </div>
                        <div className='STEPS_TXT'>
                            <h6>STEP 2</h6>
                            <h3>SELECT PLAN</h3>
                        </div>
                    </div>

                    <div className='STEPS'>
                        <div className='STEPS-NUMBER'>
                            <p>3</p>
                        </div>
                        <div className='STEPS_TXT'>
                            <h6>STEP 3</h6>
                            <h3>ADD-ONS</h3>
                        </div>
                    </div>

                    <div className='STEPS'>
                        <div className='STEPS-NUMBER'>
                            <p>4</p>
                        </div>
                        <div className='STEPS_TXT'>
                            <h6>SUMMARY</h6>
                            <h3>YOUR INFO</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='SELECT-OG'>
                <div className='SELECT-CONTENT'>
                    <div className='SELECT-TITLE'>
                        <h1>Select your plan</h1>
                        <p>You have the option of monthly or yearly billing.</p>
                    </div>
                    <div className='SELECT-CHOICE'>
                        <div className={selectedDiv ? 'selected' : 'ABO'}
                        onClick={() => handleSubscriptionClick("Arcade", moneyArcade)}>
                            <div className='ARCADE'>
                                <img src={Arcade}></img>
                            </div>
                            <div className='ABO-TXT'>
                                <p><strong>Arcade</strong></p>
                                <p>{moneyArcade} </p>
                            </div>
                        </div>
                        <div className={`ABO ${selectedDiv === 'Advanced' ? 'selected' : ''}`} 
                        onClick={() => handleSubscriptionClick("Advanced", moneyAdvenced)}>
                            <div className='ADVANCED'>
                                <img src={Advenced}></img>
                            </div>
                            <div className='ABO-TXT'>
                                <p><strong>Advanced</strong></p>
                                <p>{moneyAdvenced}</p>
                            </div>
                        </div>
                        <div className={`ABO ${selectedDiv === 'Pro' ? 'selected' : ''}`} 
                    onClick={() => handleSubscriptionClick("Pro", moneyPro)}>
                            <div className='PRO'>
                                <img src={Pro}></img>
                            </div>
                            <div className='ABO-TXT'>
                                <p><strong>Pro</strong></p>
                                <p>{moneyPro}</p>
                            </div>
                        </div>
                    </div>
                    <div className='SELECT-TOGGLE-SWITCH'>
                        <p>Monthly</p>
                        <div className='TOGGLE-BTN'>
                            <label className="switch">
                            <input type="checkbox" onClick={btnToggle}></input>
                            <span className="slider round"></span>
                            </label>
                        </div>
                        <p>Yearly</p>
                    </div>
                    <div className='SELECT-BTNS'>
                        <button className='back' onClick={onBack}>Go Back</button>
                        <button className='next' onClick={onNext}>Next steps</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Select

