import React from "react";
import "./LoadingAnimation.css";

const LoadingAnimation = () => (
    <div className="loading-animation">
        <div className="dot dot1" />
        <div className="dot dot2" />
        <div className="dot dot3" />
        <span className="loading-text">Sending...</span>
    </div>
);

export default LoadingAnimation;