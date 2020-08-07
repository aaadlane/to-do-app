import React, { Component } from 'react'
const Context = React.createContext();


export class Provider extends Component {
    state ={
        todos: [
            {
                id: 1,
                title: "check emails",
                Complete: false
            },
            {
                id: 2,
                title: "check voicemails",
                Complete: false
            },
            {
                id: 3,
                title: "check report",
                Complete: false
            },
        ]
    }
    render() {
        return (
            <div>
                <Context.Provider value={this.state}> 
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer