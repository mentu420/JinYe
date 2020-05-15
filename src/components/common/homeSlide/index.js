import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BScroll from 'better-scroll'
import CarImage from 'components/common/cardImage'

import './index.scss'

export default class HomeSlide extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.initBscroll()
    }
    initBscroll = () => {
        let { list } = this.props
        const wrapper = document.querySelector('.slide-wrapper')
        const listElement = document.querySelector('.slide-list')
        //选中DOM中定义的 .wrapper 进行初始化
        const scroll = new BScroll(wrapper, {
            scrollX: true,  //开启横向滚动
            click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
            scrollY: false, //关闭竖向滚动
        })
        listElement.style.width = list.length * 317 + 'px'
        scroll.refresh()
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
                <span class="iconfont icon-left-circle-fill"></span>
                <span class="iconfont icon-right-circle-fill"></span>
            </div>
        )
    }
}

HomeSlide.defaultProps = {
    list: [{ id: 0, label: '标题' }, { id: 1, label: '标题' }, { id: 2, label: '标题' }, { id: 3, label: '标题' }]
}

