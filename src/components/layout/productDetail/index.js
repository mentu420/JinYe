import React, { Component } from 'react'
import { Container, Row, Col, Image, Pagination, Accordion, Card, Button } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'

import './index.scss'
import banner from 'assets/images/product_banner.jpg'

export default class index extends Component {
    render() {
        return (
            <div>
                <Image src={banner} fluid />
                <Container>
                    <Row>
                        <Col md={4} xs={12}>
                            <div class="product-detail__left">
                                <div class="product-detail__img">
                                    <CardImage />
                                </div>
                                <div class="product-detail__slide">

                                </div>
                            </div>
                        </Col>
                        <Col md={8} xs={12}>
                            <div class="product-detail__info">
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
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                Click me!
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>产品详情</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
