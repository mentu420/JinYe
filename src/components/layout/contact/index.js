import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image, Button, Media, Form, Modal } from 'react-bootstrap'
import NewItem from 'components/common/newItem'
import ModeTitle from 'components/common/modeTitle'
import VerticalSpace from 'components/common/verticalSpace/'
import textFill from 'constants/textFill'
import * as Api from 'api/'

import './index.scss'
import banner from 'assets/images/contact-banner.jpg'
import banner2 from 'assets/images/contact-bg.jpg'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            tips: '请检查留言'
        }
    }
    componentWillMount() {
        
    }


    modalVisible = () => {
        let { show } = this.state
        this.setState({ show: !show })
    }

    vaildForm = () => {
        if (this.fname.value == '') {
            this.setState({ tips: '请填写姓名' })
            return false
        }
        if (this.ftel.value == '' || this.ftel.value.length != 11) {
            this.setState({ tips: '请填写手机号码' })
            return false
        }
        if (this.fmessage.value == '') {
            this.setState({ tips: '请填写留言' })
            return false
        }
        return true
    }
    submit = (e) => {
        e.preventDefault();
        if (!this.vaildForm()) {
            this.modalVisible()
            return
        }
        Api.submitMessage({
            userName: this.fname.value,
            tel: this.ftel.value,
            content: this.fmessage.value
        }).then(res => {
            this.fname.value = ''
            this.ftel.value = ''
            this.fmessage.value = ''
            this.setState({ tips: '留言成功' })
            this.modalVisible()
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        let { show, tips } = this.state
        let { contactTxt } = textFill
        let { orderList, content, letter, title, callTips, tel } = contactTxt
        return (
            <div>
                <Image src={banner} fluid />
                <VerticalSpace />
                <ModeTitle letter={letter} title={title} />
                <VerticalSpace />
                <Container>
                    <Row>
                        <Col>
                            <div className="contact-tel">
                                <label>{callTips}</label>
                                <h3><a href={`tel:${tel}`}>{tel}</a></h3>
                            </div>
                            <VerticalSpace />
                        </Col>
                    </Row>
                    <Row>
                        {
                            orderList.map((item, index) => {
                                return (<Col key={index} md={4} xs={12}>
                                    <ul className="contact-item">
                                        <li className="contact-item__icon"><span className={`iconfont ${item.icon}`}></span></li>
                                        <li className="contact-item__text">
                                            <p>{item.label}</p>
                                            <p>{item.value}</p>
                                        </li>
                                    </ul>
                                </Col>)
                            })
                        }
                    </Row>
                </Container>
                <VerticalSpace height={'4rem'} />
                <div className="contact-message__box" style={{ backgroundImage: 'url(' + banner2 + ')' }}>
                    <Container id="contact-message__container">
                        <Row>
                            <Col md={6} xs={12}>
                                <div className="contact-message__title">
                                    <label>ONLINE MESSAGE</label>
                                    <p>在线留言</p>
                                </div>
                                <p className="contact-message__tips">{content}</p>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>姓名</Form.Label>
                                        <Form.Control ref={el => this.fname = el} type="text" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicNumber">
                                        <Form.Label>电话</Form.Label>
                                        <Form.Control ref={el => this.ftel = el} type="number" placeholder="Tel" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>留言</Form.Label>
                                        <Form.Control ref={el => this.fmessage = el} as="textarea" rows="6" placeholder="Message" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={this.submit}>Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Modal show={show} onHide={this.modalVisible} centered backdropClassName="my-modal__bg">
                    <Modal.Header closeButton>
                        <Modal.Title>提示</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{tips}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalVisible}>确定</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
