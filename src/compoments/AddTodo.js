import React, { useState } from "react";
import PropTypes from 'prop-types'

const AddTodo = props => {
    const addTodo = props.addTodoFunc

    const [title, setTitle] = useState('')


    const addTodoFormStyle = {
        display: 'flex'
    }

    const addTodoInputStyle = {
        flex: '10',
        padding: '5px'
    }

    const changeTitle = event => {
        // console.log(title)
        setTitle(event.target.value)
    }
    
    const addSingleTodo = event => {
        event.preventDefault()
        if(title !== '') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input
            style={addTodoInputStyle}
            type="text"
            name="title"
            placeholder="Them viec"
            value={title}
            onChange={changeTitle}
            />
            <input type="submit" value="Them" className="btn"/>
        </form>
    )
}

AddTodo.prototype = {
    addTodoFunc: PropTypes.func.isRequired
}


export default AddTodo
