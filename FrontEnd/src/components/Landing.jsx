import React from "react";

import search from "../assets/search.png"

import pic1 from "../assets/pic-1.jpg"
import pic2 from "../assets/pic-2.jpeg"
import pic3 from "../assets/pic-3.jpg"

import Nav from "./Nav";
import FeedbackForm from "./Feedback";

const Landing = () => {
    return(
        <>
            <div className="container">
                <Nav />
                <div className="search-container">
                    <div className="search-c">
                        <h1>Discover the most influential figures </h1>
                        <h4>Explore our Al-driven rankings of prominent personalities. Find the most relevant figures using our powerful search</h4>
                        <div className="searchbar">
                            <form>
                                <img src={search}></img>
                                <input placeholder="Search the influencers..."></input>
                                <button>search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="influence-content">
                    <h1>“Unveiling True Influence Beyond Just Likes & Follows”</h1>
                    <h4>Discover, Compare & Track the Most Credible Public Figures in Real-Time.</h4>
                    <button>View Top Influencers</button>
                </div>
                <div className="feature">
                    <h1>Why InfluenceIQ?</h1>
                    <div className="cards">
                        <div className="f-cards">
                            <h1>A Better Rating System</h1>
                            <p>Unlike social media, our AI-powered rankings focus on credibility & longevity, not just trends.</p>
                        </div>
                        <div className="f-cards">
                            <h1>Real-Time & AI-Driven</h1>
                            <p>Our system dynamically updates as public figures rise and fall in relevance.</p>
                        </div>
                        <div className="f-cards">
                            <h1>Trusted by Recruiters & Brands</h1>
                            <p>Identify the best influencers, speakers, and experts based on real impact.</p>
                        </div>
                    </div>
                </div>
                <div className="workings">
                    <h1>How it work</h1>
                    <div className="cards w-card">
                        <div className="w-cards">
                            <h1>📌 Step 1: Search for a Public Figure 🔍</h1>
                            <p>Find and explore the profiles of public figures across various domains, including tech, entertainment, business, and more.</p>
                        </div>
                        <div className="w-cards">
                            <h1>📌 Step 2: View Their Influence Score 📈</h1>
                            <p>Analyze their impact with a detailed influence score based on engagement, reach, and audience interaction.</p>
                        </div>
                        <div className="w-cards">
                            <h1>📌 Step 3: Check Their Growth History 📊</h1>
                            <p>Track their rise to prominence with insightful data on follower trends, content performance, and key milestones.</p>
                        </div>
                        <div className="w-cards">
                            <h1>📌 Step 4: Compare with Other Influencers ⚖️</h1>
                            <p>See how they stack up against other influencers in their field, with side-by-side comparisons of metrics and influence.</p>
                        </div>
                        <div className="w-cards">
                            <h1>📌 Step 5: Follow for Updates & Insights 📰</h1>
                            <p>Stay ahead with real-time updates on their latest activities, industry trends, and expert insights.</p>
                        </div>
                    </div>
                </div>
                <div className="explanation">
                    <h1>AI-Powered Influence Score</h1>
                    <p>We use advanced AI algorithms to calculate credibility, engagement, and longevity</p>
                    <div className="explanation-content">
                        <h1>Here’s how we rank public figures:</h1>
                        <ul>
                            <li><span>Credibility & Trustworthiness –</span> Fact-checking & expert analysis</li>
                            <li><span>Fame Longevity –</span> Years of influence over time</li>
                            <li><span>Engagement Quality –</span> Not just likes, but real discussions & impact</li>
                        </ul>
                        <button className="e-btn">
                            <span className="btn-visiable">OUR ALGORITHM</span>
                            <span className="btn-invisiable">InfluenceScore=(EngagementFactor)+(LongevityFactor)+(CredibilityFactor)</span>
                        </button>
                    </div>
                </div>
                <FeedbackForm />
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

export default Landing