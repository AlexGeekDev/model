import React, { Fragment } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'


const LayOut = (props) => {
    return (
        <Fragment>
            <NavBar />
                {props.children}
            <Footer/>
        </Fragment>
    )
}

export default LayOut