import React, { Component } from 'react'
import { Container, Row, Col, Image, Pagination } from 'react-bootstrap'
import CardImage from 'components/common/cardImage/'

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
            navIndex:0
        }
    }
    componentWillMount() {

    }
    goFirstPage = () => {
        this.setState({ currPage: 1 })
    }
    goPrevPage = () => {
        let { currPage, totalPage } = this.state
        if (currPage == 1) return
        this.setState({ currPage: --currPage })
    }
    goNextPage = () => {
        let { currPage, totalPage } = this.state
        if (totalPage == currPage) return
        this.setState({ currPage: ++currPage })
    }
    goLastPage = () => {
        let { totalPage } = this.state
        this.setState({ currPage: totalPage })
    }
    goCurrPage=(item)=> {
        this.setState({ currPage: item })
    }
    onNavClick=(item,index)=>{
        console.log(item)
        this.setState({navIndex:index})
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
                            <ul class="nav-list">
                                {
                                    navList.map((item,index) => {
                                        return (<li key={item.id} class={`nav-item ${navIndex==index&&'active'}`} onClick={()=>this.onNavClick(item,index)}>{item.lable}</li>)
                                    })
                                }
                            </ul>
                        </Col>
                        <Col md={9} xs={12}>
                            <Row>
                                {
                                    productList.map(item => {
                                        return (<Col key={item.id} lg={4} xs={6}>
                                            <div class="product-item">
                                                <div class="product-item__img">
                                                    <CardImage />
                                                </div>
                                                <p class="product-item__name">产品名称</p>
                                            </div>
                                        </Col>)
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 9, offset: 3 }} id="pageination">
                            <Pagination>
                                <Pagination.First onClick={this.goFirstPage} />
                                <Pagination.Prev onClick={this.goPrevPage} />
                                {
                                    currPage >= 3 && (<Pagination.Ellipsis />)
                                }
                                {
                                    totalPage - currPage > 3 && ([currPage, currPage + 1, currPage + 2].map(item => {
                                        return (<Pagination.Item active={currPage == item} onClick={() => this.goCurrPage(item)}>{item}</Pagination.Item>)
                                    }))
                                }
                                {
                                    (totalPage >= 3 && totalPage - currPage >=4) && (<Pagination.Ellipsis />)
                                }
                                {
                                    totalPage - currPage <= 3 && ([totalPage - 3, totalPage - 2, totalPage - 1, totalPage].map(item => {
                                        return (<Pagination.Item active={currPage == item} onClick={() => this.goCurrPage(item)}>{item}</Pagination.Item>)
                                    }))
                                }
                                <Pagination.Next onClick={this.goNextPage} />
                                <Pagination.Last onClick={this.goLastPage} />
                            </Pagination>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
