import './Pick.css'

function Pick() {
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
                    <div className='SELECT-CHOICE'>
                        <div className='ABO'>
                            <div className='ARCADE'>
                                <img src={Arcade}></img>
                            </div>
                            <div className='ABO-TXT'>
                                <p><strong>Arcade</strong></p>
                                <p>$9/mo</p>
                            </div>
                        </div>
                        <div className='ABO'>
                            <div className='ADVANCED'>
                                <img src={Arcade}></img>
                            </div>
                            <div className='ABO-TXT'>
                                <p><strong>Arcade</strong></p>
                                <p>$9/mo</p>
                            </div>
                        </div>
                        <div className='ABO'>
                            <div className='PRO'>
                                <img src={Arcade}></img>
                            </div>
                            <div className='ABO-TXT'>
                                <p><strong>Arcade</strong></p>
                                <p>$9/mo</p>
                            </div>
                        </div>
                    </div>
                    <div className='SELECT-TOGGLE-SWITCH'>
                        <p>Monthly</p>
                        <p>Button</p>
                        <p>Yearly</p>
                    </div>
                    <div className='SELECT-BTNS'>
                        <div>Go Back</div>
                        <div>Next Stop</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pick