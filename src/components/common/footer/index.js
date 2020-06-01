import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import * as Api from 'api/'
import { withRouter } from "react-router-dom";
import textFill from 'constants/textFill'

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
                label: '生产实力',
                pathname: '/advantage'
            },
            {
                eventKey: 1,
                label: '金烨动态',
                pathname: '/newList'
            },
            {
                eventKey: 2,
                label: '联系我们',
                pathname: '/contact'
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
    onSelect = (option, index) => {
        switch (index) {
            case 0:
                this.props.history.push({
                    pathname: '/productList',
                    search: `${option.id}`
                })
                break;
            case 1:
                this.props.history.push({ pathname: option.pathname })
                break;
        }
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
                                                        return (<Nav.Link onSelect={() => this.onSelect(option, index)} key={option.label} bsPrefix="footer-nav__link" {...option}>{option.label}</Nav.Link>)
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
                                    <p className="footer-contact__item ">全国服务热线</p>
                                    <p className="footer-contact__item tel"><a href="tel:076922409717 ">0769-22409717 </a></p>
                                    {
                                        textFill.contactTxt.list.map((item, index) => {
                                            return (<ul className="footer-contact__list" key={index} >
                                                {
                                                    item.map((option, i) => {
                                                        return (<li key={i} className="footer-contact__item">{option}</li>)
                                                    })
                                                }
                                            </ul>)
                                        })
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>广东金烨电热有限公司版权所有 COPYRIGHT @2020</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(Footer)