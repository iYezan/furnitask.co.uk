import * as Icons from 'lucide-react';
import { Service } from '../config/pricing';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onSelect: () => void;
  delay?: number;
}

// --- Map service icons to colors and SVG/Lucide icons ---
const ServiceIcon = ({ icon }: { icon: string }) => {
  const iconColors: Record<string, string> = {
    wardrobes: '#F97316',
    cabinets: '#F59E0B',
    desks: '#3B82F6',
    beds: '#8B5CF6',
    ikea: '#F59E0B',
    'pc-setup': '#3B82F6',
    printer: '#0EA5E9',
    wifi: '#2563EB',
    'smart-tv': '#6366F1',
    software: '#10B981',
  };

  const color = iconColors[icon] ?? '#6B7280';
  const iconClass = 'w-8 h-8';

  switch (icon) {
    case 'wardrobes':
      return (
        <svg className={iconClass} fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth="1.5">
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="8" y1="8" x2="16" y2="8" />
          <line x1="8" y1="14" x2="16" y2="14" />
        </svg>
      );
    case 'desks':
      return (
        <svg className={iconClass} fill={color} viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="2" />
          <rect x="3" y="8" width="1.5" height="8" />
          <rect x="19.5" y="8" width="1.5" height="8" />
          <rect x="6" y="16" width="12" height="2" />
        </svg>
      );
    case 'beds':
      return (
        <svg className={iconClass} fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth="1.5">
          <rect x="2" y="5" width="20" height="14" rx="1" />
          <line x1="2" y1="9" x2="22" y2="9" />
        </svg>
      );
    case 'ikea':
      return <Icons.Box className={iconClass} stroke={color} />;
    case 'pc-setup':
      return <Icons.Monitor className={iconClass} stroke={color} />;
    case 'printer':
      return <Icons.Printer className={iconClass} stroke={color} />;
    case 'wifi':
      return <Icons.Wifi className={iconClass} stroke={color} />;
    case 'smart-tv':
      return <Icons.Tv className={iconClass} stroke={color} />;
    case 'software':
      return <Icons.Wrench className={iconClass} stroke={color} />;
    default:
      return <Icons.Package className={iconClass} stroke="#6B7280" />;
  }
};

export default function ServiceCard({ service, isSelected, onSelect, delay = 0 }: ServiceCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-left w-full ${
        isSelected
          ? 'border-slate-900 bg-slate-900 shadow-lg'
          : 'border-slate-200 bg-white hover:border-slate-400 hover:shadow-md'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-3 bg-white">
        <ServiceIcon icon={service.icon} />
      </div>

      <h3 className={`text-base font-bold mb-2 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
        {service.name}
      </h3>

      <p className={`text-xs mb-3 line-clamp-2 ${isSelected ? 'text-slate-200' : 'text-slate-600'}`}>
        {service.description}
      </p>

      <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
        £{service.priceMin}-£{service.priceMax}
      </div>

      {isSelected && (
        <div className="absolute top-3 right-3">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <Icons.Check className="w-4 h-4 text-slate-900" />
          </div>
        </div>
      )}
    </button>
  );
}