import React, { useState } from "react";
import { Star } from "lucide-react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="feedback">
        <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Rating</label>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={24}
              onClick={() => setRating(star)}
              className={star <= rating ? "active" : ""}
            />
          ))}
        </div>

        <label>Your Feedback</label>
        <textarea placeholder="Enter your feedback"></textarea>

        <button className="feed-btn" type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;
