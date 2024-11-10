import { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import TestimonialSlider from '../components/TestimonialSlider';
import AppointmentForm from '../components/AppointmentForm';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="http://wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Background-43.jpg"
            alt="Healthcare Professional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-900/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Your Health, Our Priority</h1>
            <p className="text-xl mb-8">
              Experience world-class healthcare with our team of experts
            </p>
            <Link to="/appointments">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.src}
                  alt={service.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Appointment Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book an Appointment</h2>
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    id: 1,
    title: "Primary Care",
    description: "Comprehensive healthcare services for all your basic medical needs.",
    src: "https://tse1.mm.bing.net/th?id=OIP.Kn11SajdfYZOYgRqmPEZiQHaE8&pid=Api&P=0&h=220",
  },
  {
    id: 2,
    title: "Specialized Treatment",
    description: "Expert care in various medical specialties.",
    src: "https://tse4.mm.bing.net/th?id=OIP.F_Hc1nqboLGclQ76mT2bdQHaE8&pid=Api&P=0&h=220",
  },
  {
    id: 3,
    title: "Emergency Care",
    description: "24/7 emergency medical services when you need them most.",
    src: "https://tse3.mm.bing.net/th?id=OIP._CkpMrxELlphvKUu7_doWgHaE7&pid=Api&P=0&h=220",
  },
];

export default Home;
