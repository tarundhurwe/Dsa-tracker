import React from "react";
import "../assets/css/HomePage.css";
import Header from "./Header";
import Footer from "./Footer";
import { Card } from "./Card";


export default function HomePage({ name }) {
  return (
    <>
      <Header />
      <div className="heading" style={{ textAlign: 'center' }}><h1 className="display-4">{name}</h1></div>
      <div className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi, omnis optio adipisci debitis tempora a, officia asperiores unde sint repellat excepturi!</div>
      <hr />
      <div className="homepage mb-3">
        <div className="home-div">
          <div className="home-content">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
