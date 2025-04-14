import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const AboutPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "", rating: 5 });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await axios.post("https://cabpool-backend.onrender.com/feedback/submit-feedback", formData);
      console.log("hehe");
      setStatus("✅ Feedback submitted successfully!");
      setFormData({ name: "", email: "", feedback: "", rating: 5 });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to submit feedback.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-200 via-blue-100 to-pink-100">
      <Navbar />

      {/* About Us Section */}
      <div className="flex flex-col items-center justify-center pt-20 ">
        <div className="max-w-3xl bg-white bg-opacity-90 p-10 shadow-2xl rounded-2xl text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Meet the Creators</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This project is a reflection of our shared passion for solving real-world problems with technology, design, and a whole lot of creativity.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ayush Talan</h2>
              <p className="text-gray-700">
                A Computer Science undergrad at JIIT Noida with an insatiable curiosity for tech and innovation. Ayush has built several impactful projects like <strong>PetBuddy</strong> and <strong>GeoCommerce</strong>, and is an <strong>ICPC Regionalist</strong> with a deep love for competitive programming. From backend logic to seamless UIs, he brings ideas to life with flair.
              </p>
            </div>

            <div className="bg-gradient-to-tr from-yellow-50 via-green-50 to-blue-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Abhay</h2>
              <p className="text-gray-700">
                A talented Software Engineer at <strong>CodeChef</strong>, Abhay brings industry-grade engineering practices and unmatched problem-solving skills to the table. With a strong foundation in algorithms and real-world systems, he ensures every product he touches is robust, scalable, and smooth as butter.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-800">
            Together, we're not just developers — we're builders, dreamers, and teammates who believe great software can make lives better.
          </p>
        </div>
      </div>

      {/* Feedback Form Section */}
      <div className="flex flex-col items-center justify-center px-6 pb-20">
        <div className="w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">🐞 Report a Bug / Give Feedback</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange}
              className="w-full p-3 border rounded-xl" placeholder="Your Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full p-3 border rounded-xl" placeholder="Your Email (registered)" required />
            <textarea name="feedback" rows="5" value={formData.feedback} onChange={handleChange}
              className="w-full p-3 border rounded-xl" placeholder="Describe the bug or give feedback..." required />
            <select name="rating" value={formData.rating} onChange={handleChange}
              className="w-full p-3 border rounded-xl">
              <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
              <option value="4">⭐️⭐️⭐️⭐️</option>
              <option value="3">⭐️⭐️⭐️</option>
              <option value="2">⭐️⭐️</option>
              <option value="1">⭐️</option>
            </select>
            <button type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition">
              Submit Feedback
            </button>
          </form>
          {status && <p className="text-center mt-4 text-sm text-gray-600">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
