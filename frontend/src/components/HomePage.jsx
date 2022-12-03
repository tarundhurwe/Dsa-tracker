import React, { useEffect, useState } from "react";
import "../assets/css/HomePage.css";
import Header from "./Header";
import Footer from "./Footer";
import { Card } from "./Card";
import Spinner from "./Spinner";

export default function HomePage({ name }) {
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
  return (
    <>
      <Header />
      <div className="heading" style={{ textAlign: 'center' }}><h1 className="display-4">{name}</h1></div>
      <div className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi, omnis optio adipisci debitis tempora a, officia asperiores unde sint repellat excepturi!</div>
      <hr />
      <div className="homepage mb-3">
        <div className="home-div">
          <div className="home-content">
            {loading ? <Spinner /> : response.map((data) => {
              return (<Card dataset={data} key={data.id} />)
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
