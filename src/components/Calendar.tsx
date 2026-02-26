import { useState, useMemo } from 'react';

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  allowedDays: number[];
  highlightWeekends?: boolean;
}

export default function Calendar({
  selectedDate,
  onSelectDate,
  allowedDays,
  highlightWeekends = true,
}: CalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = useMemo(
    () => new Date(currentYear, currentMonth + 1, 0).getDate(),
    [currentYear, currentMonth]
  );

  const startDay = useMemo(
    () => new Date(currentYear, currentMonth, 1).getDay(),
    [currentYear, currentMonth]
  );

  const calendarDays = useMemo(() => {
    const days: (Date | null)[] = [];
    for (let i = 0; i < startDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++)
      days.push(new Date(currentYear, currentMonth, d));
    return days;
  }, [startDay, daysInMonth, currentYear, currentMonth]);

  const handlePrevMonth = () => {
    if (currentYear === today.getFullYear() && currentMonth === today.getMonth()) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  return (
    <div className="w-full bg-slate-50 rounded-xl p-2 sm:p-3 shadow-sm">
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-200 hover:bg-slate-300"
        >
          ◀
        </button>
        <span className="font-semibold text-slate-900 text-sm sm:text-base">
          {monthNames[currentMonth]} {currentYear}
        </span>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-200 hover:bg-slate-300"
        >
          ▶
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-semibold text-slate-600 mb-1 text-xs sm:text-sm">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center">
        {calendarDays.map((date, idx) => {
          if (!date) return <div key={idx}></div>;

          const isPast = date < today;
          const isDisabled = isPast || !allowedDays.includes(date.getDay());
          const isSelected = selectedDate?.toDateString() === date.toDateString();
          const isWeekend = date.getDay() === 0 || date.getDay() === 6;

          return (
            <button
              key={idx}
              disabled={isDisabled}
              onClick={() => onSelectDate(date)}
              className={`
                w-8 h-8 sm:w-10 sm:h-10 m-0.5 sm:m-1 flex items-center justify-center rounded-full transition-colors
                ${isDisabled ? 'text-slate-300 bg-slate-50 cursor-not-allowed' : 'text-slate-900 hover:bg-slate-200'}
                ${isSelected ? 'bg-slate-900 text-white font-bold border-2 border-slate-800' : ''}
                ${highlightWeekends && isWeekend && !isSelected && !isDisabled ? 'bg-slate-100 font-semibold' : ''}
              `}
              style={{ WebkitAppearance: 'none', backgroundColor: isSelected ? '#1e293b' : undefined }}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}