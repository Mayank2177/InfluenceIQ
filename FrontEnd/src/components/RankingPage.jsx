import React from "react";
import './Ranking.css'

import Nav from "./Nav";
import FilterPanel from "./FilterPanel";

const Ranking = () =>{

    const data = [
        { rank: 1, name: "Olivia Hernandez", category: "Influencer", score: 98.5, change: "+2.1%" },
        { rank: 2, name: "Noah Carter", category: "Entrepreneur", score: 97.2, change: "-1.3%" },
        { rank: 3, name: "Sophia Ramirez", category: "Athlete", score: 96.8, change: "+0.8%" },
        { rank: 4, name: "Liam Patel", category: "Creator", score: 95.9, change: "+3.5%" },
        { rank: 5, name: "Ava Singh", category: "Influencer", score: 94.5, change: "-0.2%" },
        { rank: 6, name: "Ethan Ito", category: "Entrepreneur", score: 93.7, change: "+1.1%" },
        { rank: 7, name: "Chloe Lee", category: "Athlete", score: 92.4, change: "-2.8%" },
        { rank: 8, name: "Lucas Chen", category: "Creator", score: 91.6, change: "+0.5%" },
        { rank: 9, name: "Mia Dubois", category: "Influencer", score: 90.3, change: "-1.5%" },
        { rank: 10, name: "Daniel Kim", category: "Entrepreneur", score: 89.8, change: "+0.9%" },
        { rank: 11, name: "Ethan Ito", category: "Athlete", score: 93.7, change: "+1.1%" },
        { rank: 12, name: "Chloe Lee", category: "Creator", score: 92.4, change: "-2.8%" },
        { rank: 13, name: "Lucas Chen", category: "Influencer", score: 91.6, change: "+0.5%" },
        { rank: 14, name: "Mia Dubois", category: "Entrepreneur", score: 90.3, change: "-1.5%" },
        { rank: 15, name: "Daniel Kim", category: "Athlete", score: 89.8, change: "+0.9%" },
    ];
    
    

    return(
        <>
            <div className="container r-con">
                <Nav />
                <div className="ranking-container">
                    <h1>Top Public Figures </h1>
                    <p>A cutting-edge Al ranking system evaluating public figures on influence, engagement, and popularity metrics</p>
                    <input placeholder="Search by name, category, etc"></input>
                    <div className="r-selection">
                        <select>
                            <option value="">Category</option>
                            <option value="Influencers">Influencers</option>
                            <option value="Enterpreneur">Enterpreneur</option>
                            <option value="Athlete">Athlete</option>
                            <option value="Creators">Creators</option>
                        </select>
                        <select>
                            <option value="">Social Platform</option>
                            <option value="twiter">twiter</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="LinkedIn">LinkedIn</option>
                        </select>
                        <select>
                            <option value="">Ranking Period</option>
                            <option value="today">today</option>
                            <option value="week">week</option>
                            <option value="Month">Month</option>
                            <option value="Year">Year</option>
                        </select>
                    </div>

                    <FilterPanel />
                    
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
                        {data.map((person, index) => (
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
                <hr  style={{
                    width: "100%"
                }}/>
                <footer>
                    <div class="footerContainer">
                        <div class="socialIcons">
                            <a href=""><i class="fa-brands fa-facebook"></i></a>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <a href=""><i class="fa-brands fa-google-plus"></i></a>
                            <a href=""><i class="fa-brands fa-youtube"></i></a>
                        </div>
                        <div class="footerNav">
                            <ul><li><a href="">Home</a></li>
                                <li><a href="">News</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">our Team</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="footerBottom">
                        <p>Copyright &copy;2023; Designed by <span class="designer">ERROR 404</span></p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Ranking