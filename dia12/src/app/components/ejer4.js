"use client"
import { useState } from "react";

function BotonHover() {

    const [hover, setHover] = useState(false)

    const buttonStyle = {
        backgroundColor: hover ? "darkblue" : "blue",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

    return(
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <button
            style={buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
                Hover sobre mi
            </button>
        </div>
    );
};

export default BotonHover;