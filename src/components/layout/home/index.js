import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap'

import CarImage from 'Components/Common/CardImage'
import Footer from 'Components/Common/Footer'

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
        let { clientHeight } = this.state
        console.log(clientHeight)
        return (
            <div class="home-content">
                <div class="home-item" >
                    <Carousel>
                        <Carousel.Item>
                            <div class="banner">
                                <CarImage />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div class="home-item" >
                    <Container fluid>
                        <Row>
                            <Col>
                                <div>这里放标题</div>
                            </Col>
                            <Col>
                                <div>这里放按钮</div>
                            </Col>
                        </Row>
                    </Container>
                    <Container >
                        <Row>
                            <Col>
                                <div>这里放产品分类</div>
                            </Col>
                            <Col>
                                <div>这里放图片</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
