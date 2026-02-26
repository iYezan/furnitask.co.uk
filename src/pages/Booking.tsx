import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { services } from '../config/pricing';
import Calendar from '../components/Calendar';
import { AVAILABLE_DAYS } from '../config/availability';

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

  const allowedDays = AVAILABLE_DAYS[service.category] || [0,1,2,3,4,5,6];

  const handleBooking = () => {
    if (!selectedDate) return;

    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const message = `Hi,

I would like to book the following service:

Service: ${service.name}
Date: ${formattedDate}

Please confirm the booking.

Thank you.`;

    const whatsappUrl = `https://wa.me/447307296705?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Back Button */}
        <button
          onClick={() => navigate('/services')}
          className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Services</span>
        </button>

        {/* Service Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="mb-6 p-4 bg-slate-50 rounded-xl">
            <h3 className="text-xs font-semibold text-slate-600 uppercase mb-1">Service</h3>
            <p className="text-lg font-bold text-slate-900">{service.name}</p>
          </div>

          {/* Calendar */}
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            allowedDays={allowedDays}
          />
        </div>

        {/* Comment / Note */}
        <div className="text-center mb-6 text-sm text-slate-600">
          We'll get back to you shortly to confirm your booking. Please ensure the date you select works for you.
        </div>

        {/* Booking Button */}
        <div className="flex justify-center pb-8">
          <button
            onClick={handleBooking}
            disabled={!selectedDate}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
              selectedDate
                ? 'bg-slate-900 text-amber-300 hover:bg-slate-800'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            Book via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}