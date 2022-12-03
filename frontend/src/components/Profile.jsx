import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../assets/css/profile.css'

export const Profile = () => {
    return (
        <>
            <Header />
            <div className='profile-div my-3'>Coolest profile page the world had ever seen.</div>
            <Footer />
        </>
    )
}
