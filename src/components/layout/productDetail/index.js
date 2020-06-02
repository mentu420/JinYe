import React, { Component } from 'react'
import { Container, Row, Col, Image, Pagination, Accordion, Card, Button } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'
import SlideCard from 'components/common/slideCard/'
import VerticalSpace from 'components/common/verticalSpace/'
import * as Api from 'api/'
import { DecodeURI } from 'utils/urlCodeHandler/'


import './index.scss'
import banner from 'assets/images/product_banner.jpg'

export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accordion: [
                {
                    id: 0,
                    title: '产品参数',
                    text: [],
                    byte: 'parameter'
                },
                {
                    id: 1,
                    title: '产品亮点',
                    text: [],
                    byte: 'feature'
                },
                {
                    id: 2,
                    title: '产品明细',
                    text: [],
                    byte: 'details'
                }
            ],
            images: [],
            title: '',
            content: '',
            accordionIndex: -1,
        }
    }
    componentDidMount() {
        let { accordion } = this.state
        const data = this.props.location.search  //地址栏截取
        const id = data.split('?')[1]
        console.log('xxxxxxxxxxxxx', id)
        Api.getProductDetail({ id })
            .then(res => {
                console.log('产品', res)
                let { images, content, title, cover } = res

                let arr = accordion.map(item => {
                    console.log(res[item.byte])
                    return { ...item, text: DecodeURI(res[item.byte]) }
                })

                this.setState({ accordion: arr, images: [cover, ...images], title, content: DecodeURI(content) })
            })
            .catch(err => {
                console.log(err)
            })

    }
    onAccordionToggle = (index) => {
        console.log(index)
        let { accordionIndex } = this.state
        if (index == accordionIndex) {
            this.setState({ accordionIndex: -1 })
            return
        }
        this.setState({ accordionIndex: index })
    }
    render() {
        let { accordion, title, images, content, accordionIndex } = this.state
        return (
            <div className="product-detail">
                <Image src={banner} fluid />
                <VerticalSpace height="4rem" />
                <Container>
                    <Row>
                        <Col md={4} xs={12}>
                            <div className="product-detail__left">
                                {
                                    images.map(item => {
                                        return (<div key={item} className="product-detail__img">
                                            <CardImage src={item} />
                                        </div>)
                                    })
                                }
                                {
                                    images.length > 0 && (<SlideCard list={images} renderItem={item => {
                                        return (<div className="product-thumbnail" onClick={() => this.selectImage(item)}>
                                            <CardImage src={item}/>
                                        </div>)
                                    }} />)
                                }
                            </div>
                        </Col>
                        <Col md={8} xs={12}>
                            <div className="product-detail__info">
                                <h3>{title}</h3>
                                <Accordion defaultActiveKey="0">
                                    {
                                        accordion.map((item, index) => {
                                            return (<div className="accordion-item" key={index}>
                                                <div className="accordion-header">
                                                    <Accordion.Toggle as={'div'} eventKey={index} onClick={() => this.onAccordionToggle(index)}>
                                                        <div className="accordion-header__title">
                                                            <p> {item.title}</p>
                                                            <span className={`iconfont ${accordionIndex == index ? 'icon-minus' : 'icon-plus'}`}></span>
                                                        </div>
                                                    </Accordion.Toggle>
                                                </div>
                                                <Accordion.Collapse eventKey={index}>
                                                    <Card.Body>{item.text}</Card.Body>
                                                </Accordion.Collapse>
                                            </div>)
                                        })
                                    }
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <VerticalSpace />
                            <h4 className="detail-content__title">产品详情</h4>
                            <p className="detail-content__content" dangerouslySetInnerHTML={{ __html: content }}></p>
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace height="4rem" />
            </div>
        )
    }
}
