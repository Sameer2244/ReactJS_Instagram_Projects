import React, { useEffect, useState } from 'react';
import '../css/digitalclock.css'
const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timeInterval);
        }
    }, [])

    return (
        <div>
            <h2>Digital Clock</h2>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
};

export default DigitalClock;
