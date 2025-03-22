import React from "react";
import Nav from "./Nav";

import  "./UserProfile.css"
import EngagementChart from "./EngagementChart";

import user from '../assets/pic-2.jpeg'

const Profile = () =>{

    const data = [
      { month: "Jan", engagement: 4.5 },
      { month: "Feb", engagement: 6.8 },
      { month: "Mar", engagement: 5.2 },
      { month: "Apr", engagement: 7.1 },
      { month: "May", engagement: 9.3 },
      { month: "Jun", engagement: 8.0 },
      { month: "jul", engagement: 5.2 },
      { month: "Aug", engagement: 7.1 },
      { month: "Sep", engagement: 9.3 },
      { month: "Oct", engagement: 8.0 },
    ];

    return(
        <>
            <Nav />
            <div className="profile-container">
                <div className="profile-nav">
                    <a>dashboard</a>
                    <a>/</a>
                    <a>public figure</a>
                </div>
                <div className="user-details">
                    <img src={user}></img>
                    <h2>Name</h2>
                    <h2 style={{color: "#838383", fontSize: "1.3rem"}}>@User-Name</h2>
                    <button>Follow</button>
                </div>

                <div className="credibility-container">
                    <h2 className="title">Credibility Score</h2>

                    {/* Score Cards */}
                    <div className="score-cards">
                        <div className="score-card">
                        <h1>85</h1>
                        <p>CrediRank Score</p>
                        </div>
                        <div className="score-card">
                        <h1>High Credibility</h1>
                        <p>Rating</p>
                        </div>
                    </div>

                    {/* Influence Trend Section */}
                    <div className="influence-card">
                        <div className="influence-info">
                        <h3>Influence Trend</h3>
                        <p>See how Sophia Carter's influence has changed over the last year.</p>
                        </div>
                        <button className="view-report-btn">View Report</button>
                    </div>
                </div>

                <div className="graph">
                    <h1>Social Media Performance</h1>
                    <div className="chart">
                        <EngagementChart data = {data} />
                    </div>
                    <div className="stats-container">
                        <div className="stat-card">
                            <p>Total Followers</p>
                            <h2>5M</h2>
                        </div>
                        <div className="stat-card">
                            <p>Engagement Rate</p>
                            <h2>7.2%</h2>
                        </div>
                        <div className="stat-card">
                            <p>Posts/Month</p>
                            <h2>12</h2>
                        </div>
                    </div>
                </div>

                <div className="demographics-container">
                    <h2>Audience Demographics</h2>
                    <div className="demographics-grid">
                        <div className="demographics-item">
                        <p className="label">Age Range</p>
                        <p className="value">18–34</p>
                        </div>
                        <div className="demographics-item">
                        <p className="label">Gender Ratio</p>
                        <p className="value">60% Female, 40% Male</p>
                        </div>
                        <div className="demographics-item">
                        <p className="label">Top Locations</p>
                        <p className="value">United States, UK, Canada</p>
                        </div>
                        <div className="demographics-item">
                        <p className="label">Interests</p>
                        <p className="value">Fashion, Lifestyle, Beauty</p>
                        </div>
                    </div>
                </div>

                <div className="content-analysis-container">
                    <h2>Content Analysis</h2>
                    <div className="tag-list">
                        <span className="tag">Fashion Trends</span>
                        <span className="tag">Travel Diaries</span>
                        <span className="tag">Daily Vlogs</span>
                        <span className="tag">Product Reviews</span>
                        <span className="tag">Q&A Sessions</span>
                    </div>
                    <p className="content-description">
                        Sophia's content predominantly revolves around fashion trends, travel vlogs, daily life updates, and product reviews. She frequently engages with her audience through Q&A sessions.
                    </p>
                </div>

                <div className="tips-container">
                    <h2 className="tips-title">Tips & Tricks 🤖 </h2>
                    <p className="tips-text">
                    Maximize your experience with <span className="highlight">CrediRank</span>. 
        Get the most reliable insights on public figures. The platform offers detailed 
        stats, in-depth analysis, and clear visualizations. Discover top performers 
        in any category and get AI-driven recommendations for efficient platform utilization. 
        <br /><br />
        Stay ahead with real-time updates and comprehensive reports. Utilize advanced filters 
        to refine your search and get precise results. Whether you're an analyst, researcher, 
        or enthusiast, CrediRank provides the tools you need to make data-driven decisions. 
        Enhance your experience by exploring trending topics, identifying key influencers, 
        and leveraging AI-powered insights for a more informed approach.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Profile
