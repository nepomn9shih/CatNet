import React from 'react';
import error from '../../images/error.gif'

const Error404 = () => {
    return (
        <div className="m-3 text-center text-white">
            <img className="w-50 rounded-circle" src={error} alt={error}/>
        <h3>404: Страница не найдена!</h3>
        </div>
    )
}

export default Error404