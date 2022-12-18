import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../assets/css/profile.css'
import { LoginForm } from './LoginForm'

export const Profile = () => {

    function toggle1() {
        document.querySelector('.signup').style.display = "none"
        document.querySelector('.login').style.display = 'block'
        document.querySelector('#toggle1').style.background = '#106e42'
        document.querySelector('#toggle2').style.background = '#198754'
    }

    function toggle2() {
        document.querySelector('.login').style.display = "none"
        document.querySelector('.signup').style.display = 'block'
        document.querySelector('#toggle2').style.background = '#106e42'
        document.querySelector('#toggle1').style.background = '#198754'
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="toggle-button">
                    <div className="toggle1 input-group-text" id="toggle1" onClick={toggle1}>Login</div>
                    <div className="toggle2 input-group-text" id="toggle2" onClick={toggle2}>signup</div>
                </div>
                <LoginForm />
            </div>
            <Footer />
        </>
    )
}
