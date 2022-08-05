import React from 'react';
import './Formss.css'

const Formss = () => {
    return (
        <div className='header'>

            <form>
                <p>Name</p>
                <input type="text" name="" id="" placeholder='Enter your name' />
                <p>Email</p>
                <input type="email" name="" id="" placeholder='Enter your email' />
                <p>Password</p>
                <input type="text" name="" id="" placeholder='Enter your password' />
                <p>Link</p>
                <input type="text" name="" id="" placeholder='Enter your link' />
                <br />
                <button>Submit</button>

            </form>
        </div>
    );
};

export default Formss;