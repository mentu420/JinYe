import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image, Button, Media } from 'react-bootstrap'
import NewItem from 'components/common/newItem'
import ModeTitle from 'components/common/modeTitle'
import VerticalSpace from 'components/common/verticalSpace/'

import './index.scss'
import banner from 'assets/images/new-banner.jpg'

export default class index extends Component {

    goDetail(){
        
    }
    render() {
        return (
            <div>
                <Image src={banner} fluid />
                <VerticalSpace/>
                <ModeTitle letter={'NEWS INFORMATION'} title={'新闻动态'} />
                <VerticalSpace />
                <Container>
                    <Row>
                        <Col>
                            <ul class="new-list">
                                <li class="new-item" onClick={()=>this.goDetail()}>
                                    <NewItem />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace height={'4rem'}/>
            </div>
        )
    }
}
