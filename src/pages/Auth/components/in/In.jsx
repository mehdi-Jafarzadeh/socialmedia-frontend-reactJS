import React, { useContext ,useState, useEffect } from 'react'
import './IN .css'
import { 
loginContext,
setloginContext,
userContext,
usersContext,
setusersContext,
IdContext,
setIdContext,
NameContext,
setNameContext,
mobileContext,
setMobileContext,
unameContext,
setunameContext,
PassContext,
setPassContext,
isAdminContext
} from '../../../../App';
import axios from 'axios';

function In() {


  const login = useContext(loginContext)  
  const setlogin = useContext(setloginContext)  
  const user  = useContext(userContext) 
  const users  = useContext(usersContext) 
  const setUsers  = useContext(setusersContext) 
  const Id           = useContext(IdContext) 
  const setId        = useContext(setIdContext) 
  const Name         = useContext(NameContext) 
  const setName      = useContext(setNameContext)   
  const mobile       = useContext(mobileContext)   
  const setMobile    = useContext(setMobileContext)     
  const uname        = useContext(unameContext)     
  const setuname     = useContext(setunameContext)     
  const Pass         = useContext(PassContext)     
  const setPass      = useContext(setPassContext)     
  const isAdmin      = useContext(isAdminContext)     
 

  async function Deleteuser(userId) {
    await axios.delete("http://localhost:8080/api/v1/user/delete/" + userId);
    // alert("user deleted Successfully");
    // Load();
  }


  async function update(event) {
    event.preventDefault();
    setId("65b29097244ed557ee82840e")
    try {
      await axios.put("http://localhost:8080/api/v1/user/edit/" + Id,
        {

          "name":   Name,
          "pass":   Pass,
          "mobile": mobile,
          "uname":  uname

        });
    }
    catch (err) {
      alert("user Updateddd Failed");
    }
  }

  return (
    <>
    
    <div className='in-inner'>
      
      
      <div className="label">
        <h2>name</h2>
        <h2>username</h2>
        <h2>password</h2>
        <h2>mobile</h2>
      </div>


<form id='signup' onSubmit={update}>
        <input required type="text" placeholder='Full Name' value={Name} onChange={(event) => { setName(event.target.value);   }} />
        <input required type="text" placeholder='Username' value={uname}    onChange={(event) => { setuname(event.target.value);   }} />
        <input required type="text" placeholder='Password' value={Pass} onChange={(event) => { setPass(event.target.value);   }} />
        <input required type="text" placeholder='mobile' value={mobile}   onChange={(event) => { setMobile(event.target.value); }} />
        <button type='submit'> Apply</button><br />
        <button type='submit'onClick={()=>{setlogin(0)}}>log out</button>
      </form>

    </div>
{ isAdmin ?

    <div className="admin-controll">
      <table>
          <tr>
            <th>name</th>
            <th>username</th>
            <th>id</th>
            <th>mobile</th>
            <th>pass</th>
            <th>action</th>
          </tr>
       {
        users.map(e => 
          <tr>                   
             <td>{e.name}</td>
             <td>{e.uname}</td>
             <td>{e.id}</td>
             <td>{e.mobile}</td>
             <td>{e.pass}</td>
             <td>
              {/* <button>edit</button> */}
              <button onClick={()=>{Deleteuser(e.id)}}>delete</button>
             </td>
          </tr>
        )
      } 
      </table>
    </div>
    
    : <></> }
    </>
  )
}

export default In