import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import * as Api from 'api/'
import { withRouter } from "react-router-dom";

import './index.scss'
import logo from 'assets/images/logo-normal.png'
import QCode from 'assets/images/WechatIMG4.jpeg'
import CardImage from 'components/common/cardImage'


const NAV_LIST = [
    {
        title: '产品分类',
        list: []
    },
    {
        title: '关于金烨',
        list: [
            {
                eventKey: 0,
                label: '电热元件',
            },
            {
                eventKey: 1,
                label: '陶瓷配件',
            },
            {
                eventKey: 2,
                label: '产品中心',
            },
            {
                eventKey: 3,
                label: '生产实力',
            },
            {
                eventKey: 4,
                label: '金烨动态',
            },
            {
                eventKey: 5,
                label: '联系我们',
            },
        ]
    }

]


class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: NAV_LIST
        }
    }
    componentDidMount() {
        let { navList } = this.state
        let [product, about] = navList
        console.log(product, about)
        Api.getCategory({ type: 2 }).then(res => {
            this.setState({
                navList: [
                    { ...product, list: res.map((item, index) => ({ ...item, eventKey: index, label: item.title })) },
                    about
                ]
            })
        }).catch(err => {
            console.log(err)
        })
    }
    onSelect = (option) => {
        console.log(this.props.history)
    }
    render() {
        let { navList } = this.state
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col xs={12} md={5} id="footer-nav">
                            <Row>
                                {
                                    navList.map((item, index) => {
                                        let { list } = item
                                        return (<Col xs={6} key={index}>
                                            <Nav className="flex-column">
                                                <label className="footer-nav__title">{item.title}</label>
                                                {
                                                    list.map(option => {
                                                        return (<Nav.Link onSelect={() => this.onSelect(option)} key={option.label} bsPrefix="footer-nav__link" {...option}>{option.label}</Nav.Link>)
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
                                    <div className="footer-logo">
                                        <CardImage src={logo} />
                                    </div>
                                    <div className="footer-qcode">
                                        <CardImage src={QCode} />
                                    </div>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <p className="footer-contact__item">全国服务热线</p>
                                    <p className="footer-contact__item tel"><a href="tel:076922409717 ">0769-22409717 </a></p>
                                    <ul>
                                        <li className="footer-contact__item"><a href="tel:13711995800 ">手机：137 1199 5800</a></li>
                                        <li className="footer-contact__item"><a href="mailto:442717390@qq.com ">邮箱：442717390@qq.com</a></li>
                                        <li className="footer-contact__item">地址：东莞市东城区温塘莞温中路488号</li>
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

export default withRouter(Footer)