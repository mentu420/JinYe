import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'
import PageinationBar from 'components/common/paginationBar/'
import './index.scss'
import banner from 'assets/images/product_banner.jpg'



export default class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [
                { id: 0, lable: '熔喷布加热器' },
                { id: 1, lable: '熔喷布加热器' },
                { id: 2, lable: '熔喷布加热器' },
                { id: 3, lable: '熔喷布加热器' },
                { id: 4, lable: '熔喷布加热器' },
            ],
            productList: [1, 2, 3, 4, 5, 6],
            totalPage: 20,
            currPage: 1,
            navIndex: 0
        }
    }
    componentWillMount() {

    }
    goDetail = (item) => {
        let { history } = this.props
        history.push({ pathname: '/ProductDetail' })
    }

    onPageClick(page){
        console.log(page)
    }
    onNavClick = (item, index) => {
        console.log(item)
        this.setState({ navIndex: index })
    }
    render() {
        let { navList, productList, totalPage, currPage, navIndex } = this.state
        return (
            <div>
                <Image src={banner} fluid />
                <Container id="product-container">
                    <Row>
                        <Col md={3}>
                            <h4>产品分类</h4>
                            <ul className="nav-list">
                                {
                                    navList.map((item, index) => {
                                        return (<li key={item.id} className={`nav-item ${navIndex == index && 'active'}`} onClick={() => this.onNavClick(item, index)}>{item.lable}</li>)
                                    })
                                }
                            </ul>
                        </Col>
                        <Col md={9} xs={12}>
                            <Row>
                                {
                                    productList.map((item, index) => {
                                        return (<Col key={index} lg={4} xs={6}>
                                            <div className="product-item" onClick={() => this.goDetail(item, index)}>
                                                <div className="product-item__img">
                                                    <CardImage />
                                                </div>
                                                <p className="product-item__name">产品名称</p>
                                            </div>
                                        </Col>)
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 9, offset: 3 }} id="pageination">
                            <PageinationBar currPage={1} totalPage={20} onPageClick={this.onPageClick} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
