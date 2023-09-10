import React, { useEffect, useState } from 'react'
import WineData from './WineData';
import { calculateStatistics } from './Common';

function Tables() {
    const [Statistics, setStatistics] = useState({});

    useEffect(() => {
        const calculatedStatistics = calculateStatistics(WineData);
        setStatistics(calculatedStatistics);
    }, []);

    const measures = ['Mean', 'Median', 'Mode'];

    return (
        <div>
            <h2 style={{marginLeft: "24px"}}>Class-wise mean, median, mode of
                “Flavanoids”</h2>
            <table >
                <thead>
                    <tr>
                        <th>Measure</th>
                        {Object.keys(Statistics).map((key) => (
                            <th key={key}>Class {key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {measures.map((measure) => (
                        <tr key={measure}>
                            <td>Flavanoids {measure}</td>
                            {Object.keys(Statistics).map((key) => (
                                <td key={key}>
                                    {Statistics[key][measure.toLowerCase()].toFixed(3)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tables