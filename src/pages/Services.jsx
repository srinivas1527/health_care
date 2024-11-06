function Services() {
    const services = [
      {
        id: 1,
        title: "Primary Care",
        description: "Comprehensive healthcare services for all your basic medical needs.",
        src: "https://tse1.mm.bing.net/th?id=OIP.Kn11SajdfYZOYgRqmPEZiQHaE8&pid=Api&P=0&h=220",
        features: ["Regular check-ups", "Preventive care", "Health screenings"]
      },
      {
        id: 2,
        title: "Specialized Treatment",
        description: "Expert care in various medical specialties.",
        src: "https://tse4.mm.bing.net/th?id=OIP.F_Hc1nqboLGclQ76mT2bdQHaE8&pid=Api&P=0&h=220",
        features: ["Cardiology", "Orthopedics", "Neurology"]
      },
      {
        id: 3,
        title: "Emergency Care",
        description: "24/7 emergency medical services when you need them most.",
        src: "https://tse3.mm.bing.net/th?id=OIP._CkpMrxELlphvKUu7_doWgHaE7&pid=Api&P=0&h=220",
        features: ["24/7 availability", "Rapid response", "Critical care"]
      }
    ];
  
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-48">
                  <img
                    src={service.src}
                    alt={service.title}
                    className="w-full h-full object-cover" // Ensures the image covers the container
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  