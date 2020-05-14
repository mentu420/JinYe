import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image, Button } from 'react-bootstrap'

import CarImage from 'components/common/cardImage'
import Footer from 'components/common/footer'

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
    onDownClick = () => {
        console.log(1231646)
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
                            <Col lg={{ span: 5, offset: 1 }} md={12}>
                                <div class="item-product__title">
                                    <p>BEST SELLER</p>
                                    <h1>BEST SELLING LIST</h1>
                                </div>
                                <h3 class="list-product__title">畅销榜单</h3>
                                <ul class="item-product__list">
                                    <li>
                                        <div class="product-item__img">
                                            <CarImage />
                                        </div>
                                        <div class="product-item__title"><span>+</span><label>电热元件</label></div>
                                    </li>
                                    <li>
                                        <div class="product-item__title"><span>+</span><label>陶瓷配件</label></div>
                                        <div class="product-item__img">
                                            <CarImage />
                                        </div>
                                    </li>
                                </ul>
                            </Col>
                            <Col>
                                <div class="item-product__btn">
                                    <h3>熔喷布加热器</h3>
                                    <Button variant="light">了解详情</Button>
                                </div>
                                <div class="item-product__bg">
                                    <CarImage />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="home-item" >
                    <div>
                        <p>PRODUCT USE</p>
                        <p>产品用途</p>
                    </div>
                    <div></div>
                </div>
                <div class="home-item" >
                    <Container fluid>
                        <Row>
                            <Col>
                                <div>文案</div>
                            </Col>
                            <Col>
                                <div>图片</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="home-item" >
                    <div>背景图</div>
                    <div>恒于心 专与质</div>
                </div>
                <div class="home-item" >
                    <div>
                        <p>NEWS INFORMATION</p>
                        <p>新闻动态</p>
                    </div>
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    <div>文案</div>
                                </Col>
                                <Col>
                                    <div>图片</div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div class="home-nav__down" onClick={this.onDownClick}>
                    <span class="iconfont icon-down"></span>
                </div>
            </div>
        )
    }
}
