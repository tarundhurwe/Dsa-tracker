import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Card.css'

export const Card = ({ dataset }) => {
    return (

        <div className="card m-3">
            <div className="card-header">
                <h5 className="card-title" style={{ marginBottom: "0px", textAlign: "center" }}>{dataset.name}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">Total number of problems : {dataset.total}</p>
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "35%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="button">
                    <Link to="/" className="btn btn-primary">Get started</Link>
                </div>
            </div>
        </div>
    )
}
