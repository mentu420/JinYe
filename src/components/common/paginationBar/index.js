import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPage: 5,
            currPage: 1,
            pageArr: []
        }
    }
    componentDidMount() {
        let { totalPage, currPage } = this.props
        console.log('xxxxx')
        console.log(totalPage, currPage)
        let pageArr = Array.from({ length: totalPage }, (v, k) => k + 1)
        console.log('pageArr', pageArr)
        this.setState({ totalPage, currPage, pageArr })
    }
    componentWillReceiveProps(nextProps) {
        let { totalPage, currPage } = nextProps
        let pageArr = Array.from({ length: totalPage }, (v, k) => k + 1)
        this.setState({ totalPage, currPage, pageArr })
    } ß

    goFirstPage = () => {
        this.setState({ currPage: 1 })
        if (typeof this.props.onPageClick === 'function') this.props.onPageClick(1)
    }
    goPrevPage = () => {
        let { currPage } = this.state
        if (currPage == 1) return
        this.setState({ currPage: --currPage })
        if (typeof this.props.onPageClick === 'function') this.props.onPageClick(currPage)
    }
    goNextPage = () => {
        let { currPage, totalPage } = this.state
        console.log('object', currPage, totalPage)
        if (totalPage == currPage) return
        this.setState({ currPage: ++currPage })
        if (typeof this.props.onPageClick === 'function') this.props.onPageClick(currPage)
    }
    goLastPage = () => {
        let { totalPage } = this.state
        this.setState({ currPage: totalPage })
        if (typeof this.props.onPageClick === 'function') this.props.onPageClick(totalPage)
    }
    goCurrPage = (item) => {
        console.log('item', item)
        this.setState({ currPage: item })
        if (typeof this.props.onPageClick === 'function') this.props.onPageClick(item)
    }
    render() {
        let { totalPage, currPage } = this.state
        let pageArr = [currPage, currPage + 1, currPage + 2]
        if (currPage >= totalPage - 2 && totalPage > 3) pageArr = [totalPage - 2, totalPage - 1, totalPage]
        return (<Pagination>
            {
                totalPage > 3 && <Pagination.First onClick={this.goFirstPage} />
            }
            {
                totalPage > 3 && <Pagination.Prev onClick={this.goPrevPage} />
            }
            {
                totalPage > 0 && pageArr.map(item => {
                    return (<Pagination.Item key={item} active={currPage == item} onClick={() => this.goCurrPage(item)}>{item}</Pagination.Item>)
                })
            }
            {
                totalPage > 3 && <Pagination.Next onClick={this.goNextPage} />
            }
            {
                totalPage > 3 && <Pagination.Last onClick={this.goLastPage} />
            }
        </Pagination>)
    }
}
