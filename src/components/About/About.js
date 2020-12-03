import React from "react";
import about from '../../images/about.gif'

const About = (props) => {
    return (
        <div className="m-3 text-center text-white">
        <img className="w-50 rounded-circle" src={about} alt={"about"}/>
        <h3>О соцсети:</h3>
        <div className="card bg-dark p-2">
            <div>Данная соцсеть использует серверный API сайта</div>
            <div className="item"><a href="https://social-network.samuraijs.com">https://social-network.samuraijs.com</a></div>
            <div>Для того, чтобы войти без регистрации введите:</div>
            <div><b>Тестовый логин:</b> free@samuraijs.com</div>
            <div><b>Тестовый пароль:</b> free</div>
        </div>
    </div>
    )
}

export default About