import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap'

import Header from 'Components/common/header'
import CarImage from 'Components/common/cardImage'

import './index.scss'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientHeight: 814,
        }
    }
    componentDidMount() {
        this.setState({
            clientHeight: document.body.clientHeight
        })

    }
    render() {
        let { clientHeight} = this.state
        console.log(clientHeight)
        return (
            <div>
                <div class="home-item" >
                    <Carousel>
                        <Carousel.Item>
                            <div class="banner">
                                <CarImage />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        )
    }
}
