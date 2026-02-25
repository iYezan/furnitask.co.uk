import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { services } from '../config/pricing';
import Calendar from '../components/Calendar';

export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const serviceId = location.state?.serviceId;
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    navigate('/services');
    return null;
  }

  const handleBooking = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const message = `Hello, I would like to book a service.\n\nService: ${service.name}\nDate: ${formattedDate}\n\nPlease confirm availability.`;
      const whatsappUrl = `https://wa.me/447307296705?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Services</span>
        </button>

        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-slate-600 text-white flex items-center justify-center text-xs font-semibold">
                  1
                </div>
                <span className="text-slate-600 font-semibold text-sm">Service</span>
              </div>
              <div className="w-8 h-0.5 bg-slate-900"></div>
              <div className="flex items-center space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
                  2
                </div>
                <span className="text-slate-900 font-semibold text-sm">Date</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-2">
            Choose Your Date
          </h1>
          <p className="text-sm text-slate-600 text-center max-w-2xl mx-auto">
            Select when you'd like your <span className="font-semibold text-slate-900">{service.name}</span> service
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 animate-slide-up">
          <div className="mb-6 p-4 bg-slate-50 rounded-xl">
            <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Service</h3>
            <p className="text-lg font-bold text-slate-900">{service.name}</p>
            <p className="text-sm text-slate-600 mt-1">
              £{service.priceMin} - £{service.priceMax}
            </p>
          </div>

          <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
        </div>

        <div className="flex justify-center pb-8">
          <button
            onClick={handleBooking}
            disabled={!selectedDate}
            className={`px-6 py-3 rounded-lg font-semibold text-sm flex items-center space-x-2 transition-all duration-300 ${
              selectedDate
                ? 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            <span>Book via WhatsApp</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
