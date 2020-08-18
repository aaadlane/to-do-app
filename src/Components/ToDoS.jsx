import Todo from "./Todo";
import React, { Component } from 'react';
import { Consumer } from "../Context"

export default class ToDoS extends Component {
    render() {
        return (


            <Consumer>{value => {
                const { todos } = value
                return todos.map(t => <Todo todo={t} key={t.id}> </Todo>)
            }}</Consumer>


        )
    }
}
