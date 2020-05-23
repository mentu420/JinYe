import React, { Component } from 'react'


export default class VerticalSpace extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { height } = this.props
        return (
            <div className="space" style={{ height: height }}></div>
        )
    }
}

VerticalSpace.defaultProps = {
    height: '2rem'
}