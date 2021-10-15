import React, { Fragment } from 'react'
import {LinearProgress} from '@mui/material'

const Loading = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row justify-content-center text-center">
                    <div className="col-xs-1-12">
                        <LinearProgress color="secondary" className='m-5 p-5' />
                        <LinearProgress color="success" className='m-5 p-5' />
                        <LinearProgress color="inherit" className='m-5 p-5' />
                        <h1 className='m-5 p-5 text-primary'>Loading...</h1>
                    </div>                    
                </div>
            </div>
        </Fragment>
    )
}

export default Loading
