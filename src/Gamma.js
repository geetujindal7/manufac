import React, { useEffect, useState } from 'react';
import WineData from './WineData';
import { calculateStatisticsGamma } from './Common';

const WineGammaStatistics = () => {
    const [StatisticsGamma, setStatisticsGamma] = useState({});

    useEffect(() => {
        // Calculate class-wise statistics for Gamma
        const calculatedStatistics = calculateStatisticsGamma(WineData);
        setStatisticsGamma(calculatedStatistics);
    }, []);

    return (
        <div>
            <h2 style={{marginLeft: "24px"}}>Class-wise Statistics for Gamma</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Measure</th>
                        {Object.keys(StatisticsGamma).map((className) => (
                            <th key={className}>Class {className}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Gamma Mean</td>
                        {Object.keys(StatisticsGamma).map((className) => (
                            <td key={className}>{StatisticsGamma[className].Mean}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Gamma Median</td>
                        {Object.keys(StatisticsGamma).map((className) => (
                            <td key={className}>{StatisticsGamma[className].Median}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Gamma Mode</td>
                        {Object.keys(StatisticsGamma).map((className) => (
                            <td key={className}>{StatisticsGamma[className].Mode}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default WineGammaStatistics;
