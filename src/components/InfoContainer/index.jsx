import React, { Component } from 'react'
import Search from '../Search'
import Main from '../Main'


export default class index extends Component {
    render() {
        return (
            <div className="container mx-auto pt-3">
                <Search/>
                <Main />
            </div>
        )
    }
}
