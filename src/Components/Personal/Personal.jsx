import { useState } from 'react';
import './Personal.css';

function Personal({Sidebar}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <div className='PERSONAL'>
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
            <div className='PERSONAL-INFOS'>
                <div className='PERSONAL-CONTENT'>
                    <div className='PERSONAL-TITLE'>
                        <h1>Personal info</h1>
                        <p>Please provide your name, email address, and phone number.</p>
                    </div>
                    <div className='PERSONAL-INPUT'>
                        <p><strong>Your name is : </strong>{name}</p>
                        <input placeholder='Vingt-Six' type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                        <p><strong>Your email is : </strong>{email}</p>
                        <input placeholder='vingt-six@email.com' type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <p><strong>Your phone number is : </strong>{phoneNumber}</p>
                        <input placeholder='e.g. +1 234 567 890' type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>
                    <div className='PERSONAL-BTN'>
                        <button>Next Step</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personal

