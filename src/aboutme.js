import React from "react";
import './landingPage.css';
import babe from './assets/babe.png';
import imgicon from './assets/imgicon.png';

function App() {
    return (
        <div>
            <div className="contain223">
                <div>
                    <p className="pfpp">Profile photo</p>
                    <p className="pfp2">This image will be displayed<br />on your profile</p>
                    <div className="ner3">
                        <img src={imgicon} className="imgic"/>
                    <p className="ddd">Change Photo</p>
                    </div>
                </div>
                <div>
                    <img className="babe" src={babe}/>
                </div>
            </div>
            <p className="divie"></p>
            <div className="personal">
                <div style={{ display: 'block' }}>
                    <p className="cc">Personal Information</p>
                    <p className="ccc">Please update your personal details here.</p>
                    <p className="sc">
                        <p className="scb">Save Changes</p>
                    </p>
                </div>
                <div style={{ display: 'block' }}>
                    <div className="container223">
                        <div className='container234'style={{marginTop:'-20px'}}>
                            <p className="fn">First Name</p>
                            <input className="ooui" />
                        </div>
                        <div className='container234' style={{marginTop:'-20px'}}>
                            <p className="fn">Last Name</p>
                            <input className="ooui" />
                        </div>
                    </div>
                    <div className='container234'>
                        <p className="fn">Email address</p>
                        <input className="oou" style={{width:'566px', backgroundColor:'#D0D5DD'}}/>
                    </div>
                    <div className='container234'>
                        <p className="fn">Government Number</p>
                        <input className="oou" style={{width:'566px'}} />
                    </div>
                    <div className='container234'>
                        <p className="fn">Address</p>
                        <input className="oou" style={{width:'566px'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
