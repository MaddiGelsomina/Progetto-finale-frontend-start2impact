import React from 'react';
import { ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart, CartesianGrid, Area, Label } from 'recharts';
import "./graphComponents.css";

import { Await } from 'react-router-dom';

function Methan(props) {

    const loader = props.loaderData;

    let result = loader.data.methane.slice(-1);
    let lastvalue = result[0].average;

        return (
        <div>
            <div className="container">
            <h2 className="title">Methan</h2>
            <p className="subtitle">Methane levels from 1983 to present</p>
            
            <div className="info">
                <p>Last Value: {lastvalue}</p>
            </div>

            <React.Suspense fallback={<p>Loading...</p>}>
                <Await resolve={loader.data.methane}>
                {(data) => (
                <ResponsiveContainer width='100%' height={500}>
                <AreaChart data={data} margin={{bottom: 10, left: 10}}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451b7" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#2451b7" stopOpacity={0}/>
                        </linearGradient>
                    </defs>

                    <Area dataKey="average" stroke="#3774FF" fill="url(#color)" />
                    <XAxis dataKey="date" axisLine={false} tickLine={false}>
                        <Label value="Year" offset={-10} position="insideBottom" fill="#4c7482" />
                    </XAxis>
                    <YAxis dataKey="trend" axisLine={false} tickLine={false} tickCount={10}>
                        <Label value="ppm" offset={0} position="insideLeft" fill="#4c7482" angle="270" />
                    </YAxis>

                    <CartesianGrid opacity={0.1} vertical={false}/>
                    <Tooltip contentStyle={{ backgroundColor: "#BCCEF5" }} labelStyle={{ color: "#173E46", textAlign: 'left' }}/>
                </AreaChart>
                </ResponsiveContainer>
                )}
                </ Await>
            </React.Suspense>
    
            </div>
        </div>
        )
}

export default Methan;