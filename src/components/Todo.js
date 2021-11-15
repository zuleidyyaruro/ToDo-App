import React from 'react';
import '../styles/Todo.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faSquare, faCircle} from '@fortawesome/free-solid-svg-icons';

const Todo = ({singleTodo, handleChangeCompleteTodo, menuButtonClick}) => {

    const {title, completed, id} = singleTodo;

    return (
        <div className="card">
            <div className="card-title">
                <FontAwesomeIcon icon={faCircle} size="lg"/>
                <p>{title}</p>
            </div>

            <button onClick={() => handleChangeCompleteTodo(id, menuButtonClick)}>
                {
                    completed ?
                        <FontAwesomeIcon icon={faCheckSquare} size="lg"/>
                        :
                        <FontAwesomeIcon icon={faSquare} size="lg"/>
                }
            </button>
        </div>
    )
}

export default Todo
