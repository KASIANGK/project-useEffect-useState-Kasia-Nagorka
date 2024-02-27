import './Summary.css'
import { useState } from 'react'

function Summary({onBack, onNext, moneyPro,choice, total, subscription, setSubscriptions, subscriptions,
    setSelectedSubscription}) {
    console.log("choix" + choice)
    console.log("total" + total)
    console.log("money" + moneyPro);


 
    // const handleSubscriptionClick = (subscriptionName, subscriptionPrice) => {
        
    //     const subscription = {
    //         name: subscriptionName,
    //         price: subscriptionPrice 
    //     };

    //     setSelectedSubscription(subscription);
    //     setSelectedDiv(selectedDiv);

    //     setSubscriptions([...subscriptions, subscription])

    //     console.log(subscription)
    //     console.log(subscription.price);
    // }




   
    return (
        <div className='SUMMARY'>
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
            <div className='SUMMARY-OG'>
                <div className='SUMMARY-CONTENT'>
                    <div className='SUMMARY-TITLE'>
                        <h1>Finishing up</h1>
                        <p>Double-check everything looks OK before confirming.</p>
                    </div>
                    <div className='SUMMARY-PRO'>
                        <div className='MONTHLY'>
                            <div className='PRO-MONTHLY'>
                                <p><strong>{choice}</strong></p>
                                <p>Change</p>
                            </div>
                            <div className='PRO-PRICE'>
                                <p> texte a afficher : {}</p>
                            </div>
                        </div>
                        <div className='BARRE'>
                            <p>______________________________</p>
                        </div>
                        <div className='SUMMARY-ONLINE'>
                            <p>Online service</p>
                            <p className='SUMMARY-SERVICES'>+$1/mo</p>
                        </div>
                    </div>
                </div>
                <div className='TOTALLY'>
                    <p>Total (per month)</p>
                    <p>$16/mo</p>
                </div>
                <div className='SUMMARY-BTNS'>
                        <button className='back' onClick={onBack}>Go Back</button>
                        <button className='next' onClick={onNext} >Next steps</button>
                </div>
            </div>
        </div>
    )
}

export default Summary