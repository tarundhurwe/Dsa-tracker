import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Card.css'
import Spinner from './Spinner'

export const Card = () => {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        try {
            setLoading(true)
            await fetch('http://127.0.0.1:5000')
                .then(result => result.json())
                .then(data => setResponse(data))
        }
        catch (err) {
            try {
                setLoading(true)
                await fetch('http://192.168.29.150:5000')
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
        finally {
            setLoading(false)
        }
    }

    function setLocalStorage(dataset) {
        localStorage.setItem("dataset", dataset)
    }

    return (
        <>
            {loading ? <><Spinner /><br />Loading.......</> : response.map((data) => {
                return (<div className="card mt-2 mb-3" key={data.id}>
                    <div className="card-header">
                        <h5 className="card-title" style={{ marginBottom: "0px", textAlign: "center" }}>{data.name}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Total number of problems : {data.total}</p>
                        <div className="progress mb-3">
                            <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: "35%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="button" onClick={() => setLocalStorage(data.name)}>
                            <Link to="/problems" className="btn btn-primary">Get started</Link>
                        </div>
                    </div>
                </div>)
            })}
        </>
    )
}
