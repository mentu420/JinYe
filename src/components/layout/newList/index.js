import React, { Component } from 'react'
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap'
import NewItem from 'components/common/newItem'
import ModeTitle from 'components/common/modeTitle'
import VerticalSpace from 'components/common/verticalSpace/'
import PageinationBar from 'components/common/paginationBar/'
import QS from 'qs'
import * as Api from 'api/'


import './index.scss'
import banner from 'assets/images/new-banner.jpg'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageSize: 20,
            pageIndex: 1,
            totalPage: 3,
            newList: [],
            newNavbar: [
                {
                    id: 0,
                    categoryId: 0,
                    title: '行业动态',
                },
                {
                    id: 1,
                    categoryId: 56,
                    title: '金烨动态',
                }
            ],
            activeKey: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps)
        let { newNavbar, activeKey,pageSize, pageIndex } = this.state
        let { location } = nextProps
        let query = location.search.split('?')[1]
        let params = QS.parse(query)
        let [{ categoryId }] = newNavbar.filter(item => item.categoryId == params.categoryId)
        if (activeKey == categoryId) return
        this.setState({ activeKey: categoryId })
        this.getNewList({ categoryId, pageSize, pageIndex })
    }

    componentDidMount() {
        console.log('componentDidMount')
        let { pageSize, pageIndex, newNavbar } = this.state
        let data = this.props.location.search  //地址栏截取
        let query = data.split('?')[1]
        let params = QS.parse(query)
        this.getNewList({ ...params, pageSize, pageIndex })
        let [{ id }] = newNavbar.filter(item => item.categoryId == params.categoryId)
        this.setState({ activeKey: id })
    }

    getNewList({ categoryId = 0, pageSize, pageIndex }) {
        return Api.getNewList({ categoryId, pageSize, pageIndex }).then(res => {
            this.newListHandle(res)
        }).catch(err => {
            console.log(err)
        })
    }

    newListHandle = (res) => {
        let { pageSize } = this.state
        let { totalCount, items } = res
        let arr = items.map(item => {
            let dateArr = item.date.split('-')
            return {
                ...item,
                day: dateArr[2],
                date: dateArr[0] + '-' + dateArr[1],
            }
        })
        let totalPage = Math.ceil(totalCount / pageSize)
        this.setState({ newList: arr, totalPage })
    }

    goDetail(item) {
        console.log(item)
        this.props.history.push({ pathname: '/newDetail', search: `id=${item.id}` })
    }
    onPageClick = (pageIndex) => {
        console.log(pageIndex)
        let { pageSize } = this.state
        this.setState({ pageIndex: pageIndex })
        this.getNewList({ pageSize, pageIndex })
    }
    navbarSelect = (eventKey) => {
        console.log('eventKey', eventKey)
        let { pageSize, pageIndex } = this.state
        this.setState({ activeKey: eventKey })
        this.getNewList({ categoryId: eventKey, pageSize, pageIndex })
    }
    render() {
        let { newList, totalPage, pageIndex, newNavbar, activeKey } = this.state
        return (
            <div>
                <Image src={banner} fluid />
                <VerticalSpace />
                <ModeTitle letter={'NEWS INFORMATION'} title={'新闻动态'} />
                <VerticalSpace />
                <Container>
                    <Row>
                        <Col>
                            <Nav variant="pills" className="justify-content-center" activeKey={activeKey} onSelect={this.navbarSelect}>
                                {
                                    newNavbar.map((item, index) => {
                                        return (<Nav.Item key={index}>
                                            <Nav.Link href={`#/newList?categoryId=${item.categoryId}`} eventKey={item.categoryId}>{item.title}</Nav.Link>
                                        </Nav.Item>)
                                    })
                                }
                            </Nav>
                        </Col>
                    </Row>
                    <VerticalSpace />
                    <Row>
                        <Col>
                            <ul className="new-list">
                                {
                                    newList.map(item => {
                                        return (<li key={item.id} className="new-item" onClick={() => this.goDetail(item)}>
                                            <NewItem item={item} />
                                        </li>)
                                    })
                                }
                            </ul>
                        </Col>
                    </Row>
                    <VerticalSpace />
                    {
                        totalPage > 1 && (<Row>
                            <Col id="pageination">
                                <PageinationBar currPage={pageIndex} totalPage={totalPage} onPageClick={this.onPageClick} />
                            </Col>
                        </Row>)
                    }
                </Container>
                <VerticalSpace height={'4rem'} />
            </div>
        )
    }
}
