import { getRandomArrayElement } from '../utils.js';
import { EVENTS_TYPES, PHOTO_URL} from '../const.js';

// Пункт назначения
const mockDestination = [
  {
    id: '1',
    description: 'New York ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    name: 'New York',
    pictures: [
      {
        src: `${PHOTO_URL}1`,
        description: 'New York picture 1'
      }
    ]
  },
  {
    id: '2',
    description: 'London ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    name: 'London',
    pictures: [
      {
        src: `${PHOTO_URL}2`,
        description: 'London picture 2'
      },
      {
        src: `${PHOTO_URL}3`,
        description: 'London picture 3'
      }
    ]
  },
  {
    id: '3',
    description: 'Moscow ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    name: 'Moscow',
    pictures: [
      {
        src: `${PHOTO_URL}4`,
        description: 'Moscow picture 4'
      },
      {
        src: `${PHOTO_URL}5`,
        description: 'Moscow picture 5'
      },
      {
        src: `${PHOTO_URL}6`,
        description: 'Moscow picture 6'
      }
    ]
  },
];

// Дополнительные опции
const mockOffers = [
  {
    type: getRandomArrayElement(EVENTS_TYPES),
    offers: [
      {
        id: 'one',
        title: 'one to a business class',
        price: 120
      }
    ]
  },
  {
    type: getRandomArrayElement(EVENTS_TYPES),
    offers: [
      {
        id: 'two',
        title: 'two fermentum',
        price: 100
      },
      {
        id: 'three',
        title: 'three',
        price: 50
      }
    ]
  },
  {
    type: getRandomArrayElement(EVENTS_TYPES),
    offers: [
      {
        id: 'four',
        title: 'four rutrum',
        price: 80
      },
      {
        id: 'five',
        title: 'five blandit',
        price: 15
      },
      {
        id: 'six',
        title: 'six nunc ex',
        price: 25
      }
    ]
  }
];

const mockEvents = [
  {
    id: '11',
    basePrice: 1100,
    dateFrom: '2019-07-10T09:15:56.845Z',
    dateTo: '2019-07-11T04:55:13.375Z',
    destination: mockDestination[0],
    isFavorite: false,
    offers: [
      mockOffers[0].offers[0]
    ],
    type: mockOffers[0].type
  },
  {
    id: '22',
    basePrice: 900,
    dateFrom: '2019-08-02T09:15:56.845Z',
    dateTo: '2019-08-02T09:55:13.375Z',
    destination: mockDestination[1],
    isFavorite: true,
    offers: [
      mockOffers[1].offers[0],
      mockOffers[1].offers[1]
    ],
    type: mockOffers[1].type
  },
  {
    id: '33',
    basePrice: 875,
    dateFrom: '2019-09-15T09:15:56.845Z',
    dateTo: '2019-09-17T04:55:13.375Z',
    destination: mockDestination[2],
    isFavorite: false,
    offers: [
      mockOffers[2].offers[0],
      mockOffers[2].offers[1],
      mockOffers[2].offers[2]
    ],
    type: mockOffers[2].type
  }
];

const getRandomEvent = () => getRandomArrayElement(mockEvents);

export { getRandomEvent };