import React, { Component } from 'react';
import { Consumer } from "../Context"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// <i class="fas fa-times-circle"></i>

export default class Todo extends Component {
    style = () => {
        // console.log("style check");
        const { complete } = this.props.todo
        // console.log(complete);
        return { textDecoration: complete ? "line-through" : "none" }
    }
    toggle = (id, dispatch) => {
        dispatch({ type: "TOGGLE", payload: id })
    }
    remove = (id, dispatch) => {
        axios.delete(`/todos/${id}`)
        .then(()=>dispatch({ type: "REMOVE", payload: id }))
        
    }

    render() {

        const { title, _id } = this.props.todo
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    console.log(dispatch, "value", value, ">>>>", this)
                    return <h3 className="text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
                        <FontAwesomeIcon icon={faTimesCircle} onClick={this.remove.bind(this, _id, dispatch)}/> {title}
                        {/* <input type="checkbox" className="m-2 float-right" onChange={this.toggle.bind(this, id, dispatch,)} /> */}
                        <input type="checkbox" className="m-2 float-right" onChange={() => this.toggle(_id, dispatch)} />
                    </h3>
                }}
            </Consumer>

        )
    }
}
