import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image, Button, Media } from 'react-bootstrap'
import Urls from 'constants/urls'

import CarImage from 'components/common/cardImage'
import ItemTitle from 'components/common/modeTitle'
import SlideCard from 'components/common/slideCard'
import NewItem from 'components/common/newItem'
import VerticalSpace from 'components/common/verticalSpace'
import * as Api from 'api/'
import { DecodeURI } from 'utils/urlCodeHandler/'
//图片
import banner0 from 'assets/images/banner.jpg'
import banner1 from 'assets/images/banner1.jpg'
import banner2 from 'assets/images/banner2.jpg'
import banner3 from 'assets/images/banner3.jpg'
import banner4 from 'assets/images/banner4.jpg'
import bannerVertical0 from 'assets/images/banner_vertical0.jpg'
import bannerVertical1 from 'assets/images/banner_vertical1.jpg'
import bannerVertical2 from 'assets/images/banner_vertical2.jpg'

import productImg0 from 'assets/images/home-product_item1.jpeg'
import productImg1 from 'assets/images/home-product_item2.jpeg'
import productImg2 from 'assets/images/slice-img_03.jpg'
import userImg0 from 'assets/images/slice-img_14.jpg'
import userImg1 from 'assets/images/slice-img_16.jpg'
import userImg2 from 'assets/images/slice-img_18.jpg'
import newImg from 'assets/images/slice-img_27.jpg'


