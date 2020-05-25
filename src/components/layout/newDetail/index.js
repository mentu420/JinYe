import React, { Component } from 'react'
import VerticalSpace from 'components/common/verticalSpace'
import { Container, Row, Col, Image } from 'react-bootstrap'
import * as Api from 'api/'
import QS from 'qs'

import './index.scss'
import banner from 'assets/images/new-banner.jpg'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: {}
        }
    }
    componentDidMount() {
        const data = this.props.location.search  //地址栏截取
        const query = data.split('?')[1]
        const params = QS.parse(query)
        console.log(params)
        Api.getNewDetail(params)
            .then(data => {
                this.setState({
                    detail: { ...data, content: decodeURIComponent(data.content) }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        let { detail } = this.state
        console.log(detail)
        return (
            <div>
                <Image src={banner} fluid />
                <VerticalSpace height={'6rem'} />
                <Container>
                    <Row>
                        <Col>
                            <div className="new-detail__title">
                                <h3>{detail.title}</h3>
                            </div>
                            <VerticalSpace />
                            <p>时间：<time>{detail.date}</time></p>
                            <VerticalSpace height={'4rem'} />
                            <div className="new-detail__content" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace height={'4rem'} />
            </div>
        )
    }
}
