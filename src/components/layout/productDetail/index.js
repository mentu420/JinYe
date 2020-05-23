import React, { Component } from 'react'
import { Container, Row, Col, Image, Pagination, Accordion, Card, Button } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'
import SlideCard from 'components/common/slideCard/'
import VerticalSpace from 'components/common/verticalSpace/'

import './index.scss'
import banner from 'assets/images/product_banner.jpg'

export default class index extends Component {
    render() {
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
                                <SlideCard>
                                    <div className="product-thumbnail">
                                        <CardImage />
                                    </div>
                                </SlideCard>
                            </div>
                        </Col>
                        <Col md={8} xs={12}>
                            <div className="product-detail__info">
                                <h3>产品名称</h3>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                Click me!
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
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
