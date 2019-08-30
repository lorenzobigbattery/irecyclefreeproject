import React, { useState, useEffect } from 'react'
import './LoginRegisterPage.css'
import { Link } from 'react-router-dom'

function LoginRegisterPage() {

    const [loginRegisterToggle, setLoginRegisterToggle] = useState(false)

    const toggleLoginRegister = (e) => {
        e.preventDefault();
        setLoginRegisterToggle(!loginRegisterToggle)
    }

    return (
        <div className='loginregisterpage'>
            { loginRegisterToggle ? (<form>
                <label>Register</label>
                <input placeholder='First Name' />
                <input placeholder='Last Name' />
                <input placeholder='Email Name' />
                <input placeholder='Password' />
                <button>Register now!</button>
                <button onClick={(e)=>{ toggleLoginRegister(e) }}>Already have an account?</button>
                <Link to='/'>Back to Home Page</Link>
            </form>) : (<form>
                <label>Login:</label>
                <input placeholder='Email' />
                <input placeholder='Password' />
                <button>Login</button>
                <button onClick={(e)=>{ toggleLoginRegister(e) }}>Don't have an account?</button>
                <Link to='/'>Back to Home Page</Link>
            </form>) }
        </div>
    )
}

export default LoginRegisterPage
