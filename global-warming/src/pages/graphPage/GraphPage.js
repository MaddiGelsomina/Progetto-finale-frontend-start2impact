import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './graphPage.css';
import { Route, useLoaderData, Routes } from 'react-router-dom';

import Temperature from '../../components/graphComponents/Temperature';
import Co2 from '../../components/graphComponents/Co2'
import Methan from '../../components/graphComponents/Methan';
import No2 from '../../components/graphComponents/No2';
import PolarIce from '../../components/graphComponents/PolarIce';


function GraphPage() {

    const loaderData = useLoaderData(); 
  
    return (
      <div className="page">
        <Navbar />
        <div className="container">
        <Routes>
            <Route exact path={'/temperature'} element={<Temperature loaderData={loaderData}/>}/>
            <Route exact path={'/co2'} element={<Co2 loaderData={loaderData} />} />
            <Route exact path={'/methane'} element={<Methan loaderData={loaderData}/>} />
            <Route exact path={'/nitrous-oxide'} element={<No2 loaderData={loaderData}/>} />
            <Route exact path={'/arctic'} element={<PolarIce loaderData={loaderData}/>} />
          </Routes>
        </div>
          
  
      </div>
    )
  }
  
  export default GraphPage;