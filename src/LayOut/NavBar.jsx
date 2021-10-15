import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {useUserDataContext} from '../Context/userContext'
import {logout} from '../Actions/auth.js'

const NavBar = () => {
    const {user, active} = useUserDataContext()
    return (
        <Fragment>
            <div className="container-fluid mb-5">
                <div className="row justify-content-center text-center">
                    <div className="col-xs-1-12 col-lg-2">
                        {
                            active &&
                            <h1>{user.name}</h1>                            
                        }
                    </div> 
                    <div className="col-xs-1-12 col-lg-2">
                        <Link to='/'>
                            <h1>Home</h1>
                        </Link>
                    </div>  
                    {
                        !active &&
                        <div className="col-xs-1-12 col-lg-2">
                            <Link to='/Auth'>
                                <h1>Login</h1>
                            </Link>
                        </div> 
                    }
                    <div className="col-xs-1-12 col-lg-2">
                        <Link to='/Contact'>
                            <h1>Contact</h1>
                        </Link>
                    </div>
                    <div className="col-xs-1-12 col-lg-2">
                        {
                            active &&
                            <button 
                            onClick={()=>logout()} 
                            className='mt-3'
                            >
                            Logout</button>                           
                        }
                    </div>                  
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar
