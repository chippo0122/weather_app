import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'

class index extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div style={{display: loading ? 'flex' : 'none'}} className="loading-wrap">
                <i className="loading fas fa-spinner fs-1 text-light"></i>
            </div>
        )
    }
}

export default connect(
    store => ({
        loading: store.loading
    })
)(index)
