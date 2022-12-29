import React, { lazy, Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../assets/css/profile.css'
import { LoginForm } from './LoginForm'
import { useState } from 'react'
import { useEffect } from 'react'

export const Profile = () => {

    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        try {
            setLoading(true)
            await fetch('http://127.0.0.1:5000/auth/verified')
                .then(result => result.json())
                .then(data => setResponse(data))
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

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
            {response['verified'] ? console.log("logged in ") :
                <div className="container">
                    <div className="toggle-button">
                        <div className="toggle1 input-group-text" id="toggle1" onClick={toggle1}>Login</div>
                        <div className="toggle2 input-group-text" id="toggle2" onClick={toggle2}>signup</div>
                    </div>
                    <LoginForm />
                </div>
            }
            <Footer />
        </>
    )
}
