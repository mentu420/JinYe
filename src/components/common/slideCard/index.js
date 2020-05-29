import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BScroll from 'better-scroll'
import CarImage from 'components/common/cardImage'

import './index.scss'

export default class SlideCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bscroll: null,
            itemWidth: 317,
            itemIndex: 0,
        }
        this.bscroll = null
    }

    componentDidMount() {
        setTimeout(() => {
            this.initBscroll()
        }, 350);
    }

    initBscroll = () => {
        let { list, cols } = this.props
        //选中DOM中定义的 .this.refs.slideWrapper 进行初始化
        this.bscroll = new BScroll(this.refs.slideWrapper, {
            scrollX: true,  //开启横向滚动
            click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
            scrollY: true, //关闭竖向滚动
        })

        let wrapperWidth = parseInt(window.getComputedStyle(this.refs.slideWrapper).width)

        let itemWidth = wrapperWidth / cols

        let listWidth = (list.length - 1) * (itemWidth + 12)

        this.refs.slideList.style.width = listWidth < wrapperWidth ? wrapperWidth + 'px' : listWidth + 'px'

        this.bscroll.refresh()
        this.setState({ itemWidth })

    }
    swriptLeft = () => {
        //点击以下移动一个item
        let { itemIndex } = this.state
        if (itemIndex == 0) return
        let itemElement = this.refs.slideList.childNodes
        this.bscroll.scrollToElement(itemElement[--itemIndex], 300)
        this.setState({ itemIndex: itemIndex })
    }
    swriptRight = () => {
        let { itemIndex } = this.state
        let { list, cols } = this.props
        if (itemIndex + cols >= list.length) return
        let itemElement = this.refs.slideList.childNodes
        console.log(itemIndex)
        this.bscroll.scrollToElement(itemElement[++itemIndex], 300)
        this.setState({ itemIndex: itemIndex })
    }

    render() {
        let { list, hasArrow } = this.props
        let { itemWidth } = this.state

        return (
            <div className="slide-card">
                <div className="slide-card__wrapper" ref="slideWrapper">
                    <ul className="slide-card__list" ref="slideList">
                        {
                            list.map((item, index) => {
                                return (<li key={index} className="slide-card__item" style={{ width: itemWidth + 'px' }}>
                                    {this.props.renderItem ? this.props.renderItem(item) : this.props.children}
                                </li>)
                            })
                        }
                    </ul>
                </div>
                {
                    hasArrow && (<>
                        <span className="iconfont icon-left-circle-fill" onClick={this.swriptLeft}></span>
                        <span className="iconfont icon-right-circle-fill" onClick={this.swriptRight}></span>
                    </>)
                }
            </div>
        )
    }
}

SlideCard.defaultProps = {
    list: [
        { id: 0, label: '标题' },
        { id: 1, label: '标题' },
        { id: 2, label: '标题' },
        { id: 3, label: '标题' },
        { id: 4, label: '标题' },
        { id: 5, label: '标题' },
        { id: 6, label: '标题' },
    ],
    cols: 3,
    hasArrow: true
}

