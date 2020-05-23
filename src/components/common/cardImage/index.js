import React, { Component } from 'react'
import PropTypes from 'prop-types';
import defaultImage from 'assets/images/img-load.jpg'

import './index.scss'

export default class CardImage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let { src, fit } = this.props
        return (
            <div className="crad-image">
                <img style={{ objectFit: fit }} className="crad-image__image" src={src} alt="图片"/>
            </div>
        )
    }
}

CardImage.defaultProps = {
    src: defaultImage,
    fit: 'cover'
}
CardImage.propTypes = {
    src: PropTypes.string,
    fit: PropTypes.string,
};