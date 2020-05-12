import React, { Component } from 'react'
import defaultImage from '../../../assets/images/img-load.jpg'
import PropTypes from 'prop-types';

import './index.scss'

export default class CardImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        let { src } = this.props
        return (
            <div class="crad-image">
                <img class="crad-image__image" src={src} />
            </div>
        )
    }
}

CardImage.defaultProps = {
    src: defaultImage
}
CardImage.propTypes = {
    src: PropTypes.string,
};