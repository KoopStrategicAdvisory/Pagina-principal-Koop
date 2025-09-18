import { useCallback, useEffect, useState } from 'react';
import { loadCalendarEvents, saveCalendarEvents } from '../infraestructure/calendarStorage';

const STORAGE_KEY = 'koop.calendar.events';

export default function useCalendarEvents() {
  const [events, setEvents] = useState(() => loadCalendarEvents());

  useEffect(() => {
    const handler = (evt) => {
      if (evt?.key === STORAGE_KEY) {
        setEvents(loadCalendarEvents());
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handler);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', handler);
      }
    };
  }, []);

  const updateEvents = useCallback((updater) => {
    setEvents((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      saveCalendarEvents(next);
      return next;
    });
  }, []);

  return [events, updateEvents];
}
