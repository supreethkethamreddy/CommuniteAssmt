import React, { useState, useEffect } from 'react'
import './Main.css'
import axios from 'axios'
import img from "../../../images/bg.png";

function Main() {
  const [title, setTitle] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeaderText = async () => {
      try {
        const response = await axios.get('https://communite-assmt-otis-b9fxcbq87-supreethkethamreddys-projects.vercel.app/api/content/header');
        setTitle(response.data.value);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching header text:', error);
        // Fallback to default title if API fails
        setTitle("Hyper boost your <span>Revenue Management, Marketing</span> and Commercial Functions with Business Ready AI");
        setIsLoading(false);
      }
    };

    fetchHeaderText();
  }, []);

  return (
    <div className="container">
      

        <div className="left">
          <img src={img} className="leftimage"/>
            {!isLoading && (
                <h1 
                    className="title"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            )}
            <p className="description">
                Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.
            </p>
            <button className="get-started">Get Started</button>
        </div>
        <div className="right">
        </div>
    </div>
  )
}

export default Main