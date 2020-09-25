// import React, { Component } from "react";

// class Time extends Component {

//     state = {
//         time: new Date().toLocaleString(),
//     };


//     componentDidMount() {
//         this.intervalID = setInterval(() => this.tick(), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.intervalID);
//     }

//     tick() {
//         this.setState({
//             time: new Date().toLocaleString(),
//         });
//     }

//     render() {
//         return (
//             <div className="clock_wrapper">
//                 <p className="clock"> {this.state.time}.</p>
//             </div>
//         )
//     }
// }

// export default Time;


import React, { useState, useEffect } from 'react'


const Time = props => {

    const [time, setTime] = useState(new Date().toLocaleString())

    const timeUpdate = () => {
        return setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
    }

    useEffect(() => {
        const interval = timeUpdate();

        return function cleanup() {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="footer">
            <p className="clock">{time}</p>
        </div>
    )
}

export default Time;
