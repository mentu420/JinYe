import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ModeTitle from 'components/common/modeTitle'
import CardImage from 'components/common/cardImage'
import './index.scss'
import banner from 'assets/images/about-banner.jpg'


export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {

        return (
            <div className="about-page">
                <Image src={banner} fluid />
                <ModeTitle letter={'ABOUT US'} title={'关于金烨'} />
                <Container>
                    <Row>
                        <Col md={12}>
                            <p className="about-text">
                                东莞市金烨电热材料有限公司成立于2012年，公司本着"人性化服务，顾客为先"的宗旨，"诚实待客，信誉为本"的理念，现代化的管理模式，团结向上的精神风貌，孜孜不倦的敬业精神，为广大客户提供优良的产品，完善的服务。保障的质量，严格的交期，完善的服务，与各地众多的客户建立了良好的业务关系，赢得了广大信任和赞许！
                                公司自创立以来，遵奉"以人为本、成就客户、专注创新、务实诚信"的价值观，恪守"品质至上、至诚至信"的经营信念，不断引进技术和设备，提高完善自我，我们务求将优良的产品以完善的服务、合理的价格提供给客户，展现"佳品.通天下"的品质与真诚。
                        </p>
                        </Col>
                        <Col md={12}>
                            <ul className="about-link">
                                <li>
                                    <CardImage />
                                </li>
                                <li>
                                    <CardImage />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
