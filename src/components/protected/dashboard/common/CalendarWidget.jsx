import { useEffect, useMemo, useState } from 'react';

const WEEKDAY_LABELS = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

function buildCalendarMatrix(referenceDate) {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const grid = [];
  let day = 1 - firstWeekday;

  for (let row = 0; row < 6; row += 1) {
    const week = [];
    for (let col = 0; col < 7; col += 1) {
      const current = new Date(year, month, day);
      const inCurrentMonth = day >= 1 && day <= daysInMonth;
      week.push({
        date: current,
        inCurrentMonth,
      });
      day += 1;
    }
    grid.push(week);
  }

  return grid;
}

function toDateKey(date) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function CalendarWidget({
  value,
  onChange,
  onDateSelect,
  events = [],
  className = '',
}) {
  const today = useMemo(() => new Date(), []);
  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [internalSelectedDate, setInternalSelectedDate] = useState(today);

  useEffect(() => {
    if (value instanceof Date) {
      setInternalSelectedDate(value);
      setViewDate(new Date(value.getFullYear(), value.getMonth(), 1));
    }
  }, [value]);

  const selectedDate = value instanceof Date ? value : internalSelectedDate;
  const delegateChange = typeof onChange === 'function' ? onChange : onDateSelect;

  const monthLabel = useMemo(
    () => viewDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }),
    [viewDate]
  );

  const calendarMatrix = useMemo(() => buildCalendarMatrix(viewDate), [viewDate]);

  const eventsByDate = useMemo(() => {
    const map = new Map();
    (events || []).forEach((event) => {
      const key = event?.date || event?.dateKey;
      if (!key) return;
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(event);
    });
    return map;
  }, [events]);

  const handleSelect = (date) => {
    if (!(date instanceof Date)) return;
    if (!(value instanceof Date)) {
      setInternalSelectedDate(date);
    }
    if (typeof delegateChange === 'function') {
      delegateChange(date);
    }
  };

  const goToMonth = (offset) => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
  };

  const containerClass = ['dash-item', className].filter(Boolean).join(' ').trim();

  return (
    <div className={containerClass}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => goToMonth(-1)}
          aria-label="Mes anterior"
        >
          ◀
        </button>
        <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{monthLabel}</div>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => goToMonth(1)}
          aria-label="Mes siguiente"
        >
          ▶
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, marginBottom: 8 }}>
        {WEEKDAY_LABELS.map((label) => (
          <div key={label} style={{ textAlign: 'center', fontSize: 12, fontWeight: 600, opacity: 0.75 }}>
            {label}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
        {calendarMatrix.map((week, weekIndex) =>
          week.map(({ date, inCurrentMonth }, dayIndex) => {
            const dateKey = toDateKey(date);
            const isToday = date.toDateString() === today.toDateString();
            const isSelected = date.toDateString() === selectedDate.toDateString();
            const dayEvents = eventsByDate.get(dateKey) || [];

            const baseStyle = {
              position: 'relative',
              borderRadius: 8,
              border: '1px solid rgba(148, 163, 184, 0.25)',
              padding: '8px 0',
              textAlign: 'center',
              fontSize: 13,
              cursor: inCurrentMonth ? 'pointer' : 'default',
              opacity: inCurrentMonth ? 1 : 0.35,
              background: '#1f2937',
              color: '#e2e8f0',
              transition: 'transform 0.12s ease',
            };

            if (isToday) {
              baseStyle.border = '1px solid #38bdf8';
            }
            if (isSelected) {
              baseStyle.background = 'linear-gradient(135deg, #38b2ac, #0ea5e9)';
              baseStyle.color = '#0f172a';
              baseStyle.fontWeight = 700;
            }
            if (inCurrentMonth && dayEvents.length > 0 && !isSelected) {
              // Resaltar el día con anotaciones
              baseStyle.background = '#f5b891';
              baseStyle.color = '#0f172a';
              baseStyle.border = '1px solid rgba(245, 184, 145, 0.65)';
              baseStyle.fontWeight = 600;
            }

            return (
              <button
                key={`${weekIndex}-${dayIndex}`}
                type="button"
                style={baseStyle}
                disabled={!inCurrentMonth}
                onClick={() => inCurrentMonth && handleSelect(date)}
              >
                {date.getDate()}
                {dayEvents.length > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 6,
                      height: 6,
                      borderRadius: '999px',
                      background: isSelected ? '#0f172a' : (inCurrentMonth ? '#7c3a00' : '#38bdf8'),
                    }}
                  />
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}



