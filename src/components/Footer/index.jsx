import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handleCheckAll = (e) => {
        this.props.checkAllTodo(e.target.checked)
    }
    handleClearAllDone = () => {
        if (window.confirm('Are you sure to clear all done tasks?')) {
            this.props.clearAllDone()
        }

    }

    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
        const total = todos.length
        return (
            <div className='todo-footer'>
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>done {doneCount}</span> / total {total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger"> delete all finish tasks</button>
            </div>
        )
    }
}
