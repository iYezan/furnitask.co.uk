import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Hammer, Laptop, ArrowRight, ExternalLink, X } from 'lucide-react';

// ✅ Reviews data
const reviews = [
  {
    name: 'Alice M.',
    review: 'Hisham assembled my IKEA wardrobe perfectly. Highly recommended!',
    rating: 5,
  },
  {
    name: 'John D.',
    review: 'Professional IT support, fixed my network issues quickly.',
    rating: 5,
  },
  {
    name: 'Sophie K.',
    review: 'Reliable, on-time, and very polite. Excellent service!',
    rating: 5,
  },
];

export default function Landing() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">

      {/* PROFILE POPUP */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-24 z-50 transition-opacity duration-300 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative text-center transform transition-transform duration-300 animate-slide-down">
            
            <button
              onClick={() => setShowProfile(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Close profile popup"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src="/images/Photo_ID.jpg"
              alt="Hisham"
              className="w-28 h-28 rounded-full object-cover mx-auto mb-4 shadow-lg"
            />

            <h3 className="text-xl font-bold text-slate-900">Hisham</h3>
            <p className="text-sm text-slate-600 mb-4">Professional Technician</p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              5+ years of experience in furniture assembly and IT support, specializing in IKEA flat-pack assembly, hardware setup, and network configuration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.taskrabbit.co.uk/profile/hisham-a--4?invitation_source=url"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold text-sm hover:border-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>TaskRabbit</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* NAV */}
        <nav className="py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hammer className="w-8 h-8 text-slate-800" />
            <span className="text-2xl font-bold text-slate-900">HA Services</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/portfolio')}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Portfolio
            </button>
            <a
              href="https://www.taskrabbit.co.uk/profile/hisham-a--4?invitation_source=url"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <span className="hidden sm:inline">TaskRabbit</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="py-16 sm:py-24 text-center">
          <div className="max-w-4xl mx-auto">

            <div className="inline-flex flex-col items-center mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Available Across London</span>
              </div>

              <button
                onClick={() => setShowProfile(true)}
                className="mt-2 px-3 py-1 bg-gray-200 rounded-full text-slate-900 font-medium hover:bg-gray-300 transition-colors shadow-sm"
              >
                View Profile
              </button>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Furniture Assembly
              <span className="block text-slate-600">& Tech Support</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Expert assembly and technical support services for furniture, hardware, and networks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.taskrabbit.co.uk/profile/hisham-a--4?invitation_source=url"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold text-sm hover:border-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>TaskRabbit</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Assembly</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Professional assembly of furniture including wardrobes, desks, and beds.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <Laptop className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tech Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Hardware setup, network configuration, and software installation support.
            </p>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r, i) => (
              <div
                key={i}
                className={`bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[180px] opacity-0 animate-fade-in transform transition duration-700 hover:scale-105 hover:shadow-lg`}
                style={{ animationDelay: `${i * 400}ms` }}
              >
                <div className="mb-2">
                  <div className="flex items-center mb-2">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-4 h-4 text-yellow-400 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.962a1 1 0 00-.364-1.118L2.038 9.39c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.962z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">{r.review}</p>
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-900">{r.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOK A SERVICE */}
        <section className="py-12 text-center animate-fade-in-delay-6">
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Book a Service
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              Choose your furniture assembly or IT support service and schedule your booking easily.
            </p>
            <button
              onClick={() => navigate('/services')}
              className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-all duration-300 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} HA Services. Professional Assembly & Tech Support.
          </p>
        </div>
      </footer>

      {/* ANIMATION STYLES */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideDown {
            0% { transform: translateY(-20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .animate-slide-down {
            animation: slideDown 0.3s ease-out forwards;
          }
        `}
      </style>

    </div>
  );
}