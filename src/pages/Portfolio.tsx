import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { portfolioItems } from '../config/pricing';

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Recent Work
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Quality furniture assembly and IT support projects completed across London
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-8 bg-white rounded-2xl shadow-md animate-fade-in">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Ready to Book?
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Experience the same quality workmanship
          </p>
          <button
            onClick={() => navigate('/services')}
            className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all duration-300 hover:shadow-lg"
          >
            Book a Service
          </button>
        </div>
      </div>
    </div>
  );
}
