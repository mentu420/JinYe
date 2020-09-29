import React, { Component } from 'react'
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap'
import NewItem from 'components/common/newItem'
import ModeTitle from 'components/common/modeTitle'
import VerticalSpace from 'components/common/verticalSpace/'
import PageinationBar from 'components/common/paginationBar/'
import CardImage from 'components/common/cardImage'
import QS from 'qs'
import * as Api from 'api/'
import Storage from 'utils/storage/'


import './index.scss'
import banner from 'assets/images/new-banner.jpg'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageSize: 8,
            pageIndex: 1,
            totalPage: 3,
            newList: [],
            newNavbar: [
                {
                    id: 0,
                    title: '行业动态',
                },
                {
                    id: 59,
                    title: '金烨动态',
                }
            ],
            activeKey: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps)
        let { newNavbar, activeKey, pageSize, pageIndex } = this.state
        let { location } = nextProps
        let query = location.search.split('?')[1]
        let params = QS.parse(query)
        let [{ id }] = newNavbar.filter(item => item.id == params.id)
        if (activeKey == id) return
        this.setState({ activeKey: id })
        this.getNewList({ id, pageSize, pageIndex })
    }

    componentDidMount() {
        Api.getCategory({ type: 1 })
            .then(data => {
                this.setState({ newNavbar: data })
            })
        console.log('componentDidMount')
        console.log(this.props.location)
        const { search } = this.props.location  //地址栏截取
        console.log(search)
        const query = search.split('?')[1]
        console.log('query', query)
        let { pageSize, newNavbar } = this.state
        // let data = this.props.location.search  //地址栏截取
        // let query = data.split('?')[1]
        let params = QS.parse(query)
        let { pageIndex = null } = Storage.fetch('pageIndex')
        let index = pageIndex ? pageIndex : this.state.pageIndex
        this.getNewList({ ...params, pageSize, pageIndex: index })
        // let [{ id }] = newNavbar.filter(item => item.id == params.id)
        // console.log('id', id)
        this.setState({ activeKey: params.id, pageIndex: index })
    }

    getNewList({ id = 62, pageSize, pageIndex }) {
        return Api.getNewList({ categoryId: id, pageSize, pageIndex })
            .then(res => {
                console.log('getNewList', res)
                this.newListHandle(res)
            })
            .catch(err => {
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
        console.log('totalCount', totalCount)
        console.log('pageSize', pageSize)
        let totalPage = Math.ceil(totalCount / pageSize)
        console.log('totalPage', totalPage)
        this.setState({ newList: arr, totalPage })
    }

    goDetail(item) {
        console.log(item)
        let { pageIndex } = this.state
        Storage.save('pageIndex', { pageIndex })
        this.props.history.push({ pathname: '/newDetail', search: `id=${item.id}` })
    }
    onPageClick = (pageIndex) => {
        console.log(pageIndex)
        let { activeKey } = this.state
        let { pageSize } = this.state
        this.setState({ pageIndex: pageIndex })
        this.getNewList({ id: activeKey, pageSize, pageIndex })
    }
    navbarSelect = (eventKey) => {
        Storage.save('pageIndex', { pageIndex: 1 })

        console.log('eventKey', eventKey)
        let { pageSize } = this.state
        this.setState({ activeKey: eventKey, pageIndex: 1 })
        this.getNewList({ id: eventKey, pageSize, pageIndex: 1 })
    }
    render() {
        let { newList, totalPage, pageIndex, newNavbar, activeKey } = this.state
        return (
            <>
                <CardImage src={banner} />
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
                                            <Nav.Link href={`#/newList?id=${item.id}`} eventKey={item.id}>{item.title}</Nav.Link>
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
                    <Row>
                        <Col id="pageination">
                            {totalPage > 1 && <PageinationBar currPage={pageIndex} totalPage={totalPage} onPageClick={this.onPageClick} />}
                        </Col>
                    </Row>
                </Container>
                <VerticalSpace height={'4rem'} />
            </>
        )
    }
}
