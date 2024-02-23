import './Pick.css'
import {useState} from 'react'

function Pick () {
    return (
        <div className='PICK'>
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
            <div className='PICK-OG'>
                <div className='PICK-CONTENT'>
                    <div className='PICK-TITLE'>
                        <h1>Pick add-ons</h1>
                        <p>Add-ons help enhance your gaming experience.</p>
                    </div>
                    <div className='PICK-CHATBOXES'>
                        <div className='PICKS'>
                            <div className='CHATBOX'>
                                <label class="container">
                                    <input type="checkbox" checked="checked"></input>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div className='PICK-TXT'>
                                <p><strong>Online services</strong></p>
                                <p>Access to multiplayer games</p>
                            </div>
                            <div className='PICK-PRICES'>
                                <p>+$10/yr</p>
                            </div>    
                        </div>
                        <div className='PICKS'>
                            <div className='CHATBOX'>
                                <label class="container">
                                    <input type="checkbox" checked="checked"></input>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div className='PICK-TXT'>
                                <p><strong>Online services</strong></p>
                                <p>Access to multiplayer games</p>
                            </div>
                            <div className='PICK-PRICES'>
                                <p>+$10/yr</p>
                            </div>    
                        </div>
                        <div className='PICKS'>
                            <div className='CHATBOX'>
                                <label class="container">
                                    <input type="checkbox" checked="checked"></input>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div className='PICK-TXT'>
                                <p><strong>Online services</strong></p>
                                <p>Access to multiplayer games</p>
                            </div>
                            <div className='PICK-PRICES'>
                                <p>+$10/yr</p>
                            </div>    
                        </div>
                    </div>
                    <div className='PICK-BTNS'>
                        <button>Go Back</button>
                        <button>Next Stop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Pick