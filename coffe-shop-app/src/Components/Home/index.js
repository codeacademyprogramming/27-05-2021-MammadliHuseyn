import React from 'react';
import { Animated } from "react-animated-css";

function Home() {
    return (
        <div id='home'>
            <Animated animationIn="slideInDown" animationOut="fadeOut">
                <h1>Welcome Starbucks</h1>
            </Animated>
        </div>
    )
}

export default Home
