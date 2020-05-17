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
            <div class="home-title__wrapper">
                <div class="home-title">
                    <p class="title-capital__letter">{letter}</p>
                    <p class="title-text">{title}</p>
                </div>
            </div>
        )
    }
}

HomeTitle.defaultProps={
    letter: 'PRODUCT USE',
    title: '产品用途'
}