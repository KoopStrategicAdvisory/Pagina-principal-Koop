const STORAGE_KEY = 'koop.calendar.events';

export function loadCalendarEvents() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(Boolean);
  } catch (err) {
    console.warn('[calendarStorage] load error', err);
    return [];
  }
}

export function saveCalendarEvents(events) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events ?? []));
  } catch (err) {
    console.warn('[calendarStorage] save error', err);
  }
}
