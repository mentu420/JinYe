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
            itemWidth: 317
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.initBscroll()
        }, 350);
    }
    getBscrollElement = () => {
        console.log('this.refs.slideList',this.refs.slideList)
        return {
            wrapper: this.refs.slideWrapper,
            listElement: this.refs.slideList,
            itemElement: this.refs.slideList.childNodes
        }
    }
    initBscroll = () => {
        let { list, cols } = this.props
        let { wrapper, listElement, itemElement } = this.getBscrollElement()
        let wrapperStyles = window.getComputedStyle(wrapper)
        //选中DOM中定义的 .wrapper 进行初始化
        const bscroll = new BScroll(wrapper, {
            scrollX: true,  //开启横向滚动
            click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
            scrollY: true, //关闭竖向滚动
        })
        console.log(wrapperStyles.width)
        let itemWidth = parseInt(wrapperStyles.width) / cols
        console.log('itemWidth', itemWidth)
        console.log(list.length)
        listElement.style.width = (list.length - 1) * itemWidth + 'px'

        bscroll.refresh()
        this.setState({ bscroll, itemWidth })

    }
    swriptLeft = () => {
        let { bscroll, itemWidth } = this.state
        let { listElement, itemElement } = this.getBscrollElement()

        let listRect = listElement.getBoundingClientRect()

        if (listRect.x == 0) return

        let index = parseInt(Math.abs(listRect.x) / itemWidth)

        index = index == 0 ? 0 : index - 1

        console.log(index)
        console.log(itemElement[index])

        bscroll.scrollToElement(itemElement[index], 300)

    }
    swriptRight = () => {
        let { bscroll, itemWidth } = this.state
        console.log(bscroll, itemWidth)
        let { wrapper, listElement, itemElement } = this.getBscrollElement()

        let listRect = listElement.getBoundingClientRect()

        let wrapperRect = wrapper.getBoundingClientRect()

        let slideCount = parseInt(wrapperRect.width / itemWidth)

        let index = slideCount + parseInt(Math.abs(listRect.x) / itemWidth)

        if (index == itemElement.length) return

        bscroll.scrollToElement(itemElement[index], 300)

    }

    render() {
        let { list, hasArrow,cols } = this.props
        let flexBasis = 100/cols * 100 + '%'
        return (
            <div className="slide-card">
                <div className="slide-card__wrapper" ref="slideWrapper">
                    <ul className="slide-card__list" ref="slideList">
                        {
                            list.map((item,index) => {
                                return (<li key={index} className="slide-card__item" style={{flexBasis }}>
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
    ],
    cols: 3,
    hasArrow: true
}

