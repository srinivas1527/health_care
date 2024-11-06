function About() {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <img
                src="https://reliantmedicalgroup.org/wp-content/uploads/2019/12/GettyImages-1089609374-2048x1024.jpg"
                alt="Healthcare facility"
                className="rounded-lg shadow-lg w-full h-full max-h-[600px] object-cover" // Adjusted for larger display
              />
            </div>
            <div className="md:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We are dedicated to providing exceptional healthcare services with compassion and expertise. 
                Our mission is to improve the health and well-being of our community through innovative medical 
                practices and personalized patient care.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Excellence in patient care</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compassion and empathy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Innovation in healthcare</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  