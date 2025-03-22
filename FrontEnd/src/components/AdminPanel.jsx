import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import Nav from "./Nav";
import EngagementChart from "./EngagementChart";

import "./AdminPanel.css"

const Admin = () =>{

    const Data = [
        { rank: 1, name: "Olivia Hernandez", category: "Entertainment", score: 98.5, change: "+2.1%" },
        { rank: 2, name: "Noah Carter", category: "Technology", score: 97.2, change: "-1.3%" },
        { rank: 3, name: "Sophia Ramirez", category: "Politics", score: 96.8, change: "+0.8%" },
        { rank: 4, name: "Liam Patel", category: "Sports", score: 95.9, change: "+3.5%" },
        { rank: 5, name: "Ava Singh", category: "Business", score: 94.5, change: "-0.2%" },
        { rank: 6, name: "Ethan Ito", category: "Arts", score: 93.7, change: "+1.1%" },
        { rank: 7, name: "Chloe Lee", category: "Science", score: 92.4, change: "-2.8%" },
        { rank: 8, name: "Lucas Chen", category: "Education", score: 91.6, change: "+0.5%" },
        { rank: 9, name: "Mia Dubois", category: "Health", score: 90.3, change: "-1.5%" },
        { rank: 10, name: "Daniel Kim", category: "Environment", score: 89.8, change: "+0.9%" },
        { rank: 11, name: "Ethan Ito", category: "Arts", score: 93.7, change: "+1.1%" },
        { rank: 12, name: "Chloe Lee", category: "Science", score: 92.4, change: "-2.8%" },
        { rank: 13, name: "Lucas Chen", category: "Education", score: 91.6, change: "+0.5%" },
        { rank: 14, name: "Mia Dubois", category: "Health", score: 90.3, change: "-1.5%" },
        { rank: 15, name: "Daniel Kim", category: "Environment", score: 89.8, change: "+0.9%" },
    ];

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


    const data2 = [
        { region: "East Asia", value: 10 },
        { region: "South Asia", value: 5 },
        { region: "Europe", value: 40 },
        { region: "Africa", value: 60 },
        { region: "North America", value: 5 },
        { region: "South America", value: 25 },
        { region: "Australia", value: 50 },
    ];

    const categories = [
        {
            title: "Political Influence",
            score: 82,
            breakdown: [
            { label: "Leaders", value: 40 },
            { label: "Legislators", value: 35 },
            { label: "Policy Experts", value: 90 },
            ],
        },
        {
            title: "Media Influence",
            score: 75,
            breakdown: [
            { label: "News Outlets", value: 30 },
            { label: "Commentators", value: 70 },
            { label: "Journalists", value: 60 },
            ],
        },
        {
            title: "Social Influence",
            score: 80,
            breakdown: [
            { label: "Social Media Presence", value: 50 },
            { label: "Online Engagement", value: 45 },
            { label: "Community Outreach", value: 85 },
            ],
        },
    ];

    return(
        <>
            <Nav />
            <div className="admin-cont">
                <div className="admin-intro">
                    <h1>Influence Metrics Dashboard</h1>
                    <p>Visualize influence data across various dimensions with interactive graphs and charts.</p>
                </div>
                <div className="graph">
                    <h1>Overall Influence</h1>
                    <EngagementChart data={data} />
                </div>

                <div className="breakdown">
                    <h1>Category Breakdown</h1>
                </div>

                <div className="category-container">
                    {categories.map((category, index) => (
                        <div key={index} className="category-card">
                        <h3 className="category-title">{category.title}</h3>
                        <p className="category-score">{category.score}</p>
                        <div className="breakdown-list">
                            {category.breakdown.map((item, idx) => (
                            <div key={idx} className="breakdown-item">
                                <p className="breakdown-label">{item.label}</p>
                                <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${item.value}%` }}
                                ></div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>

                <div className="influence-container">
                    <h2 className="influence-title">Influence Distribution</h2>
                    <div className="influence-card">
                        <h3 className="chart-title">Influence Distribution by Region</h3>
                        <p className="percentage">100%</p>
                        <div className="chart-container">
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={data2} barSize={30}>
                            <XAxis dataKey="region" stroke="#888" />
                            <YAxis hide />
                            <Tooltip contentStyle={{
                                backgroundColor: "#222", // Dark background
                                color: "#fff", // White text
                                borderRadius: "5px",
                                border: "none",
                            }} />
                            <Bar dataKey="value" fill="#aaa" radius={[5, 5, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="top-influencer">
                    <h1>Top Influenser</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Figure</th>
                            <th>Category</th>
                            <th>Score</th>
                            <th>Change</th>
                            <th>View</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Data.map((person, index) => (
                            <tr key={index}>
                            <td>{person.rank}</td>
                            <td>{person.name}</td>
                            <td>
                                <span className="category">{person.category}</span>
                            </td>
                            <td>{person.score}</td>
                            <td className={person.change.includes("+") ? "positive" : "negative"}>{person.change}</td>
                            <td><a href="#" className="view-profile">View Profile</a></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Admin