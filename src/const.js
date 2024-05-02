const SORT_TYPES = ['day', 'event', 'time', 'price', 'offers'];
const FILTER_TYPES = ['everything', 'future', 'present', 'past'];
const EVENTS_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const EVENT_COUNT = 4;
const PHOTO_COUNT = 5;
const PHOTO_URL = 'https://loremflickr.com/248/152?random=';
const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';

const FLIGHT_OFFERS = [
  {
    id: 'luggage',
    title: 'Add luggage',
    price: 30,
    checked: true
  },
  {
    id: 'comfort',
    title: 'Switch to comfort class',
    price: 100,
    checked: true
  },
  {
    id: 'meal',
    title: 'Add meal',
    price: 15,
    checked: false
  },
  {
    id: 'seats',
    title: 'Choose seats',
    price: 5,
    checked: false
  },
  {
    id: 'train-',
    title: 'Travel by train',
    price: 40,
    checked: false
  }
];

export { SORT_TYPES, FILTER_TYPES, EVENTS_TYPES, EVENT_COUNT, PHOTO_URL, PHOTO_COUNT, DATE_FORMAT, TIME_FORMAT, FLIGHT_OFFERS };
