import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image, Button, Media } from 'react-bootstrap'
import Jsonp from 'jsonp'
import $ from 'jquery'

import CarImage from 'components/common/cardImage'
import ItemTitle from 'components/common/modeTitle'
import CardSlide from 'components/common/CardSlide'
import NewItem from 'components/common/newItem'
import * as Api from 'api/'
//图片
import banner0 from 'assets/images/banner.jpg'
import banner1 from 'assets/images/banner1.jpg'
import banner2 from 'assets/images/banner2.jpg'
import banner3 from 'assets/images/banner3.jpg'
import banner4 from 'assets/images/banner4.jpg'
import bannerVertical0 from 'assets/images/banner_vertical0.jpg'
import bannerVertical1 from 'assets/images/banner_vertical1.jpg'
import bannerVertical2 from 'assets/images/banner_vertical2.jpg'

import productImg0 from 'assets/images/slice-img_06.jpg'
import productImg1 from 'assets/images/slice-img_09.jpg'
import productImg2 from 'assets/images/slice-img_03.jpg'
import userImg0 from 'assets/images/slice-img_14.jpg'
import userImg1 from 'assets/images/slice-img_16.jpg'
import userImg2 from 'assets/images/slice-img_18.jpg'
import aboutImg from 'assets/images/slice-img_24.jpg'
import newImg from 'assets/images/slice-img_27.jpg'


