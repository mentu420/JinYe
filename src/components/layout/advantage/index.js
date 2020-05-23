import React, { Component } from 'react'
import { Container, Row, Col, Image, Pagination } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'
import ModeTitle from 'components/common/modeTitle'
import VerticalSpace from 'components/common/verticalSpace/'

import './index.scss'
import banner from 'assets/images/advantage-banner.jpg'
import banner2 from 'assets/images/advantage_07.jpg'
import banner3 from 'assets/images/advantage_04.jpg'

export default class index extends Component {
    render() {
        return (
            <div>
                <Image src={banner} fluid />
                <VerticalSpace/>
                <ModeTitle letter={'OUR STRENGTHS'} title={'我们的优势'} />
                <VerticalSpace />
                <Container >
                    <Row>
                        <Col id="my-col" md={6} xs={12}>
                            <div className="advantage-bg" >
                                <CardImage src={banner3} />
                            </div>
                        </Col>
                        <Col id="my-col" md={6} xs={12}>
                           <div className="advantage-order__flex">
                                <ul className="advantage-order__list">
                                    <li><span className="iconfont icon-plus"></span>拥有行业目前专业的自动折弯机、大型自动等设备</li>
                                    <li><span className="iconfont icon-plus"></span>用户提高能源利用率，降低搪烧炉运行成本</li>
                                    <li><span className="iconfont icon-plus"></span>打造搪瓷工业炉精品，不断为搪瓷设备进行技术创新</li>
                                </ul>
                           </div>
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace/>
                <Image src={banner2} fluid />
                <VerticalSpace/>
                <Container >
                    <Row>
                        <Col>
                            <div className="advantage-craft">
                                <h3>窑炉电热配件·生产和检测设备，成熟稳定的加工工艺</h3>
                                <p>在制造工业炉电加热元件/组件方面有丰富的经验及资源优势，可以设计并制造任何规格形状的发热元件/组件，供50--1250摄氏度范围内的各类电加热设备使用，并能大程度的控制好元件的表面保护及高温变形。可根据各类工业炉不同的设备类型，温度设计，使用特性，环境气氛，元件结构，性价等级等帮您选择性能的发热材料并提供整体设计方案。</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
