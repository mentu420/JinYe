
import React, { PureComponent } from 'react'
import { 
    Navbar, 
    Nav, 
    NavItem, 
    NavDropdown, 
    Form, 
    FormControl, 
    Button 
} from 'react-bootstrap'

const NAV_LIST=[
    {
        id:0,
        label:'金烨首页',
        href:'#home',
    },
    {
        id:1,
        label:'关于金烨',
        href:'#about',
    },
    {
        id:2,
        label:'电热元件',
        href:'#productList',
    },
    {
        id:3,
        label:'陶瓷元件',
        href:'#productList',
    },
    {
        id:4,
        label:'产品中心',
        href:'#productList',
    },
    {
        id:5,
        label:'生产实力',
        href:'#advantage',
    },
    {
        id:6,
        label:'金烨动态',
        href:'#newList',
    },
    {
        id:7,
        label:'联系我们',
        href:'#contact',
    },
]


export default class Header extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            navList: [...NAV_LIST]
        }
    }
    render() {
        let {navList} = this.state
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            navList.map(item=>{
                            return (<Nav.Link href={item.href}>{item.label}</Nav.Link>)
                            })
                        }
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Button bsStyle="success">Success</Button>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
