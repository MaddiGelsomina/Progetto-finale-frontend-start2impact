import React from 'react';
import gloWarmVideo from '../../assets/gloWarmVideo.mp4';
import "./main.css";
import Navbar from '../../components/navbar/Navbar';


const Main = () => {
    return (
      <div className='main'>
        <div className='navigation'>
          <Navbar />
        </div>
          <div className="overlay"></div>
          <video src={gloWarmVideo} autoPlay loop muted />
          <div className="content">
              <h1>Protect Our Future</h1>
              <p>Global Warming and Climate Change Data</p>
          </div>
      </div>
    )
  }
  
  export default Main;
