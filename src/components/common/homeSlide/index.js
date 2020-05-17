import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BScroll from 'better-scroll'
import CarImage from 'components/common/cardImage'

import './index.scss'

export default class HomeSlide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bscroll: null,
            itemWidth: 317
        }
    }

    componentDidMount() {
        this.initBscroll()
    }
    getBscrollElement = () => {
        const wrapper = document.querySelector('.slide-wrapper')
        const listElement = document.querySelector('.slide-list')
        let itemElement = document.querySelectorAll('.slide-item')
        return {
            wrapper,
            listElement,
            itemElement
        }
    }
    initBscroll = () => {
        let { list, itemWidth } = this.props
        let { wrapper, listElement } = this.getBscrollElement()
        //选中DOM中定义的 .wrapper 进行初始化
        const bscroll = new BScroll(wrapper, {
            scrollX: true,  //开启横向滚动
            click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
            scrollY: true, //关闭竖向滚动
        })

        listElement.style.width = list.length * itemWidth + 'px'
        bscroll.refresh()
        this.setState({ bscroll })

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

        bscroll.scrollToElement(itemElement[index], 300,true)

    }
    swriptRight = () => {
        let { bscroll, itemWidth } = this.state
        let { wrapper,listElement, itemElement } = this.getBscrollElement()

        let listRect = listElement.getBoundingClientRect()
        let wrapperRect = wrapper.getBoundingClientRect()


        let slideCount = parseInt(wrapperRect.width / itemWidth)

        let index = slideCount + parseInt(Math.abs(listRect.x) / itemWidth)

        if (index == itemElement.length) return

        bscroll.scrollToElement(itemElement[index], 300, true)

    }

    render() {
        let { list } = this.props
        return (
            <div class="home-slide">
                <div class="slide-wrapper">
                    <ul class="slide-list">
                        {
                            list.map(item => {
                                return (<li key={item.id} class="slide-item">
                                    <div class="slide-item__img">
                                        <CarImage />
                                    </div>
                                    <label>标题</label>
                                </li>)
                            })
                        }
                    </ul>
                </div>
                <span class="iconfont icon-left-circle-fill" onClick={this.swriptLeft}></span>
                <span class="iconfont icon-right-circle-fill" onClick={this.swriptRight}></span>
            </div>
        )
    }
}

HomeSlide.defaultProps = {
    list: [
        { id: 0, label: '标题' }, 
        { id: 1, label: '标题' }, 
        { id: 2, label: '标题' }, 
        { id: 3, label: '标题' }, 
        { id: 4, label: '标题' }, 
        { id: 5, label: '标题' },
    ]
}

