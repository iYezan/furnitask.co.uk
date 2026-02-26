import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { services } from '../config/pricing';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // ✅ Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const furnitureServices = services.filter((s) => s.category === 'furniture');
  const itServices = services.filter((s) => s.category === 'it');

  const handleContinue = () => {
    if (selectedService) {
      navigate('/booking', { state: { serviceId: selectedService } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        {/* Page Header */}
        <div className="mb-8 animate-fade-in text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Choose Your Service</h1>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Select a service and pick your date
          </p>
        </div>

        {/* Furniture Services */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="w-1 h-6 bg-slate-900 rounded-full mr-2"></span>Furniture Assembly
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {furnitureServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedService === service.id}
                onSelect={() => setSelectedService(service.id)}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="w-1 h-6 bg-slate-900 rounded-full mr-2"></span>IT Support
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {itServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedService === service.id}
                onSelect={() => setSelectedService(service.id)}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center pb-8">
          <button
            onClick={handleContinue}
            disabled={!selectedService}
            className={`flex items-center space-x-3 px-6 py-3 font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              selectedService
                ? 'bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg hover:scale-105 hover:from-slate-800 hover:to-slate-600'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            } rounded-full`}
          >
            <span>Next: Choose Date</span>
            <ArrowRight
              className={`w-5 h-5 transition-transform ${
                selectedService ? 'group-hover:translate-x-1' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}