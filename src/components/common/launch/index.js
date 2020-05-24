import React, { Component } from 'react'
import { Jumbotron, Button, Badge } from 'react-bootstrap'
import VerticalSpace from 'components/common/verticalSpace'
import CardImage from 'components/common/cardImage'

import './index.scss'
import logoIcon from 'assets/images/logo.png'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 3,
            visible: false
        }
        this.timer = null
    }
    componentDidMount() {
        if (sessionStorage.getItem('launch')) {
            this.setState({ visible: true })
            return
        }
        sessionStorage.setItem('launch', 1)
        this.countDown()
    }
    componentWillUnmount() {

    }
    countDown = () => {
        this.timer = setInterval(() => {
            let { time, visible } = this.state
            console.log('还在继续', visible)
            if (time == 0 || visible) {
                clearInterval(this.timer)
                this.setState({ visible: true })
                return
            }
            this.setState({ time: --time })
        }, 1000);
    }
    jump = () => {
        this.setState({ visible: true })
    }
    render() {
        let { time, visible } = this.state
        return (
            <div className={`lanunch-box ${visible && 'visible'}`}>
                <div className="lanunch-content">
                    <Jumbotron>
                        <div className="launch-logo">
                            <CardImage src={logoIcon} />
                        </div>
                        <VerticalSpace />
                        <h1>Hello, Welcome to Jinye website</h1>
                        <p>您好，欢迎进入金烨官网</p>
                        <VerticalSpace />
                        <p>
                            <Button variant="primary" onClick={this.jump}>
                                <Badge variant="light">{time}s</Badge> 自动跳过
                            </Button>
                        </p>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}
