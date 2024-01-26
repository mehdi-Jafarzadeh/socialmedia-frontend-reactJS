import React, { useContext } from 'react'
import './Up.css'
import { setloginContext,setlogingContext,setisAdminContext,setIdContext,NameContext,setNameContext,mobileContext,setMobileContext,unameContext,setunameContext,PassContext,setPassContext, usersContext} from '../../../../App';
import axios from 'axios';

function Login() {

 const setlogin = useContext(setloginContext)  
 const setloging = useContext(setlogingContext)  
 const setId        = useContext(setIdContext) 
 const Name         = useContext(NameContext) 
 const setName      = useContext(setNameContext)   
 const mobile       = useContext(mobileContext)   
 const setMobile    = useContext(setMobileContext)     
 const uname        = useContext(unameContext)     
 const setuname     = useContext(setunameContext)     
 const Pass         = useContext(PassContext)     
 const users         = useContext(usersContext)     
 const setPass      = useContext(setPassContext)     
 const setisAdmin      = useContext(setisAdminContext)     


  

  async function save(event) {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/api/v1/user/save",
        {
          "name": Name,
          "pass": Pass,
          "mobile": mobile,
          "uname": uname
          
        });
        setId(result.data)
        uname == "sm" ? setisAdmin(1) : setisAdmin(0) 
      setlogin(1)
    }
    catch (err) {
      alert("User Registation Failed");
    }
  }


   function login(event) {
    try{
    uname == "sm" ? setisAdmin(1) : setisAdmin(0) 
    uname == "a" ? setisAdmin(0) : setisAdmin(0) 
    setlogin(1)
    }
    catch (err) {
      alert("User login Failed");
    }
  }


  return (
    <div className='auth-container' >


      <form id='signup' onSubmit={login}>
        <input required type="text" placeholder='Username' value={uname}    onChange={(event) => { setuname(event.target.value);   }} />
        <input  type="text" placeholder='Password' value={Pass} onChange={(event) => { setPass(event.target.value);   }} />
        <button type='submit'> login</button><br />
        {/* <button type='submit' onClick={}> sign up</button> */}
        <button type='submit' onClick={()=>(setloging(0))}> sign up</button><br />

      </form>
    </div>
  );
}



export default Login;