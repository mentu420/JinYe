import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'
import PageinationBar from 'components/common/paginationBar/'
// import { AliveScope } from 'react-activation'
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
            secondId: 0,
            pageSize: 6,
        }

    }
    componentWillMount() {
        console.log(this.props.location)
        const { search } = this.props.location  //地址栏截取
        console.log(search)
        const id = search.split('?')[1]
        console.log('id', id)
        Api.getCategory({ type: 2 })
            .then(res => {
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
    componentWillReceiveProps(nextProps) {
        let { navList } = this.state
        let { location } = nextProps
        let id = location.search.split('?')[1]
        let secondId = null;
        let [item = null] = navList.filter(option => {
            let bool = option.children.some(val => val.id == id)
            if (bool) secondId = id
            return option.id == id || bool
        })
        this.setState({ navId: item.id, pageIndex: 1, secondId })
        this.getProductList({ categoryId: id }).then(res => {
            this.productListHandle(res)
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
        console.log(pageSize)
        console.log('totalPage', totalPage)
        this.setState({ totalPage, productList: items })
    }
    goDetail = (item) => {
        let { history } = this.props
        history.push({ pathname: '/ProductDetail', search: `${item.id}` })
    }
    onPageClick = (pageIndex) => {
        let { navId, secondId } = this.state
        this.setState({ pageIndex })
        console.log(navId)
        this.getProductList({ categoryId: secondId ? secondId : navId, pageIndex }).then(res => {
            this.productListHandle(res)
        })
    }
    onNavClick = (item, index) => {
        console.log('item', item.id)
        let { history } = this.props
        history.push({ pathname: '/ProductList', search: `${item.id}` })
        // this.setState({ navId: item.id, secondId: null, pageIndex: 1 })
        // this.getProductList({ categoryId: item.id }).then(res => {
        //     this.productListHandle(res)
        // })
    }
    onSecondItemClick = (option, e) => {
        console.log('option', option)
        let { history } = this.props
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        history.push({ pathname: '/ProductList', search: `${option.id}` })
        // this.setState({ secondId: option.id, pageIndex: 1 })
        // this.getProductList({ categoryId: option.id }).then(res => {
        //     this.productListHandle(res)
        // })
    }

    render() {
        let { navList, productList, totalPage, pageIndex, navId, secondId } = this.state
        console.log('secondId', secondId)
        return (
            <div>
                <CardImage src={banner} />
                <Container id="product-container">
                    <Row>
                        <Col md={3}>
                            <h4>产品分类</h4>
                            <ul className="nav-list">
                                {
                                    navList.map((item, index) => {
                                        let { children } = item
                                        let secondHeight = navId == item.id ? children.length * 40 + 'px' : '0'
                                        return (<li key={item.id} onClick={() => this.onNavClick(item, index)}>
                                            <div className={`nav-item ${navId == item.id && 'active'}`}>
                                                {item.title}
                                                <span className={`iconfont ${navId == item.id ? 'icon-minus' : 'icon-plus'}`}></span>
                                            </div>
                                            <ol className="nav-second__list" style={{ height: secondHeight }}>
                                                {
                                                    children.map(option => {
                                                        return (<li className={`nav-second__item ${secondId == option.id && 'active'}`} key={option.id} onClick={(e) => this.onSecondItemClick(option, e)}>
                                                            {option.title}
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
                                        return (<Col key={index} lg={4} sm={6} xs={12}>
                                            <div className="product-item" onClick={() => this.goDetail(item, index)}>
                                                <div className="product-item__img">
                                                    <CardImage src={item.imgUrl} />
                                                </div>
                                                <p className="product-item__name">{item.title}</p>
                                            </div>
                                        </Col>)
                                    })
                                }
                                {
                                    productList.length == 0 && (<div className="no-data">
                                        <div className="no-data__content">
                                            <span className="iconfont icon-nodata-search"></span>
                                            <p>暂无数据</p>
                                        </div>
                                    </div>)
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
