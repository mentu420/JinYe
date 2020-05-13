
import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'

import './index.scss'


const NAV_LIST = [
    {
        eventKey: 0,
        label: '金烨首页',
        href: '#/home',
    },
    {
        eventKey: 1,
        label: '关于金烨',
        href: '#/about',
    },
    {
        eventKey: 2,
        label: '电热元件',
        href: '#productList?id=0',
    },
    {
        eventKey: 3,
        label: '陶瓷元件',
        href: '#productList?id=1',
    },
    {
        eventKey: 4,
        label: '产品中心',
        href: '#/productList',
    },
    {
        eventKey: 5,
        label: '生产实力',
        href: '#/advantage',
    },
    {
        eventKey: 6,
        label: '金烨动态',
        href: '#/newList',
    },
    {
        eventKey: 7,
        label: '联系我们',
        href: '#/contact',
    },
]




export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [...NAV_LIST],
            navIndex: 0
        }
    }

    handleSelect = (index) => {
        this.setState({ navIndex: index })
    }

    render() {
        let { navList, navIndex } = this.state
        return (
            <Navbar bg="light" expand="xl" fixed="top" variant="light" bsPrefix="navbar">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" justify variant="pills" activeKey={navIndex} defaultActiveKey="/home" onSelect={this.handleSelect}>
                        {
                            navList.map(item => {
                                return (<Nav.Link bsPrefix="nav-link" key={item.href} {...item}>{item.label}</Nav.Link>)
                            })
                        }
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
