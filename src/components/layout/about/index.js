import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ModeTitle from 'components/common/modeTitle'
import CardImage from 'components/common/cardImage'
import * as Api from 'api/'
import { DecodeURI } from 'utils/urlCodeHandler/'

import './index.scss'
import banner from 'assets/images/about-banner.jpg'
import banner1 from 'assets/images/about-slice1.jpg'
import banner2 from 'assets/images/about-slice2.jpg'



export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aboutTxt: '',
            aboutImage:''
        }
    }

    componentDidMount() {
        Api.getAbout().then(res => {
            console.log(res)
            this.setState({
                aboutImage: res.cover,
                aboutTxt: DecodeURI(res.content)
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        let {aboutImage,aboutTxt} = this.state
        return (
            <div className="about-page">
                <Image src={banner} fluid />
                <ModeTitle letter={'ABOUT US'} title={'关于金烨'} />
                <Container>
                    <Row>
                        <Col md={12}>
                            <p className="about-text" dangerouslySetInnerHTML={{ __html: aboutTxt }}></p>
                        </Col>
                        <Col md={12}>
                            <ul className="about-link">
                                <li>
                                    <CardImage src={aboutImage} />
                                </li>
                                <li>
                                    <CardImage src={banner2} />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
