import React, { useEffect, useState } from 'react'
import Spinner from "./Spinner"
import "../assets/css/problems.css"

export const ProblemList = () => {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [problemset, setProblemset] = useState("blind75")

    useEffect(() => {
        setProblemset(localStorage.getItem('dataset'))
        loadData(localStorage.getItem('dataset'));
    }, [])

    const loadData = async (data) => {
        try {
            setLoading(true)
            await fetch('http://127.0.0.1:5000/' + data)
                .then(result => result.json())
                .then(data => setResponse(data))
        }
        catch (err) {
            try {
                setLoading(true)
                await fetch('http://192.168.29.150:5000/' + data)
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

    function toggle(pos) {
        console.log(pos)
        let ele = document.getElementsByClassName('toggle-status')[pos]
        let original = window.getComputedStyle(ele, null).getPropertyValue('color')
        if (original === 'rgb(33, 37, 41)') {
            document.getElementsByClassName('toggle-status')[pos].style.color = 'rgb(0, 128, 0)';
        }
        else {
            document.getElementsByClassName('toggle-status')[pos].style.color = 'rgb(33, 37, 41)';
        }
    }
    return (
        <>
            <h1 className="mt-2 problem-set-name" style={{ textAlign: "center", textTransform: "capitalize" }}>{problemset}</h1>
            <div className='mb-4' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>{loading ? <><Spinner /> <br />Loading......</> : response.map((data) => {
                return (
                    <div className="card mt-2 mb-2 dispdiv" key={data.id}>
                        <div className="card-body" id={data.id} style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className='problem-div problem-num' style={{ display: "none" }}>{data.count}.</div>
                            <div className='problem-div problem-num'>{data.count}.</div>
                            <div className='problem-div problem-link'><a href={data.link} rel="noreferrer" target={'_blank'}>{data.problem}</a></div>
                            <div className='problem-div notes'><i className="bi bi-journal-bookmark"></i></div>
                            <div className='problem-div status toggle-status' onClick={() => toggle(data.count - 1)}><i className="bi bi-check2-circle"></i></div>
                        </div>
                    </div>
                )
            })}</div>
        </>
    )
}
