import React, { Fragment, useState } from 'react'
import {regEmail} from '../../Actions/auth'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        regEmail(email, password, name)
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xs-1-12 col-lg-4">
                        <form onSubmit={handleSubmit}>
                            <label className='row justify-content-center text-center my-3'>Name
                                <input 
                                    className='mx-3'
                                    type="text"
                                    onChange={(e)=> setName(e.target.value)}
                                />
                            </label>
                            <label className='row justify-content-center text-center my-3'>E-Mail
                                <input 
                                    className='mx-3'
                                    type="text"
                                    onChange={(e)=> setEmail(e.target.value)}
                                />
                            </label>
                            <label className='row justify-content-center text-center my-3'>Password
                                <input 
                                    className='mx-3'
                                    type="text"
                                    onChange={(e)=> setPassword(e.target.value)}
                                />
                            </label>
                            <label className='row justify-content-center text-center my-3'>Repeat Password
                                <input 
                                    className='mx-3'
                                    type="text"
                                    onChange={(e)=> setPassword(e.target.value)}
                                />
                            </label>
                            <div className='row justify-content-center text-center'>
                                <button 
                                    className='w-100'
                                    type='submit'
                                    >Login
                                </button>
                            </div>
                        </form>
                    </div>                    
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp
