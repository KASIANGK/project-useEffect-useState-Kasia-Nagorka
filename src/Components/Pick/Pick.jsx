import './Pick.css';
import { useState } from 'react';

function Pick({ onBack, onNext, year}) {
    const [isChecked, setIsChecked] = useState(false)
    const [isCheckedTwo, setIsCheckedTwo] = useState(false)
    const [isCheckedThree, setIsCheckedThree] = useState(false)


// affichage ternaire pour annee sinon mois
    const onlineService = year ? 10 : 1
    const largerStorage = year ? 20 : 2
    const customizableProfile = year ? 20 : 2


// cocher, decocher checkbox
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleCheckboxChangeTwo = () => {
        setIsCheckedTwo(!isCheckedTwo)
    }
    const handleCheckboxChangeThree = () => {
        setIsCheckedThree(!isCheckedThree)
    }

    // const checkValue = () => {

    // }

    return (
        <div className='PICK'>
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
            <div className='PICK-OG'>
                <div className='PICK-CONTENT'>
                    <div className='PICK-TITLE'>
                        <h1>Pick add-ons</h1>
                        <p>Add-ons help enhance your gaming experience.</p>
                    </div>
                    <div className='PICK-CHATBOXES'>
                        <div className='PICKS'>
                            <div className='CHATBOX'>
                                <label className="container">
                                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className='PICK-TXT'>
                                <p><strong>Online services</strong></p>
                                <p>Access to multiplayer games</p>
                            </div>
                            <div className='PICK-PRICES'>
                                <p>{onlineService}</p>
                            </div>    
                        </div>
                        <div className='PICKS'>
                            <div className='CHATBOX'>
                                <label className="container">
                                    <input value="#ff0000" type="checkbox" checked={isCheckedTwo} onChange={handleCheckboxChangeTwo} />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className='PICK-TXT'>
                                <p><strong>Larger Storage</strong></p>
                                <p>Access to multiplayer games</p>
                            </div>
                            <div className='PICK-PRICES'>
                                <p>{largerStorage}</p>
                            </div>    
                        </div>
                        <div className='PICKS'>
                            <div className='CHATBOX'>
                                <label className="container">
                                    <input type="checkbox" checked={isCheckedThree} onChange={handleCheckboxChangeThree}></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className='PICK-TXT'>
                                <p><strong>Customizable Profile</strong></p>
                                <p>Access to multiplayer games</p>
                            </div>
                            <div className='PICK-PRICES'>
                                <p>{customizableProfile}</p>
                            </div>    
                        </div>
                    </div>
                    <div className='PICK-BTNS'>
                        <button className='back' onClick={onBack}>Go Back</button>
                        <button className='next' onClick={onNext} >Next steps</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Pick