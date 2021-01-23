import React from "react";
import about from '../../images/about.gif'

const About = (props) => {
    return (
        <div className="m-3 text-center text-white">
            <img className="w-50 rounded-circle" src={about} alt={"about"}/>
            <h3>О соцсети:</h3>
            <div className="card bg-dark p-2 mb-2">
                <div><b>При разработке данной соцсети были использованы библиотеки JS:</b></div>
                <div>
                    <span className="badge badge-success">react</span>{" "} 
                    <span className="badge badge-success">react-dom</span>{" "}
                    <span className="badge badge-success">react-router-dom</span>{" "}
                    <span className="badge badge-success">react-scripts</span>{" "} 
                    <span className="badge badge-primary">react-redux</span>{" "} 
                    <span className="badge badge-primary">redux</span>{" "} 
                    <span className="badge badge-primary">redux-form</span>{" "} 
                    <span className="badge badge-primary">redux-thunk</span>{" "} 
                    <span className="badge badge-info">axios</span>{" "} 
                    <span className="badge badge-warning">bootstrap</span>{" "} 
                    <span className="badge badge-secondary">typescript</span>
                </div>
                <div>Используется сторонний серверный API сайта <b>social-network.samuraijs.com</b></div>
            </div>
            <div className="card bg-dark p-2">
                <div>Для того, чтобы войти без регистрации введите:</div>
                <div><b>Тестовый логин:</b> free@samuraijs.com</div>
                <div><b>Тестовый пароль:</b> free</div>
            </div>
        </div>
    )
}

export default About