import './Select.css'
import {useState} from 'react'

function Select({Arcade, Advenced, Pro, onNext, onBack}) {

    const [moneyArcade, setMoneyArcade] = useState(9)
    const [moneyAdvenced, setMoneyAdvenced] = useState(12)
    const [moneyPro, setMoneyPro] = useState(15)
    const [year, setYear] = useState(false)

    function btnToggle() {
                if (year) {
                    setMoneyArcade(9)
                    setMoneyAdvenced(12)
                    setMoneyPro(15)
                } else {
                    setMoneyArcade(moneyArcade * 10)
                    setMoneyAdvenced(moneyAdvenced * 10)
                    setMoneyPro(moneyPro * 10)
                }
                setYear(!year)
            }

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
                        <div className='ABO'>
                            <div className='ARCADE'>
                                <img src={Arcade}></img>
                            </div>
                            <div className='ABO-TXT'>
                                <p><strong>Arcade</strong></p>
                                <p>{moneyArcade}</p>
                            </div>
                        </div>
                        <div className='ABO'>
                            <div className='ADVANCED'>
                                <img src={Advenced}></img>
                            </div>
                            <div className='ABO-TXT'>
                                <p><strong>Arcade</strong></p>
                                <p>{moneyAdvenced}</p>
                            </div>
                        </div>
                        <div className='ABO'>
                            <div className='PRO'>
                                <img src={Pro}></img>
                            </div>
                            <div className='ABO-TXT'>
                                <p><strong>Arcade</strong></p>
                                <p>{moneyPro}</p>
                            </div>
                        </div>
                    </div>
                    <div className='SELECT-TOGGLE-SWITCH'>
                        <p>Monthly</p>
                        <div className='TOGGLE-BTN'>
                            <label class="switch">
                            <input type="checkbox" onClick={btnToggle}></input>
                            <span class="slider round"></span>
                            </label>
                        </div>
                        <p>Yearly</p>
                    </div>
                    <div className='SELECT-BTNS'>
                        <button className='back' onClick={onBack}>Go Back</button>
                        <button className='next' onClick={onNext} >Next steps</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Select