import './index.scss'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientHeight: 814,
            clientWidth: 750,
            useList: [1, 2, 3, 4],
            bannerList: [
                [{ image: banner0 }, { image: banner1 }, { image: banner2 }],
                [{ image: bannerVertical0 }, { image: bannerVertical1 }, { image: bannerVertical2 }]
            ],
            aboutTxt: '',
            aboutImage: '',
            newList: [],
        }
    }
    componentDidMount() {
        this.setState({
            clientHeight: document.body.clientHeight,
            clientWidth: document.body.clientWidth
        })
        Api.getAbout().then(res => {
            let content = DecodeURI(res.content)
            let pattern = new RegExp('<p.*?>(.*?)<\/p>', 'g');
            let str = content.match(pattern)
            console.log('about', str[1])
            console.log('about img', res.cover)
            this.setState({
                aboutImage: res.cover,
                aboutTxt: str[1]
            })
        }).catch(err => {
            console.log(err)
        })
        //获取banner
        Api.getBanner().then(res => {
            let bannerList = [
                [...res.pc],
                [...res.mobile]
            ]
            this.setState({ bannerList })
        }).catch(err => {
            console.log(err)
        })
        //获取产品用途
        Api.getProductUse().then(res => {
            console.log('use', res)
            let useList = res.map(item => ({ ...item, src: item.imgUrl }))
            this.setState({ useList })
        }).catch(err => {
            console.log(err)
        })
        //获取新闻列表
        Api.getNewList({ pageSize: 3 }).then(res => {
            let arr = res.items.map(item => {
                let dateArr = item.date.split('-')
                return {
                    ...item,
                    day: dateArr[2],
                    date: dateArr[0] + '-' + dateArr[1],
                }
            })
            this.setState({ newList: arr })
        }).catch(err => {
            console.log(err)
        })
    }
    goBannerDetail = (item) => {
        if (item.linkUrl == '') return
        this.props.history.push({ pathname: item.linkUrl })
    }
    goAdvantage = () => {
        this.props.history.push({ pathname: '/advantage' })
    }
    goNewDetail = (item, type = null) => {
        let params = type ? `id=${item.id}&channelId=6` : `id=${item.id}`
        this.props.history.push({ pathname: '/newDetail', search: `${params}` })
    }
    goAbout = () => {
        this.props.history.push({ pathname: '/about' })
    }
    goProudctList = (id) => {
        this.props.history.push({
            pathname: `/productList`,
            search: `?${id}`
        })
    }
    //锚点移动
    scrollToAnchor = (e) => {
        // 找到锚点
        let anchorElement = document.querySelectorAll('.home-item');
        let clientHeight = document.body.clientHeight
        let n = parseInt(e.pageY / clientHeight)

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
        let { clientHeight, useList, bannerList, clientWidth, aboutTxt, aboutImage, newList } = this.state
        let n = clientWidth >= 750 ? 0 : 1
        return (
            <div className="home-content">
                <div>
                    <Carousel>
                        {
                            bannerList[n].map(item => {
                                return (<Carousel.Item key={item.image}>
                                    <div className="banner" style={{ height: clientHeight }} onClick={() => this.goBannerDetail(item)}>
                                        <CarImage src={item.image} />
                                    </div>
                                </Carousel.Item>)
                            })
                        }
                    </Carousel>
                </div>
                <div className="home-item flex" style={{ minHeight: clientHeight }}>
                    <div className="item-flex__center fluid-lg">
                        <Container fluid>
                            <Row>
                                <Col lg={{ span: 5, offset: 1 }} md={12}>
                                    <div className="item-product__title">
                                        <p>BEST SELLER</p>
                                        <h1>BEST SELLING LIST</h1>
                                    </div>
                                    <h3 >畅销榜单</h3>

                                    <ul className="item-image__list">
                                        <li onClick={() => this.goProudctList(71)}>
                                            <CarImage fit={"contain"} src={productImg0} />
                                        </li>
                                        <li onClick={() => this.goProudctList(63)}>
                                            <CarImage fit={"contain"} src={productImg1} />
                                        </li>
                                    </ul>
                                    {/* <ul className="item-product__list">
                                        <li onClick={() => this.goProudctList(57)}>
                                            <div className="product-item__img">
                                                <CarImage src={productImg0} />
                                            </div>
                                            <div className="product-item__title"><span>+</span><label>电热元件</label></div>
                                        </li>
                                        <li onClick={() => this.goProudctList(54)}>
                                            <div className="product-item__title"><span>+</span><label>发热管</label></div>
                                            <div className="product-item__img">
                                                <CarImage src={productImg1} />
                                            </div>
                                        </li>
                                    </ul> */}
                                </Col>
                                <Col>
                                    <div className="item-product__btn">
                                        <div className="produt-right__title">
                                            <h3>电炉丝</h3>
                                        </div>
                                        <Button variant="light" onClick={() => this.goProudctList(57)}>了解详情</Button>
                                    </div>
                                    <div className="item-product__bg" onClick={() => this.goProudctList(57)}>
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
                        <div className="home-slide__box">
                            <SlideCard list={useList} hasArrow={clientWidth > 750 && useList.length > 3} cols={clientWidth > 750 ? 3 : 1} renderItem={item => {
                                return (<div className="home-slide__item" onClick={() => this.goNewDetail(item, 1)}>
                                    <div className="slide-item__img">
                                        <CarImage src={item.src} />
                                    </div>
                                    <p>{item.title}</p>
                                </div>)
                            }} />
                        </div>
                    </div>
                </div>
                <div className="home-item flex bg-cover" style={{ minHeight: clientHeight }}>
                    <div className="item-flex__center fluid-lg">
                        <Container fluid>
                            <Row>
                                <Col sm={12} md={7}>
                                    <div className="home-about__title">
                                        <h3>企业简介</h3>
                                        <h4>Company profile</h4>
                                    </div>
                                    <div className="home-about__text">
                                        <p dangerouslySetInnerHTML={{ __html: aboutTxt }}></p>
                                        <Button variant="primary" onClick={this.goAbout}>了解详情</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="home-about__img">
                                        <CarImage src={aboutImage} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                {/* <div className="home-item flex bg-cover cancel-padding" style={{ minHeight: clientHeight, backgroundImage: `url(${banner3})` }}> */}
                <div className="home-item auto" >
                    <CarImage src={banner3} />
                    {/* <Container>
                        <Row>
                            <Col>
                                
                                <div className="home-culture">
                                    <span></span>
                                    <h2>BE DEDICATED</h2>
                                    <h2>TO QUALITY</h2>
                                    <h1>恒于心 专于质</h1>
                                    <p>品  质  来  自  每  一  天  的  坚  持</p>
                                    <VerticalSpace />
                                    <Button variant="light" onClick={this.goAdvantage}>more</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container> */}
                </div>
                <div className="home-item flex" style={{ minHeight: clientHeight }}>
                    <div className="item-flex__center">
                        <ItemTitle letter={'NEWS INFORMATION'} title={'新闻动态'} />
                        <div>
                            <Container>
                                <Row>
                                    <Col lg={7} xs={12}>
                                        <ul className="home-new__list">
                                            {
                                                newList.map(item => {
                                                    return (<li key={item.id} onClick={() => this.goNewDetail(item)}>
                                                        <NewItem item={item} />
                                                    </li>)
                                                })
                                            }
                                        </ul>
                                    </Col>
                                    <Col lg={5} xs={12}>
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
