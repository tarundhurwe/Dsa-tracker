import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../assets/css/about.css'
import images from '../assets/images.json'

export const About = () => {
    return (
        <>
            <Header />
            <div className='about-div mt-3 mb-3'>
                <div className='main-div m-4'>
                    <div className="heading" style={{ textAlign: 'center' }}>
                        <h1 className="display-4">About Code Badger</h1>
                    </div>
                    <div className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, praesentium ipsam nam illo expedita obcaecati officiis nobis ad illum nihil eligendi, et officia atque recusandae error. Quos repellendus est delectus totam doloremque tenetur adipisci, et ipsa autem aut consequuntur hic deleniti maiores quisquam aliquid.</div>
                </div>
                <hr />
                <div className="heading" style={{ textAlign: 'center' }}>
                    <h1 className="display-7">Meet our team</h1>
                </div>
                <p className="card-text" style={{ width: "80%", margin: "auto" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet tempora ratione numquam dolorem earum culpa quis quia, repellat blanditiis.</p>
                <div className="team-class" style={{ display: 'block' }}>
                    <div className="team">
                        {images.map((image) => {
                            return (<div className="card m-5" style={{ width: "18rem" }} key={image.id}>
                                <a href={image.github} rel="noreferrer" target={'_blank'}><img src={image.link} className="card-img-top" alt="Image" style={{ minHeight: "11rem", maxHeight: "11rem" }} /></a>
                                <div className="card-body">
                                    <h5 className="card-title">{image.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{image.work}</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo. Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
