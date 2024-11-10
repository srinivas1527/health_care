import { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you import Link from react-router-dom

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "https://medfacilclinica.com.br/wp-content/uploads/2016/09/team-1.jpg", // Updated URL for Dr. Sarah Johnson
      education: "MD - Harvard Medical School",
      experience: "15+ years",
      description: "Specializing in cardiovascular health and preventive cardiology."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "https://tse2.mm.bing.net/th?id=OIP.vc-zJLr_-JR6ZI05tymGEQHaHa&pid=Api&P=0&h=220", // Updated URL for Dr. Michael Chen
      education: "MD - Johns Hopkins University",
      experience: "12+ years",
      description: "Expert in neurological disorders and brain health."
    },
    {
      id: 3,
      name: "Dr. Emily Williams",
      specialty: "Pediatrician",
      image: "https://tse3.mm.bing.net/th?id=OIP.HvwqRmqYbZBOlMNocQg-9gAAAA&pid=Api&P=0&h=220", // Updated URL for Dr. Emily Williams
      education: "MD - Stanford University",
      experience: "10+ years",
      description: "Dedicated to providing comprehensive care for children."
    }
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-blue-600 mb-4">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">{doctor.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Education: {doctor.education}</p>
                  <p>Experience: {doctor.experience}</p>
                </div>
                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Profile Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedDoctor.name}</h2>
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <p className="text-blue-600 text-lg mb-2">{selectedDoctor.specialty}</p>
                  <p className="text-gray-600 mb-4">{selectedDoctor.description}</p>
                  <div className="space-y-2">
                    <p><strong>Education:</strong> {selectedDoctor.education}</p>
                    <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
                  </div>
                  <Link to="/appointments">
                    <button
                      className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Doctors;
