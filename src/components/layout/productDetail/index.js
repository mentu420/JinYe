import React, { Component } from 'react'
import { Container, Row, Col, Image, Pagination } from 'react-bootstrap'

import './index.scss'
import banner from 'assets/images/product_banner.jpg'

export default class index extends Component {
    render() {
        return (
            <div>
                <Image src={banner} fluid />
            </div>
        )
    }
}
