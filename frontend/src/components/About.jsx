import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../assets/css/about.css'

export const About = () => {
    return (
        <>
            <Header />
            <div className='about-div mt-3 mb-3'>
                <div className='main-div m-4'>
                    <div className="heading" style={{ textAlign: 'center' }}>
                        <h1 className="display-4">About Code Badger</h1>
                    </div>
                    <div className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non vero modi ducimus illum velit, similique labore. Soluta ut voluptates accusantium eos facere in asperiores quas molestias officia dolorum! Animi eos quis eligendi hic sequi soluta laborum officiis, quos corrupti sit harum minima officia reiciendis totam quod perspiciatis vero consequuntur mollitia sint? Eos dolores enim veniam commodi. Vitae cupiditate eaque voluptas optio enim impedit perferendis exercitationem suscipit
                    </div>
                </div>
                <hr />
            </div>
            <Footer />
        </>
    )
}
