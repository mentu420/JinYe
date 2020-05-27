import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image, Button, Media } from 'react-bootstrap'
import NewItem from 'components/common/newItem'
import ModeTitle from 'components/common/modeTitle'
import VerticalSpace from 'components/common/verticalSpace/'
import PageinationBar from 'components/common/paginationBar/'
import * as Api from 'api/'


import './index.scss'
import banner from 'assets/images/new-banner.jpg'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageSize: 10,
            pageIndex: 1,
            totalPage: 3,
            newList: [],
        }
    }

    componentDidMount() {
        let { pageSize, pageIndex } = this.state
        this.getNewList(pageSize, pageIndex)
    }

    getNewList(pageSize, pageIndex) {
        return Api.getNewList({ pageSize, pageIndex }).then(res => {
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
        console.log(arr)
        let totalPage = Math.ceil(totalCount / pageSize)
        console.log('totalPage', totalPage)
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
        this.getNewList(pageSize, pageIndex)
    }
    render() {
        let { newList, totalPage, pageIndex } = this.state
        console.log('render', totalPage)
        return (
            <div>
                <Image src={banner} fluid />
                <VerticalSpace />
                <ModeTitle letter={'NEWS INFORMATION'} title={'新闻动态'} />
                <VerticalSpace />
                <Container>
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
