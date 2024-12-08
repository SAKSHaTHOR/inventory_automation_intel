"use client";

import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col text-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-500 to-rose-600 text-white py-16">
        <div className="container mx-auto px-6 text-center md:text-left md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Revolutionize Your Inventory with AI!
            </h1>
            <p className="mt-4 text-lg">
              Experience unparalleled automation in inventory management, cost reduction, and shipping optimization.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100">
                <a href="/Home/Dashboard">Get Started</a>
              
            </button>
          </div>
          <img
            src="https://img.freepik.com/free-photo/warehouse-managers-preparing-customer-order-checking-pick-ticket-laptop-storehouse-young-asian-women-employees-searching-parcel-shelf-while-using-inventory-software_482257-62425.jpg?t=st=1733672314~exp=1733675914~hmac=a45d2cbe948f652e6aa699c998cf966ede76f5a815daf179dda9111fb76c5f30&w=996"
            alt="Product Showcase"
            className="mt-8 md:mt-0 md:ml-10"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="text-blue-500 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold">Seamless Automation</h3>
              <p className="mt-2 text-gray-600">
                Automate inventory tracking, reduce manual errors, and optimize operations.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="text-blue-500 text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold">AI-Driven Insights</h3>
              <p className="mt-2 text-gray-600">
                Leverage AI for real-time insights and smarter decision-making.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="text-blue-500 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold">Effortless Shipping</h3>
              <p className="mt-2 text-gray-600">
                Streamline your shipping processes and cut costs with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <p className="italic">"This product has transformed how we manage inventory. Highly recommend!"</p>
              <p className="mt-4 font-bold">- Alex J.</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <p className="italic">"The AI insights saved us thousands in operational costs."</p>
              <p className="mt-4 font-bold">- Samantha T.</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <p className="italic">"Shipping has never been this easy. Amazing tool!"</p>
              <p className="mt-4 font-bold">- Raj P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg">
            Join thousands of businesses already revolutionizing their inventory management.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-md hover:bg-gray-100">
            <a href="/Home/Dashboard">Join Us</a>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-400">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
