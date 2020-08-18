import React from 'react'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
//<i class="fas fa-clipboard-list"></i>


export default function Header() {
    return (
        <div className="card bg-info text-center text-light rounded-0">
            <h1 className="display-4">
                <FontAwesomeIcon icon={faClipboardList}/>
                <span className="text-dark mr-3">OURS</span> ToDoList
            </h1>
            
        </div>
    )
}
