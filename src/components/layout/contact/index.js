import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image, Button, Media, Form, Modal } from 'react-bootstrap'
import NewItem from 'components/common/newItem'
import ModeTitle from 'components/common/modeTitle'
import VerticalSpace from 'components/common/verticalSpace/'

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
        if (this.refs.name.value == '') {
            this.setState({ tips: '请填写姓名' })
            return false
        }
        if (this.refs.tel.value == '') {
            this.setState({ tips: '请填写手机号码' })
            return false
        }
        if (this.refs.message.value == '') {
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
        console.log('succ')
        console.log(this.refs.name.value)
        console.log(this.refs.tel.value)
        console.log(this.refs.message.value)
    }
    render() {
        let { show, tips } = this.state
        return (
            <div>
                <Image src={banner} fluid />
                <VerticalSpace />
                <ModeTitle letter={'CONTACT US'} title={'联系我们'} />
                <VerticalSpace />
                <Container>
                    <Row>
                        <Col>
                            <div class="contact-tel">
                                <label>如有任何问题请联系我们，我们7*24小时竭诚为您服务</label>
                                <h3><a href="tel:0769-22409719">0769-22409719</a></h3>
                            </div>
                            <VerticalSpace />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} xs={12}>
                            <ul class="contact-item">
                                <li class="contact-item__icon"><span class="iconfont icon-qq"></span></li>
                                <li class="contact-item__text">
                                    <p>在线QQ客服</p>
                                    <p>442717390/42717390</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} xs={12}>
                            <ul class="contact-item">
                                <li class="contact-item__icon"><span class="iconfont icon-youjian"></span></li>
                                <li class="contact-item__text">
                                    <p>企业邮箱</p>
                                    <p>442717390@qq.com</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} xs={12}>
                            <ul class="contact-item">
                                <li class="contact-item__icon"><span class="iconfont icon-ie"></span></li>
                                <li class="contact-item__text">
                                    <p>企业官网</p>
                                    <p>www.sqjinye.com</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace height={'4rem'} />
                <div class="contact-message__box" style={{ backgroundImage: 'url(' + banner2 + ')' }}>
                    <Container id="contact-message__container">
                        <Row>
                            <Col md={6} xs={12}>
                                <div class="contact-message__title">
                                    <label>ONLINE MESSAGE</label>
                                    <p>在线留言</p>
                                </div>
                                <p class="contact-message__tips">尊敬的客户，欢迎您来到电热材料生产厂家——东莞市金烨电热材料有限公司！我们在电热材料领域有多年的技术经验积累，并致力于成为电热材料领域的佼佼者！我们迫切希望能够为您服务，如果您有任何对电热材料生产研发或者设备技术领域的疑问，您可以通过多种方式多种渠道联系我们，我们非常乐意为您解答，同时也随时欢迎您亲自来我们公司进行考察与访问！</p>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>姓名</Form.Label>
                                        <Form.Control ref="name" type="text" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicNumber">
                                        <Form.Label>电话</Form.Label>
                                        <Form.Control ref="tel" type="number" placeholder="Tel" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>留言</Form.Label>
                                        <Form.Control ref="message" as="textarea" rows="6" placeholder="Message" />
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
