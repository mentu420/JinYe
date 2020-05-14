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
    scrollToAnchor = (e) => {
        // 找到锚点
        let anchorElement = document.querySelectorAll('.home-item');
        let clientHeight = document.body.clientHeight
        let n = parseInt(e.pageY / clientHeight)
        n = n == 0 ? 1 : n
        if (n >= anchorElement.length) {
            //滚动到footer
            let homeElement = document.querySelector('.home-content')
            let height = parseInt(window.getComputedStyle(homeElement).height)
            window.scroll({ top: height + clientHeight, left: 0, behavior: 'smooth' });
            return
        }
        // 如果对应id的锚点存在，就跳转到锚点
        anchorElement[n].scrollIntoView({ block: 'start', behavior: 'smooth' })

    }
    render() {
        let { clientHeight } = this.state
        console.log(clientHeight)

        return (
            <div class="home-content">
                <div class="home-item">
                    <Carousel>
                        <Carousel.Item>
                            <div class="banner">
                                <CarImage />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div class="home-item" style={{ minHeight: clientHeight }}>
                    <Container fluid>
                        <Row>
                            <Col lg={{ span: 5, offset: 1 }} md={12}>
                                <div class="item-product__title">
                                    <p>BEST SELLER</p>
                                    <h1>BEST SELLING LIST</h1>
                                </div>
                                <h3 >畅销榜单</h3>
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
                                    <div class="produt-right__title">
                                        <h3>熔喷布加热器</h3>
                                    </div>
                                    <Button variant="light">了解详情</Button>
                                </div>
                                <div class="item-product__bg">
                                    <CarImage />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="home-item" style={{ minHeight: clientHeight }}>
                    <div>
                        <p>PRODUCT USE</p>
                        <p>产品用途</p>
                    </div>
                    <div></div>
                </div>
                <div class="home-item" style={{ minHeight: clientHeight }}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <div>4文案</div>
                            </Col>
                            <Col>
                                <div>图片</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="home-item" style={{ minHeight: clientHeight }}>
                    <div>5背景图</div>
                    <div>恒于心 专与质</div>
                </div>
                <div class="home-item" style={{ minHeight: clientHeight }}>
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
                <div class="home-nav__down" onClick={(e) => this.scrollToAnchor(e)}>
                    <span class="iconfont icon-down"></span>
                </div>
            </div>
        )
    }
}
