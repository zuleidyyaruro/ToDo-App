import React from 'react';
import '../styles/Form.css';

const Form = ({handleTodoQuery, handleSubmit, todoQuery}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleTodoQuery} 
            type="text"  
            placeholder="Write Todo"
            value={todoQuery.title} />
            <button>Send</button>
        </form>
    )
}

export default Form
