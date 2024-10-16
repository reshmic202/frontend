// src/App.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for contacting us! We’ll get back to you within 24-48 hours.");
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-2">
          We’re here to help job seekers and companies find the perfect match.
        </p>
      </header>

      {/* Contact Form */}
      <div className="mb-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name*</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email*</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject*</label>
            <select
              name="subject"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="job-seeker">Job Seeker Support</option>
              <option value="company-support">Company Support</option>
              <option value="technical">Technical Assistance</option>
              <option value="partnership">Partnership/Collaboration</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message*</label>
            <textarea
              name="message"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="file" className="block text-lg font-medium text-gray-700">Attach File (Optional)</label>
            <input
              type="file"
              name="file"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Support Sections */}
      <div className="flex justify-between space-x-4 mb-10">
        <div className="bg-gray-100 p-6 rounded-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Job Seeker Assistance</h2>
          <p className="text-gray-600 mt-2">Need help finding a job? Explore our job listings.</p>
          <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md">Search Jobs</button>
        </div>

        <div className="bg-gray-100 p-6 rounded-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Employer Assistance</h2>
          <p className="text-gray-600 mt-2">Looking to post a job? Find the right talent now.</p>
          <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md">Post a Job</button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Contact Information</h3>
        <p className="text-gray-600">Email: contact@yourjobportal.com</p>
        <p className="text-gray-600">Phone: +1-123-456-7890</p>
        <p className="text-gray-600">Office Hours: Monday - Friday, 9 AM - 5 PM</p>
        <p className="text-gray-600">Address: 123 Job Street, Employment City, 56789</p>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://facebook.com" className="text-blue-600 hover:underline">Facebook</a>
          <a href="https://linkedin.com" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://twitter.com" className="text-blue-600 hover:underline">Twitter</a>
        </div>

        {/* Map Placeholder */}
        <div className="mt-6 bg-gray-200 h-64 rounded-md flex items-center justify-center">
          <p className="text-gray-600">[Map Placeholder]</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center">
        <p className="text-gray-600">&copy; 2024 Your Job Portal. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/" className="text-gray-600 hover:underline">Privacy Policy</a>
          <a href="/" className="text-gray-600 hover:underline">Terms of Service</a>
          <a href="/" className="text-gray-600 hover:underline">Help Center</a>
          <a href="/" className="text-gray-600 hover:underline">Careers</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
