import React from 'react'
import '../assets/css/Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <footer className='navbar-dark bg-dark text-light py-2'>
        <p className='text-center footer-text'>
          &#174; & &#169; <a href="https://github.com/tarundhurwe" rel="noreferrer" target={'_blank'} style={{ color: "white", textDecoration: "none" }}>Tarun Kumar Dhurwe</a>
        </p>
      </footer>
    </div>
  )
}
