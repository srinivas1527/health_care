import { useState } from 'react';

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maheshbabu",
      role: "Patient",
      content: "The care I received was exceptional. The staff was professional and caring throughout my treatment.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mahesh_Babu_in_Spyder_(cropped).jpg" // Replace with actual image URLs
    },
    {
      id: 2,
      name: "NTR",
      role: "Patient",
      content: "I'm grateful for the outstanding service and attention to detail. Highly recommend their healthcare services.",
      image: "https://img.mensxp.com/media/content/2022/Jan/19_61deb81182673.jpeg" // Replace with actual image URLs
    },
    {
      id: 3,
      name: "Allu Arjun",
      role: "Patient",
      content: "The doctors here are truly dedicated to their patients. They took the time to explain everything clearly.",
      image: "https://cdn.siasat.com/wp-content/uploads/2021/04/allu-arjun-1.jpg" // Replace with actual image URLs
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 p-2 text-blue-600 hover:text-blue-800"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="text-center px-12">
              <div className="mb-8">
                {/* Slightly increased image size */}
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"  // Changed size to w-28 h-28
                />
                <p className="text-gray-600 italic mb-4">{testimonials[currentIndex].content}</p>
                <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
              
              {/* Dots for navigation */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 p-2 text-blue-600 hover:text-blue-800"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