import './index.scss'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientHeight: 814,
            clientWidth: 750,
            useList: [1, 2, 3, 4],
            bannerList: [[banner0, bannerVertical0], [banner1, bannerVertical1], [banner2, bannerVertical2]]
        }
    }
    componentDidMount() {
        this.setState({
            clientHeight: document.body.clientHeight,
            clientWidth: document.body.clientWidth
        })
        Api.getAbout().then(res=>{
            console.log(res)
        })
        Api.getBanner().then(res=>{
            console.log('banner',res)
        })
        // Jsonp('http://106.55.0.171:8083//tools/about.ashx?jsoncallback=', null, (err, data) => {
        //     console.log(err, data)
        // })
        // $.ajax({
        //     type: "get",
        //     url: "http://106.55.0.171:8083/tools/banner.ashx",
        //     dataType: 'jsonp',
        //     jsonp: "jsoncallback",
        //     jsonpCallback: "jsoncallback",
        //     success: function (data) {
        //         console.log(data);
        //     }
        // });
        // $.ajax({
        //     url: "http://106.55.0.171:8083/tools/banner.ashx?jsoncallback=?",
        //     dataType: "jsonp",
        //     beforeSend: function (XMLHttpRequest) {
        //         $("#div_clear").html("正在获取，请稍候...");
        //     },
        //     success: function (data, textStatus) {
        //         $("#div_clear").html("获取值：" + data.result);
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         $("#div_clear").html("获取出错！");
        //     }
        // });
        // $.ajax({
        //     url: "http://106.55.0.171:8083/tools/about.ashx",
        //     // dataType: "jsonp",
        //     beforeSend: function (XMLHttpRequest) {
        //         // $("#div_clear").html("正在获取，请稍候...");
        //     },
        //     success: function (data, textStatus) {
        //         // $("#div_clear").html("获取值：" + data.result);
        //         console.log(data)
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         // $("#div_clear").html("获取出错！");
        //     }
        // });

    }

    scrollToAnchor = (e) => {
        // 找到锚点
        let anchorElement = document.querySelectorAll('.home-item');
        let clientHeight = document.body.clientHeight
        let n = parseInt(e.pageY / clientHeight)
        console.log(e.pageY)
        // console.log(e.pageY)
        // n = n == 0 ? 1 : n

        console.log(anchorElement[n])
        console.log(n)
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
        let { clientHeight, useList, bannerList, clientWidth } = this.state
        console.log(clientHeight)
        let n = clientWidth >= 750 ? 0 : 1
        return (
            <div className="home-content">
                <div>
                    <Carousel>
                        {
                            bannerList.map(item => {
                                return (<Carousel.Item key={item}>
                                    <div className="banner" style={{ height: clientHeight }}>
                                        <CarImage src={item[n]} />
                                    </div>
                                </Carousel.Item>)
                            })
                        }
                    </Carousel>
                </div>
                <div className="home-item flex" style={{ minHeight: clientHeight }}>
                    <div className="item-flex__center">
                        <Container fluid>
                            <Row>
                                <Col lg={{ span: 5, offset: 1 }} md={12}>
                                    <div className="item-product__title">
                                        <p>BEST SELLER</p>
                                        <h1>BEST SELLING LIST</h1>
                                    </div>
                                    <h3 >畅销榜单</h3>
                                    <ul className="item-product__list">
                                        <li>
                                            <div className="product-item__img">
                                                <CarImage src={productImg0} />
                                            </div>
                                            <div className="product-item__title"><span>+</span><label>电热元件</label></div>
                                        </li>
                                        <li>
                                            <div className="product-item__title"><span>+</span><label>陶瓷配件</label></div>
                                            <div className="product-item__img">
                                                <CarImage src={productImg1} />
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <div className="item-product__btn">
                                        <div className="produt-right__title">
                                            <h3>熔喷布加热器</h3>
                                        </div>
                                        <Button variant="light">了解详情</Button>
                                    </div>
                                    <div className="item-product__bg">
                                        <CarImage src={productImg2} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="home-item flex bg-cover" style={{ minHeight: clientHeight, backgroundImage: `url(${banner4})` }}>
                    <div className="item-flex__center">
                        <ItemTitle />
                        <CardSlide />
                    </div>
                </div>
                <div className="home-item flex bg-cover" style={{ minHeight: clientHeight }}>
                    <div className="item-flex__center">
                        <Container fluid>
                            <Row>
                                <Col sm={12} md={7}>
                                    <div className="home-about__title">
                                        <h3>企业简介</h3>
                                        <h4>Company profile</h4>
                                    </div>
                                    <div className="home-about__text">
                                        <p>东莞市金烨电热材料有限公司成立于2012年，公司本着”人性化服务，顾客为先”的宗旨，”诚实待客，信誉为本”的理念,现代化的管理模式，团结向上的精神风貌，孜孜不倦的敬业精神，为广大客户提供优良的产品，完善的服务。严格的交期，完善的服务，与各地众多的客户建立了良好的业务关系，赢得了广大信任和赞许..........</p>
                                        <Button variant="success">了解详情</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-about__img">
                                        <CarImage src={aboutImg} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="home-item flex bg-cover cancel-padding" style={{ minHeight: clientHeight, backgroundImage: `url(${banner3})` }}>
                    {/* <div className="home-cultre__bg"></div> */}
                    <Container>
                        <Row>
                            <Col lg={5} md={7} xs={10}>
                                <div className="home-culture">
                                    <span></span>
                                    <h2>BE DEDICATED</h2>
                                    <h2>TO QUALITY</h2>
                                    <h1>恒于心 专于质</h1>
                                    <p>品  质  来  自  每  一  天  的  坚  持</p>
                                    <Button variant="light">more</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="home-item flex" style={{ minHeight: clientHeight }}>
                    <div className="item-flex__center">
                        <ItemTitle letter={'NEWS INFORMATION'} title={'新闻动态'} />
                        <div>
                            <Container>
                                <Row>
                                    <Col md={7} xs={12}>
                                        <ul className="home-new__list">
                                            <li>
                                                <NewItem />
                                            </li>
                                            <li>
                                                <NewItem />
                                            </li>
                                            <li>
                                                <NewItem />
                                            </li>
                                            <li>
                                                <NewItem />
                                            </li>
                                            <li>
                                                <NewItem />
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md={5} xs={12}>
                                        <div className="home-new__img">
                                            <CarImage src={newImg} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
                <div className="home-nav__down" onClick={(e) => this.scrollToAnchor(e)}>
                    <span className="iconfont icon-down"></span>
                </div>
            </div>
        )
    }
}
