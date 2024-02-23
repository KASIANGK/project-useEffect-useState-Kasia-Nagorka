import './Personal.css'

function Personal({Sidebar}) {
    return (
        <div className='PERSONAL'>
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
            <div className='PERSONAL-INFOS'>

            </div>
        </div>
    )
}

export default Personal