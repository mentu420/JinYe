import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'
import PageinationBar from 'components/common/paginationBar/'
import * as Api from 'api/'

import './index.scss'
import banner from 'assets/images/product_banner.jpg'



export default class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [],
            productList: [],
            totalPage: 20,
            pageIndex: 1,
            navId: 0,
            pageSize: 6,
        }

    }
    componentWillMount() {
        const data = this.props.location.search  //地址栏截取
        const id = data.split('?')[1]

        Api.getCategory({ type: 2 })
            .then(res => {
                console.log(res)
                let categoryId = id ? id : res[0].id
                let [item = null] = res.filter((item, index) => item.id == categoryId)
                let navId = item ? item.id : res[0].id
                this.setState({ navList: res, navId })
                this.getProductList(categoryId).then(res => {
                    console.log('产品列表', res)
                    this.productListHandle(res)
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    getProductList(categoryId, pageIndex = 1, pageSize = 6) {
        return Api.getProductList({ categoryId, pageIndex, pageSize })
            .catch(err => {
                console.log(err)
            })
    }
    productListHandle = ({ totalCount, items }) => {
        let { pageSize } = this.state
        let totalPage = Math.ceil((totalCount-pageSize) / pageSize)
        this.setState({ totalPage, productList: items })
    }
    goDetail = (item) => {
        let { history } = this.props
        history.push({ pathname: '/ProductDetail', search: `${item.id}` })
    }
    onPageClick(page) {
        console.log(page)
    }
    onNavClick = (item, index) => {
        console.log(item)
        this.setState({ navId: item.id })
        this.getProductList(item.id).then(res => {
            this.productListHandle(res)
        })
    }
    render() {
        let { navList, productList, totalPage, pageIndex, navId } = this.state
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
                                        return (<li key={item.id} className={`nav-item ${navId == item.id && 'active'}`} onClick={() => this.onNavClick(item, index)}>{item.title}</li>)
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
                                                    <CardImage src={item.imgUrl} />
                                                </div>
                                                <p className="product-item__name">{item.title}</p>
                                            </div>
                                        </Col>)
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                    {
                        totalPage > 1 && (<Row>
                            <Col md={{ span: 9, offset: 3 }} id="pageination">
                                {totalPage > 0 && <PageinationBar currPage={pageIndex} totalPage={totalPage} onPageClick={this.onPageClick} />}
                            </Col>
                        </Row>)
                    }
                </Container>
            </div>
        )
    }
}
