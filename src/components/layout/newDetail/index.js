import React, { Component } from 'react'
import VerticalSpace from 'components/common/verticalSpace'
import { Container, Row, Col } from 'react-bootstrap'
import * as Api from 'api/'

import './index.scss'

export default class index extends Component {
    componentDidMount() {
        Api.getNewDetail({ id: '' })
            .then(data => {

            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <VerticalSpace height={'6rem'} />
                <Container>
                    <Row>
                        <Col>
                            <div className="new-detail__title">
                                <h1>标题</h1>

                            </div>
                            <VerticalSpace height={'4rem'} />
                            <div className="new-detail__content">
                                <p>新闻内容</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace height={'4rem'} />
            </div>
        )
    }
}
