import './App.css';
import React, { createContext, useState } from "react"
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Auth from './pages/Auth/Auth.jsx'
import Posts from './pages/Posts/Posts.jsx'
import Chat from './pages/Chat/Chat.jsx'
import Account from './pages/Account/Account.jsx'
import axios from 'axios';

export const loginContext = createContext(0)
export const logingContext = createContext(0)
export const setloginContext = createContext(0)
export const setlogingContext = createContext(0)
export const usersContext = createContext()
export const setusersContext = createContext()
export const userContext = createContext()
export const setuserContext = createContext()
export const isAdminContext = createContext()
export const setisAdminContext = createContext()

export const IdContext = createContext()
export const NameContext = createContext()
export const mobileContext = createContext()
export const unameContext = createContext()
export const PassContext = createContext()

export const setIdContext = createContext()
export const setNameContext = createContext()
export const setMobileContext = createContext()
export const setunameContext = createContext()
export const setPassContext = createContext()

function App() {

  const [login, setlogin] = useState(0);
  const [loging, setloging] = useState(0);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  const [Id, setId] = useState('');
  const [Name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [uname, setuname] = useState("");
  const [Pass, setPass] = useState("");
  const [isAdmin, setisAdmin] = useState(0);

  

  
  async function Load() {
    try{

      const result = await axios.get(
        "http://localhost:8080/api/v1/user/getAll");
        setUsers(result.data);
        console.log(result.data);
      }
      catch(err){
        console.log(err)
      }
  }

  Load()

  return (
    <>

      <isAdminContext.Provider value={isAdmin} >
      <setisAdminContext.Provider value={setisAdmin} >
      <loginContext.Provider value={login} >
      <logingContext.Provider value={loging} >
        <usersContext.Provider value={users}>
        <setusersContext.Provider value={setUsers}>
        <userContext.Provider value={user}>
        <setuserContext.Provider value={setUser}>
          <IdContext.Provider value={Id}>
            <setIdContext.Provider value={setId}>
              <NameContext.Provider value={Name}>
                <setNameContext.Provider value={setName}>
                  <mobileContext.Provider value={mobile}>
                    <setMobileContext.Provider value={setMobile}>
                      <unameContext.Provider value={uname}>
                        <setunameContext.Provider value={setuname}>
                          <PassContext.Provider value={Pass}>
                            <setPassContext.Provider value={setPass}>
                              <setloginContext.Provider value={setlogin} >
                              <setlogingContext.Provider value={setloging} >

                                <Navbar />

                                <Routes>
                                  <Route path="/" element={<Home />} />
                                  <Route path="/Auth" element={<Auth />} />
                                  <Route path="/Posts" element={<Posts />} />
                                  <Route path="/Chat" element={<Chat />} />
                                  <Route path="/Account" element={<Account />} />
                                </Routes>

                              </setlogingContext.Provider>
                              </setloginContext.Provider>
                            </setPassContext.Provider>
                          </PassContext.Provider>
                        </setunameContext.Provider>
                      </unameContext.Provider>
                    </setMobileContext.Provider>
                  </mobileContext.Provider>
                </setNameContext.Provider>
              </NameContext.Provider>
            </setIdContext.Provider>
          </IdContext.Provider>
        </setuserContext.Provider>
        </userContext.Provider>
        </setusersContext.Provider>
        </usersContext.Provider>
      </logingContext.Provider>
      </loginContext.Provider>
      </setisAdminContext.Provider >
      </isAdminContext.Provider >

    </>
  );
}

export default App;
