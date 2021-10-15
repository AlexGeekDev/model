import React, { Fragment } from 'react'
import {signInGoogle} from '../../Actions/auth'

const Login = () => {

    const handleSubmit = () => {
        signInGoogle()
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xs-1-12 col-lg-4">
                        <button onClick={()=>handleSubmit()}>Google</button>
                    </div>                    
                </div>
            </div>
        </Fragment>
    )
}

export default Login
