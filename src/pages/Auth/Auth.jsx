import React, { useContext, useState } from 'react'
import './Auth.css'
import Up from './components/up/Up'
import In from './components/in/In';
import { loginContext, setloginContext ,logingContext, setlogingContext, userContext } from '../../App';
import Login from './components/up/Login';



function Auth() {

  const login = useContext(loginContext)
  const loging = useContext(logingContext)
  const setlogin = useContext(setloginContext)

  const [logOrup, setlogOrup] = useState(0);
  
  return (
    <div>
      {/* <button onClick={ () => {login ? setlogin(0) : setlogin(1)} }>change login</button> */}
      {
login ? <In /> : loging ? <Login /> : <Up />

      }
    </div>
  )
}

export default Auth