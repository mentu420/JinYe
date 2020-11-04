import React, { Component } from 'react'
import PropTypes from 'prop-types';
import defaultImage from 'assets/images/img-load.jpg'

import './index.scss'

export default class CardImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reveal: false,
        }
    }

    revealDetaultImage = () => {
        console.log('图片出错')
        this.setState({ reveal: true })
    }

    render() {
        let { src, fit } = this.props
        let url = !src || this.state.reveal ? defaultImage : src
        return (
            <div className="crad-image">
                <img style={{ objectFit: fit }} className="crad-image__image" src={url} alt="图片" onError={this.revealDetaultImage} />
            </div>
        )
    }
}

CardImage.defaultProps = {
    src: defaultImage,
    fit: 'contain'
}
CardImage.propTypes = {
    src: PropTypes.string,
    fit: PropTypes.string,
};