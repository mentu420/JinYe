import React, { Component } from 'react'
import './index.scss'

export default class HomeTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            letter: 'PRODUCT USE',
            title: '产品用途'
        }
    }
    render() {
        let { letter, title } = this.props
        return (
            <div className="home-title__wrapper">
                <div className="home-title">
                    <p className="title-capital__letter">{letter}</p>
                    <p className="title-text">{title}</p>
                </div>
            </div>
        )
    }
}

HomeTitle.defaultProps={
    letter: 'PRODUCT USE',
    title: '产品用途'
}