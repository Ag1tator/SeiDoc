import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from "axios"

class Collapsible extends React.Component {
    ref = React.createRef()     //Helloをimport

    constructor(props) {
        super(props)
        this.state = {
            buttonToggle: false
        }
    }

    componentDidMount() {
        //Helloを非表示
        this.ref.current.style.height = '0px'
    }

    toggleCollapse = () => {
        if (this.ref.current.style.height !== '0px') {
            this.setState({
                buttonToggle: false
            })
            this.ref.current.style.height = '0px'
        } else {
            this.setState({
                buttonToggle: true
            })
            this.ref.current.style.height = `${this.ref.current.scrollHeight}px`
        }
    }

    handle_requests = (text) => {
        console.log(text)
        const url = process.env.REACT_APP_URL
        const params = '/category?category='
        const headers = {
            'Content-Type': 'application/json'
        }
        axios
            .get(url + params + text, headers)
            .then(
                (results) => {
                    console.log(results.data)
                    if (results.data !== null) {
                        this.props.changeCategory(results.data)
                        this.props.changeTitle(text)
                        this.props.history.push('/category')
                    }
                },
                (error) => {
                    console.log(error)
                })
    }

    render() {
        return (
            <Fragment>
                <div id="categoryBar">
                    <li onClick={()=>this.handle_requests(this.props.category)}>{this.props.category}</li>
                    <button className={this.state.buttonToggle ? "openButton" : "closeButton"} onClick={this.toggleCollapse}></button>
                </div>
                <div
                    ref={this.ref}
                    style={{
                        overflow: 'hidden',
                        transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    }}
                >
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Collapsible)