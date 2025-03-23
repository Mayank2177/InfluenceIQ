import React from "react";
import { useState } from "react";

import "./Template.css"

const Template = () =>{

    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    const [credibility, setCredibility] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate fetching data
        setInfo(`Information about ${name}`);
        setCredibility(null);
    };

    const calculateCredibility = () => {
        // Simulate credibility calculation
        setCredibility(Math.floor(Math.random() * 100) + 1);
    };

    return(
        <>
            <div className="container2">
            <h2>Personality Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Personality Name:</label><br />
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Personality Name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                /><br /><br />
                <button type="submit">Submit</button>
            </form>

            {info && <p>{info}</p>}
            {credibility !== null && <p className="crad-para">Credibility Score: {credibility}</p>}

            {info && (
                <button className="credibility-button" onClick={calculateCredibility}>
                    Calculate Credibility
                </button>
            )}
        </div>
        </>
    )
}

export default Template