import React, { Component } from 'react'
import { Container, Row, Col, Image, Pagination } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'
import ModeTitle from 'components/common/modeTitle'
import VerticalSpace from 'components/common/verticalSpace/'
import textFill from 'constants/textFill'

import './index.scss'
import banner from 'assets/images/advantage-banner.jpg'
import banner2 from 'assets/images/advantage_07.jpg'
import banner3 from 'assets/images/advantage_04.jpg'

export default class index extends Component {
    componentDidMount() {

    }
    render() {
        let { advantageTxt } = textFill
        let { letter, title, orderList, subtitle, content } = advantageTxt
        return (
            <div>
                <CardImage src={banner} />
                <VerticalSpace />
                <ModeTitle letter={letter} title={title} />
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
                                    {
                                        orderList.map(item => {
                                            return (<li key={item.value}><span className="iconfont icon-plus"></span>{item.value}</li>)
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace />
                <Container fluid>
                    <Row>
                        <Col>
                            <CardImage src={banner2} />
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace />
                <Container >
                    <Row>
                        <Col>
                            <div className="advantage-craft">
                                <h3>{subtitle}</h3>
                                <p>{content}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
