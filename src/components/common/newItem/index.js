import React, { Component } from 'react'
import { Media, Button } from 'react-bootstrap'

import './index.scss'

export default class NewItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    onClick = () => {
        let { item, onSeeMore } = this.props
        if (typeof onSeeMore === 'function') onSeeMore(item)
    }
    render() {
        let { item } = this.props
        return (
            <Media onClick={this.onClick}>
                <div className="new-item__date">
                    <h4>{item.day}</h4>
                    <time>{item.date}</time>
                </div>
                <Media.Body>
                    <h5>{item.title}</h5>
                    <p className="new-item__label">{item.label}</p>
                    <div className="new-item__btn"><Button variant="primary">more</Button></div>
                </Media.Body>
            </Media>
        )
    }
}
NewItem.defaultProps = {
    item: {
        day: '11',
        date: '2020-05',
        title: 'Media Heading',
        label: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo.Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate
        fringilla.Donec lacinia congue felis in faucibus.`
    }
}