import React from "react";
import './Components.css'

class Nav extends React.Component{
    render(){
        return <div className="nav">
            <h1>Quizz<span>App</span></h1>
            <div className="contentButton">
                <div className="btnStart">
                    <h2>Iniciar Quizz</h2>
                </div>
                <div className="btnReg">
                    <h2>Registrarse</h2>
                </div>
            </div>
        </div>
    }
}

export default Nav