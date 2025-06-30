import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const RatingWidget = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState({ average: 0, total: 0 });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/ratings/summary")
      .then((res) => setSummary(res.data));
  }, [submitted]);

  const submitRating = async () => {
    if (!rating) return alert("Please select a rating");

    await axios.post("http://localhost:8080/api/ratings", {
      stars: rating,
      feedback,
    });

    setSubmitted(true);
    setRating(0);
    setFeedback("");
  };

  return (
    <div className="w-[100%] mt-10 bg-white shadow-sm shadow-xl  p-6 flex flex-col sm:flex-row items-center justify-end gap-4 ">
      <div className="hidden md:flex mt-6 text-center text-gray-600">
        <p className="text-sm">
          Average Rating: ⭐ {summary.average} ({summary.total} reviews)
        </p>
      </div>
      <div className="">
        <h2 className="text-lg font-bold text-center text-gray-9 mb-4">
          Rate My Site
        </h2>

        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={25}
              className={`cursor-pointer transition-transform duration-200 ${
                (hovered || rating) >= star
                  ? "text-yellow-400 scale-110"
                  : "text-gray-300"
              }`}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center gap-8">
        <div
          onClick={submitRating}
          className="w-fit px-8 text-14 py-1 border-1 cursor-pointer text-[#4d4d4d] transition"
        >
          Submit
        </div>
        <div
          onClick={() => onClose()}
          className="w-fit border text-14 px-8 py-1 cursor-pointer text-[#4d4d4d] transition"
        >
          Remind me later
        </div>

        {submitted && (
          <motion.p
            className="mt-4 text-green-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you for your feedback! 🙌
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default RatingWidget;
