import React, { useEffect, useState } from "react";
import "../assets/css/HomePage.css";
import Header from "./Header";
import Footer from "./Footer";
import { Card } from "./Card";

export default function HomePage({ name }) {
  const [response, setResponse] = useState([])

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    await fetch('http://127.0.0.1:5000')
      .then(result => result.json())
      .then(data => setResponse(data))
  }
  return (
    <>
      <Header />
      <div className="heading" style={{ textAlign: 'center' }}><h1 className="display-4">{name}</h1></div>
      <div className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi, omnis optio adipisci debitis tempora a, officia asperiores unde sint repellat excepturi!</div>
      <hr />
      <div className="homepage">
        <div className="home-div">
          <div className="home-content">
            {response.map((data) => {
              return (<Card dataset={data} key={data.id} />)
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
