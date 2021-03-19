let eventGuid = 0
var today = new Date();
let todayStr = today.toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

const date1 = new Date();
date1.setDate(date1.getDate() + 2);
let date1Str = date1.toISOString().replace(/T.*$/, '');

const date2 = new Date();
date2.setDate(date2.getDate() + 5);
let date2Str = date2.toISOString().replace(/T.*$/, '');

const date3 = new Date();
date3.setDate(date3.getDate() + 6);
let date3Str = date3.toISOString().replace(/T.*$/, '');

const date4 = new Date();
date4.setDate(date4.getDate() + 8);
let date4Str = date4.toISOString().replace(/T.*$/, '');

const date5 = new Date();
date5.setDate(date5.getDate() - 6);
let date5Str = date5.toISOString().replace(/T.*$/, '');

const date6 = new Date();
date6.setDate(date6.getDate() - 2);
let date6Str = date6.toISOString().replace(/T.*$/, '');


export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Staging - Ready for QA',
    start: date5Str
  },
  {
    id: createEventId(),
    title: 'Done',
    start: date6Str
  },
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Ticket 005',
    start: date1Str + 'T12:00:00',
    end: date2Str + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'QA Project',
    start: date3Str + 'T12:00:00',
    end: date4Str + 'T12:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}