import React, { Component } from 'react'
import loading from "./Eclipse-1s-200px.gif"

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loading} alt="" />
            </div>  
        )
    }
}
