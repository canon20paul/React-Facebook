import React from 'react'
import './Navbar.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navbar(){

    return <div>
    
        
        <div className='row nav'>

            <div className='col-md-6'>
                <h1>Facebook</h1>
            </div>

            <div className='col-md-6'>
            
                <input type="text" placeholder='username' />
                <input type="text" placeholder='password' />
                <button>LOGIN</button>

            </div>


        </div>
        
    </div>
}
export default Navbar