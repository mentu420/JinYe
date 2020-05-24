import React, { Component } from 'react'
import { Jumbotron, Button, Badge } from 'react-bootstrap'
import VerticalSpace from 'components/common/verticalSpace'

import './index.scss'

export default class index extends Component {
    goHome=()=>{
        this.props.history.push({pathname:'/home'})
    }
    render() {
        let h = document.body.clientHeight
        return (
            <div className="no-found__box" style={{ height: h }}>
                <div className="no-fount__content">
                    <Jumbotron>
                        <h1>404!</h1>
                        <p>不小心出错了，请返回首页</p>
                        <VerticalSpace />
                        <p>
                            <Button variant="primary" onClick={this.goHome}>home</Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}
