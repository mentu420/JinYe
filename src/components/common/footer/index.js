import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

import './index.scss'
import logo from 'Assets/images/logo-normal.png'
import QCode from 'Assets/images/WechatIMG4.jpeg'
import CardImage from 'Components/Common/CardImage'

const NAV_LIST = [
    [
        {
            eventKey: -1,
            label: '产品分类',
        },
        {
            eventKey: 0,
            label: '熔喷布加热器',
        },
        {
            eventKey: 1,
            label: '保温炉设备',
        },
        {
            eventKey: 2,
            label: '电阻丝/发热丝',
        },
        {
            eventKey: 3,
            label: '铝合金窑炉配件',
        },
        {
            eventKey: 4,
            label: '镁合金熔炉配件',
        },
        {
            eventKey: 5,
            label: '搪瓷窖炉配件',
        },
        {
            eventKey: 6,
            label: '陶瓷实验炉发热件',
        },
        {
            eventKey: 7,
            label: '窑炉陶瓷配件',
        },
    ],
    [
        {
            eventKey: 0,
            label: '关于金烨',
        },
        {
            eventKey: 1,
            label: '电热元件',
        },
        {
            eventKey: 3,
            label: '陶瓷配件',
        },
        {
            eventKey: 4,
            label: '产品中心',
        },
        {
            eventKey: 5,
            label: '生产实力',
        },
        {
            eventKey: 6,
            label: '金烨动态',
        },
        {
            eventKey: 7,
            label: '联系我们',
        },
    ]
]


export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: NAV_LIST
        }
    }
    render() {
        let { navList } = this.state
        return (
            <div class="footer">
                <Container>
                    <Row>
                        <Col xs={12} md={5} id="footer-nav">
                            <Row>
                                {
                                    navList.map(item => {
                                        return (<Col xs={6} key={item.id}>
                                            <Nav className="flex-column">
                                                {
                                                    item.map(option => {
                                                        return (<Nav.Link bsPrefix="footer-nav__link" {...option}>{option.label}</Nav.Link>)
                                                    })
                                                }
                                            </Nav>
                                        </Col>)
                                    })
                                }
                            </Row>
                        </Col>
                        <Col xs={12} md={7}>
                            <Row>
                                <Col xs={8} sm={4}>
                                    <div class="footer-logo">
                                        <CardImage src={logo}/>
                                    </div>
                                    <div class="footer-qcode">
                                        <CardImage src={QCode} />
                                    </div>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <p class="footer-contact__item">全国服务热线</p>
                                    <p class="footer-contact__item tel"><a href="tel:076922409717 ">0769-22409717 </a></p>
                                    <ul>
                                        <li class="footer-contact__item"><a href="tel:13711995800 ">手机：137 1199 5800</a></li>
                                        <li class="footer-contact__item"><a href="mailto:442717390@qq.com ">邮箱：442717390@qq.com</a></li>
                                        <li class="footer-contact__item">地址：东莞市东城区温塘莞温中路488号</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
