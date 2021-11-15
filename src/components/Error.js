import React from 'react';
import '../styles/Error.css';

const Error = ({message}) => {
    return (
        <div className="error-container">
            {message}
        </div>
    )
}

export default Error
