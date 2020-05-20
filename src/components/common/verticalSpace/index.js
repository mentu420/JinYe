import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class VerticalSpace extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let { height } = this.props
        return (
            <div class="space" style={{height:height}}></div>
        )
    }
}

VerticalSpace.defaultProps={
    height:'2rem'
}