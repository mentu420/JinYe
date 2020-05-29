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
                    icon: 'icon-tel01'
                },
                {
                    id: 1,
                    title: '短信咨询',
                    icon: 'icon-youjian'
                },
                {
                    id: 2,
                    title: '在线咨询',
                    icon: 'icon-message'
                }
            ]
        }
    }
    render() {
        let { list } = this.state
        let clientWidth = document.body.clientWidth
        return (
            <div className={`aside-position ${clientWidth < 768 && 'footer'}`}>
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
                                        <Button variant="primary"><span className={`iconfont ${item.icon}`}></span></Button>
                                    </OverlayTrigger>
                                </li>)
                            })
                        }
                    </ul>)
                }
                {/* {
                    clientWidth < 768 && (<ul className="aside-md">
                        {
                            list.map((item, index) => {
                                return (<li key={item.id}>
                                    <OverlayTrigger
                                        placement={'left'}
                                        overlay={<Tooltip >{item.title}</Tooltip>}
                                    >
                                        <Button variant="primary"><span className={`iconfont ${item.icon}`}></span></Button>
                                    </OverlayTrigger>
                                </li>)
                            })
                        }
                    </ul>)
                } */}
            </div>
        )
    }
}
