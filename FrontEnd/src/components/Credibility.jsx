import React from "react";
import { Search, ShieldCheck, Handshake, Clock, Users} from "lucide-react";

import './Credibility.css'

import Nav from "./Nav";

const Credibility = () =>{

    const criteria = [
        { icon: <ShieldCheck size={24} />, title: "Credibility", description: "Assessment based on objective analysis and data points." },
        { icon: <Handshake size={24} />, title: "Trustworthiness", description: "Evaluation of authenticity, reliability, and integrity." },
        { icon: <Clock size={24} />, title: "Fame Longevity", description: "Analysis of continued relevance and lasting impact." },
        { icon: <Users size={24} />, title: "Meaningful Engagement", description: "Assessment of authentic interactions and community involvement." },
      ];

    return(
        <>
            <Nav />
            <div className="credit">
                <div className="credibility-container">
                    <h2 className="title">Credibility</h2>
                    <p className="subtitle">Measure the credibility of your favorite personality.</p>
                    <div className="search-bar">
                        <Search className="search-icon" size={20} />
                        <input type="text" placeholder="Search personality" className="search-input" />
                    </div>
                    <button className="search-button">Search</button>
                </div>

                <div className="evaluation-container">
                    <h2>How We Evaluate Credibility</h2>
                    <div className="criteria-list">
                        {criteria.map((item, index) => (
                        <div className="criteria-item" key={index}>
                            <div className="icon-box">{item.icon}</div>
                            <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <button style={{marginTop: "5%", marginBottom: "5%", backgroundColor: "red", fontSize: "2rem"}} className="search-button">Check the Credibility score</button>
            </div>
        </>
    )
}

export default Credibility