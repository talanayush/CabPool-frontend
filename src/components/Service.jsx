import React from "react";
import Navbar from "./Navbar";
const Service = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-tr from-purple-200 via-blue-100 to-pink-100">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          CabPool – Smart, Safe & Student-Friendly Travel
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Seamlessly connect with fellow students for shared rides between campuses. 
          Save money, time, and the environment – all at once.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gradient-to-br from-purple-100 to-white shadow-xl rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Sign Up</h3>
            <p className="text-gray-700">Register with your student details to unlock ride sharing features.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-100 to-white shadow-xl rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Create or Join Rides</h3>
            <p className="text-gray-700">Browse or post ride tickets for your preferred time and location.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-pink-100 to-white shadow-xl rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Ride Together</h3>
            <p className="text-gray-700">Share the cost and commute with ease while meeting fellow students.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose CabPool?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
            <p className="text-gray-700">Split cab fares with others. It's budget-friendly for students.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Friendly</h3>
            <p className="text-gray-700">Fewer cabs mean reduced emissions. Ride green, ride smart.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Student-Centric</h3>
            <p className="text-gray-700">Made for campus life – fast bookings, verified students, and safe rides.</p>
          </div>
        </div>
      </section>
    </div>

    </>
  );
};

export default Service;
