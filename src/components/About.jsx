// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Connecting job seekers with employers and helping organizations build their dream teams.
        </p>
      </header>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to create an efficient, user-friendly, and impactful platform where job seekers can find their ideal jobs and companies can easily source and hire the best talent. We aim to simplify the recruitment process by providing tools and resources that make hiring and job hunting smoother for everyone.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We envision a world where finding the right job or the right candidate is not just simple but also empowering. We strive to become the leading platform for job seekers and employers globally, known for our integrity, innovation, and community impact.
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-gray-800">Integrity</h3>
            <p className="text-gray-700 mt-2">
              We believe in transparency, fairness, and doing what’s right for both job seekers and employers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">Innovation</h3>
            <p className="text-gray-700 mt-2">
              We continuously strive to innovate our platform, making it more intuitive, efficient, and accessible for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">Customer Focus</h3>
            <p className="text-gray-700 mt-2">
              Our users come first. We are dedicated to providing the best experience for both job seekers and employers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">Diversity</h3>
            <p className="text-gray-700 mt-2">
              We celebrate diversity and inclusion, ensuring equal opportunities for all individuals, regardless of their background.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4">
                <img src="https://media.licdn.com/dms/image/v2/D5635AQGX9m3RQlsTmg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1706898342449?e=1729195200&v=beta&t=tdc8XKwSGIApI45FjUuWdGY7qOTHWPTDFOl_BNGXLqs" alt="logo"  className=' rounded-full'/>
            </div>
            <h3 className="text-xl font-medium text-gray-800">Reshmi Churasiya</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQHohSeoV3T4YQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725265242075?e=1733961600&v=beta&t=i_KQ0TGriqq3xAnz2GN0cPBxw4CYCOIl0wN3S_WrzJ0" className=' rounded-full'/>
            </div>
            <h3 className="text-xl font-medium text-gray-800">Dom</h3>
            <p className="text-gray-600">Chief Operating Officer</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4">
                <img src="https://media.licdn.com/dms/image/v2/D5635AQGX9m3RQlsTmg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1706898342449?e=1729195200&v=beta&t=tdc8XKwSGIApI45FjUuWdGY7qOTHWPTDFOl_BNGXLqs" alt="logo"  className=' rounded-full'/>
            </div>
            <h3 className="text-xl font-medium text-gray-800">Dombiii</h3>
            <p className="text-gray-600">Head of Development</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">10,000+</h3>
            <p className="text-gray-600">Jobs Listed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">50,000+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">1,000+</h3>
            <p className="text-gray-600">Companies Hiring</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
        <p className="text-gray-700 mb-6">
          Whether you're looking for the perfect job or the perfect candidate, we're here to make the process easy and efficient for you. Join our platform today and be part of our growing community.
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
