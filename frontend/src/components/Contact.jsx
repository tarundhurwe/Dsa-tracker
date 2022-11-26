import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../assets/css/Contact.css'
import { Link } from 'react-router-dom'

export const Contact = () => {
    return (
        <>
            <Header />
            <div className='main-div m-4'>
                <div className="heading" style={{ textAlign: 'center' }}><h1 className="display-4">Get in touch</h1></div>
                <div className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, atque?</div>
            </div>
            <div className='contact-form mt-5'>
                <div className="card contact-card">
                    <div className="card-header contact-card-header">Contact us</div>
                    <form action="">
                        <div className="form-floating mb-3">
                            <input type='text' className="form-control" id="floatingInput" placeholder="Your name" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type='email' className="form-control" id="floatingInput" placeholder="example@email.com" />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Your message ....." id="floatingTextarea2" style={{ height: "150px" }}></textarea>
                            <label htmlFor="floatingTextarea2">Message</label>
                        </div>
                        <div className="button mt-4">
                            <Link to="/" className="btn btn-primary">Submit</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
