import React, { Fragment } from 'react'
import {useUserDataContext} from '../../Context/userContext'

const Hero = () => {
    const {user, active} = useUserDataContext()
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row justify-content-center text-center">
                    <div className="col-xs-1-12 col-lg-12">
                        {
                            active ?
                            <h1> {`Bienvenido ${user.name}`} </h1>
                            :
                            <h1> Bienvenido "Inicia Sesión" </h1>
                        }
                    </div>                    
                </div>
            </div>
        </Fragment>
    )
}

export default Hero
