import React from 'react';
import image100 from './assets/image100.png';
import undrawn from './assets/undrawn.png';
import { NavLink } from 'react-router-dom';

function App() {
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <img src={image100} style={{ width: '700px', height: '1024px' }} />
            </div>
            <div style={{display:'block', paddingTop:'228px', paddingLeft:'76px'}}>
                <img src={undrawn} style={{width:'130.77px', height:'179px', paddingLeft:'279px' }}/>
                < p style={{fontSize:'35.01px', fontWeight:'400', paddingLeft:'200px', marginTop:'15px'}}>Login Successfully</p>
                <p style={{fontWeight:'400', fontSize:'20.72', color:'#A59696', marginTop:'-25px', marginLeft:'190px'}}>your account has been login successful, in order to</p>
                <NavLink to={'/nextland'}>
                    <button className='buttonz'>
                <div style={{ marginLeft:'54px',textAlign: 'center', lineHeight: '50px', borderRadius: '6px', fontSize: '16px', width: '580px', marginTop: '30px', height: '56px', backgroundColor: '#2F945C', color: '#ffffff', fontWeight: '800', fontSizeAdjust: '14px', fontFamily:'Neue Machina' }}>
                    proceed to continue shopping
                </div>
                </button>
                </NavLink>
            </div>
        </div>
    );
}

export default App;
