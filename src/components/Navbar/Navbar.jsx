import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
// import { userContext } from '../../App';
import { loginContext , userContext ,
  // NameContext
} from '../../App';

function Navbar() {
  
  const login = useContext(loginContext)
  const user = useContext(userContext)

  // const Name         = useContext(NameContext) 

  return (
        <nav>
                <Link to="/Auth" >Account</Link>
                <Link to="/" >Home</Link>
                <Link to="/Posts" >posts</Link>
                {/* <Link to="/Account" >my Acc</Link>  */}
        </nav>
  )
}

export default Navbar