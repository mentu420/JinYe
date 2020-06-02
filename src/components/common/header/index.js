
import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap'
import { withRouter } from "react-router-dom";

import CardImg from 'components/common/cardImage/'
import './index.scss'
import logoIcon from 'assets/images/logo-normal.png'

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
    // {
    //     eventKey: 2,
    //     label: '电热元件',
    //     href: '#/productList?id=1',
    // },
    // {
    //     eventKey: 3,
    //     label: '陶瓷元件',
    //     href: '#/productList?id=2',
    // },
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
        label: '新闻动态',
        href: '#/newList',
        list: [
            {
                eventKey: 0,
                label: '行业动态',
                href: '#/newList?id=0',
            },
            {
                eventKey: 1,
                label: '金烨动态',
                href: '#/newList?id=1',
            }
        ]
    },
    {
        eventKey: 7,
        label: '联系我们',
        href: '#/contact',
    },
]




class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [...NAV_LIST],
            navIndex: 0
        }
    }
    componentDidMount() {
        let index = sessionStorage.getItem('headerNavIndex')
        if (!index) {
            this.props.history.push({ pathname: '/home' })
            return
        }
        this.setState({ navIndex: index })
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            let { navList } = this.state
            let [result = null] = navList.filter(option => {
                return option.href.replace('#', '') == this.props.location.pathname + this.props.location.search
            })
            if (!result) return
            this.setState({ navIndex: result.eventKey })
        }
    }

    handleSelect = (index) => {
        sessionStorage.setItem('headerNavIndex', index)
        this.setState({ navIndex: index })
    }

    searchSubmit = (event) => {
        event.preventDefault();
        console.log(this.searchInput.value)
        this.props.history.push({ pathname: '/productList', query: { id: 0 } })
    }

    render() {
        let { navList, navIndex } = this.state
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col>
                            <Navbar expand="xl" fixed="top" variant="light" bsPrefix="navbar" collapseOnSelect>
                                <Navbar.Brand href="#home">
                                    <div className="brand-logo">
                                        <CardImg fit={'contain'} src={logoIcon} />
                                    </div>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto" justify variant="pills" activeKey={navIndex} defaultActiveKey="/home" onSelect={this.handleSelect}>
                                        {
                                            navList.map((item, index) => {
                                                let { list } = item
                                                return (
                                                    list ? (
                                                        <NavDropdown key={item.eventKey} title={item.label} id="basic-nav-dropdown">
                                                            {
                                                                list.map((option,i) => {
                                                                    return (<NavDropdown.Item key={i} href={option.href}>{option.label}</NavDropdown.Item>)
                                                                })
                                                            }
                                                        </NavDropdown>
                                                    ) : <Nav.Link bsPrefix="nav-link" key={item.href} {...item}>{item.label}</Nav.Link>

                                                )
                                            })
                                        }
                                    </Nav>
                                    <Form onSubmit={this.searchSubmit} inline>
                                        <FormControl ref={el => this.searchInput = el} type="text" placeholder="Search" className="mr-sm-2" />
                                        <div className="nav-search__btn">
                                            <span className="iconfont icon-search"></span>
                                            <Button bsPrefix="search-btn" variant="outline-success" type="submit">search</Button>
                                        </div>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default withRouter(Header)