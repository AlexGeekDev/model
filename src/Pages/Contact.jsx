import React, { Fragment } from 'react'
import {useUserDataContext} from '../Context/userContext'

const Contact = () => {
    const {user, active} = useUserDataContext()
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xs-1-12">
                        {
                            active ?
                            <h1> {`Contacto para ${user.name}`} </h1>
                            :
                            <h1> Inicia Sesión para el Contacto </h1>
                        }
                    </div>                    
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
