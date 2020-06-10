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
            totalPage: 5,
            pageIndex: 1,
            navId: 0,
            secondId:0,
            pageSize: 12,
        }

    }
    componentWillMount() {
        const data = this.props.location.search  //地址栏截取
        const id = data.split('?')[1]

        Api.getCategory({ type: 2 })
            .then(res => {
                console.log('xxxxxxxxxxxxxxx')
                console.log(res)
                let categoryId = id ? id : res[0].id
                let [item = null] = res.filter((item, index) => item.id == categoryId)
                let navId = item ? item.id : res[0].id
                this.setState({ navList: res, navId })
                this.getProductList({ categoryId }).then(res => {
                    this.productListHandle(res)
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    getProductList({ categoryId, pageIndex = 1, pageSize = 6 }) {
        return Api.getProductList({ categoryId, pageIndex, pageSize })
            .catch(err => {
                console.log(err)
            })
    }
    productListHandle = ({ totalCount, items }) => {
        let { pageSize } = this.state
        let totalPage = Math.ceil(totalCount / pageSize)
        console.log('totalCount', totalCount)
        console.log('totalPage', totalPage)
        this.setState({ totalPage, productList: items })
    }
    goDetail = (item) => {
        let { history } = this.props
        history.push({ pathname: '/ProductDetail', search: `${item.id}` })
    }
    onPageClick = (pageIndex) => {
        let { navId } = this.state
        this.setState({ pageIndex })
        console.log(navId)
        this.getProductList({ categoryId: navId, pageIndex }).then(res => {
            this.productListHandle(res)
        })
    }
    onNavClick = (item, index) => {
        console.log(item)
        this.setState({ navId: item.id })
        this.getProductList({ categoryId: item.id }).then(res => {
            this.productListHandle(res)
        })
    }
    onSecondItemClick=(option)=>{
        console.log(option)
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
                                        let secondHeight = navId == item.id ? '80px' : '0'
                                        return (<li key={item.id} onClick={() => this.onNavClick(item, index)}>
                                            <div className={`nav-item ${navId == item.id && 'active'}`}>
                                                {item.title}
                                                <span className={`iconfont ${navId == item.id ? 'icon-minus' : 'icon-plus'}`}></span>
                                            </div>
                                            <ol className="nav-second__list" style={{ height: secondHeight }}>
                                                {
                                                    [1,2].map(option=>{
                                                        return (<li className="nav-second__item" key={option} onClick={()=>this.onSecondItemClick(option)}>
                                                            二级分类
                                                        </li>)
                                                    })
                                                }
                                            </ol>
                                        </li>)
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
