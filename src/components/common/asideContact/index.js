import React, { Component } from 'react'
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap'

import './index.scss'

export default class AsideContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 0,
                    title: '电话咨询',
                    icon: 'icon-tel01',
                    href: 'tel:0769-22409719'
                },
                {
                    id: 1,
                    title: '短信咨询',
                    icon: 'icon-youjian',
                    href: 'sms:13711995800'
                },
                {
                    id: 2,
                    title: '在线咨询',
                    icon: 'icon-message',
                    href: '#/contact'
                }
            ]
        }
    }
    render() {
        let { list } = this.state
        let clientWidth = document.body.clientWidth
        return (
            <div className={`aside-position ${clientWidth < 768 ? 'bottom' : 'right'}`}>
                {
                    clientWidth >= 768 && (<ul className="aside-lg">
                        {
                            list.map((item, index) => {
                                return (<li key={item.id}>
                                    <OverlayTrigger
                                        placement={'left'}
                                        overlay={
                                            <Tooltip >
                                                {item.title}
                                            </Tooltip>
                                        }
                                    >
                                        <a href={item.href} >
                                            <Button variant="primary">
                                                <span className={`iconfont ${item.icon}`}></span>
                                            </Button>
                                        </a>
                                    </OverlayTrigger>
                                </li>)
                            })
                        }
                    </ul>)
                }
                {
                    clientWidth < 768 && (<ul className="aside-md">
                        {
                            list.map((item, index) => {
                                return (<li key={item.id}>
                                    <a href={item.href} >
                                        <p className="aside-contact__item">
                                            <span className={`iconfont ${item.icon}`}></span>
                                            <span className="title">{item.title}</span>
                                        </p>
                                    </a>
                                </li>)
                            })
                        }
                    </ul>)
                }
            </div>
        )
    }
}
