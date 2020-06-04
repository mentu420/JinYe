import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPage: 20,
            currPage: 1,
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return nextProps
    }
    componentDidMount() {
        let { totalPage, currPage } = this.props
        console.log('xxxxx')
        console.log(totalPage, currPage)
        this.setState({ totalPage, currPage })
    }

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
        this.setState({ currPage: item })
        if (typeof this.props.onPageClick === 'function') this.props.onPageClick(item)
    }
    render() {
        let { totalPage, currPage } = this.state
        return (
            <Pagination>
                <Pagination.First onClick={this.goFirstPage} />
                <Pagination.Prev onClick={this.goPrevPage} />
                {
                    currPage > 3 && (<Pagination.Ellipsis />)
                }
                {
                    totalPage - currPage >= 3 && ([currPage, currPage + 1, currPage + 2].map(item => {
                        return (<Pagination.Item key={item} active={currPage == item} onClick={() => this.goCurrPage(item)}>{item}</Pagination.Item>)
                    }))
                }
                {
                    (totalPage >= 3 && totalPage - currPage >= 4) && (<Pagination.Ellipsis />)
                }
                {
                    totalPage - currPage < 3 && ([totalPage - 2, totalPage - 1, totalPage].map(item => {
                        return (<Pagination.Item key={item} active={currPage == item} onClick={() => this.goCurrPage(item)}>{item}</Pagination.Item>)
                    }))
                }
                <Pagination.Next onClick={this.goNextPage} />
                <Pagination.Last onClick={this.goLastPage} />
            </Pagination>
        )
    }
}
