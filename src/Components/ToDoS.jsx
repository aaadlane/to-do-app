import Todo from "./Todo";
import React, { Component } from 'react';
import {Consumer} from "../Context"

export default class ToDoS extends Component {
    render() {
        return (
        <Consumer>{value => {}}</Consumer>
            <div>
               <Todo />
               <Todo /> 
               <Todo /> 
               <Todo /> 

            </div>
        )
    }
}
