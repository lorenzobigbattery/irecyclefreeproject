import React, {useState, useEffect} from 'react'
import './LoginRegister.css'

function LoginRegister() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsUserLoggedIn(!isUserLoggedIn)
    } 

    return (
        <React.Fragment className='loginregistercontainer'>

            {isUserLoggedIn ? (<div className='login'>
                <p>
                    You are already logged in as USERNAMEHERE
                </p>
                <button className='myButton' onClick={(e)=>{handleLogin(e)}}>LOG OUT</button>
            </div>) : (<form className='login'>
                    <div> Returning to Save The World?</div>
                    <input placeholder='Login' />
                    <input placeholder='Password' />
                    <button className='myButton' onClick={(e)=>{handleLogin(e)}} >Login</button>
            </form>)}

            {isUserLoggedIn ? (<div className='register'>
                <p>
                    You are already logged in as USERNAMEHERE
                </p>
                <button className='myButton' onClick={(e)=>{handleLogin(e)}}>LOG OUT</button>
            </div>) : (<form className='register'>
                    <div>1st Time Saving The World?</div>
                    <input placeholder='Email' />
                    <input placeholder='Password' />
                    <input placeholder='First Name' />
                    <input placeholder='Last Name' />
                    <input placeholder='Address 1' />
                    <input placeholder='Address 2' />
                    <input placeholder='Zip Code' />
                    <button className='myButton' onClick={(e)=>{handleLogin(e)}} >Register!</button>
            </form>)}

        </React.Fragment>
    )
}

export default LoginRegister











