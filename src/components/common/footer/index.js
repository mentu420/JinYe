import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

import  './index.scss'


export default class index extends Component {
    render() {
        return (
            <div class="footer">
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <Nav className="flex-column">
                                        <Nav.Link href="/home">Active</Nav.Link>
                                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                                    </Nav>
                                </Col>
                                <Col>
                                    <Nav className="flex-column">
                                        <Nav.Link href="/home">Active</Nav.Link>
                                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                                    </Nav>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <div>右边</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
