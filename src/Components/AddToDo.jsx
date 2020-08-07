import React, { Component } from 'react'

export default class AddToDo extends Component {
    render() {
        return (
            <div>
                <form > 
                    <input type="text" className="form-control rounded-0" placeholder="A faire"/>
                    <button className="form-control rounded-0 btn-secondary" type="submit">Add To Do</button>
                </form>
            </div>
        )
    }
}
