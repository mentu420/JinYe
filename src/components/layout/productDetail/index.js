import React, { Component } from 'react'
import { Container, Row, Col, Image, Pagination, Accordion, Card, Button } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'
import SlideCard from 'components/common/slideCard/'
import VerticalSpace from 'components/common/verticalSpace/'
import * as Api from 'api/'


import './index.scss'
import banner from 'assets/images/product_banner.jpg'

export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accordion: [
                {
                    id: 0,
                    title: '产品参数',
                    text: [],
                    byte: 'parameter'
                },
                {
                    id: 1,
                    title: '产品亮点',
                    text: [],
                    byte: 'feature'
                },
                {
                    id: 2,
                    title: '产品明细',
                    text: [],
                    byte: 'details'
                }
            ],
            images:[]
        }
    }
    componentDidMount() {
        const data = this.props.location.search  //地址栏截取
        const id = data.split('?')[1]
        
        Api.getProductDetail({ id })
            .then(res => {
                console.log('产品',res)
            })
            .catch(err => {
                console.log(err)
            })

    }
    render() {
        let { accordion } = this.state
        return (
            <div>
                <Image src={banner} fluid />
                <VerticalSpace height="4rem" />
                <Container>
                    <Row>
                        <Col md={4} xs={12}>
                            <div className="product-detail__left">
                                <div className="product-detail__img">
                                    <CardImage />
                                </div>
                                <SlideCard renderItem={item => {
                                    return (<div className="product-thumbnail">
                                        <CardImage />
                                    </div>)
                                }} />
                            </div>
                        </Col>
                        <Col md={8} xs={12}>
                            <div className="product-detail__info">
                                <h3>产品名称</h3>
                                <Accordion defaultActiveKey="0">
                                    {
                                        accordion.map((item, index) => {
                                            return (<Card key={index}>
                                                <Card.Header>
                                                    <Accordion.Toggle as={'div'} eventKey={index}>
                                                        {item.title}
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey={index}>
                                                    <Card.Body>Hello! I'm the body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>)
                                        })
                                    }
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <VerticalSpace />
                            <h1>产品详情</h1>
                            <CardImage />
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace height="4rem" />
            </div>
        )
    }
}
