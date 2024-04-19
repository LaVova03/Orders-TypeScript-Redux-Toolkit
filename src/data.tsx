import Monitor from './assets/monitor.png';
import Keyboard from './assets/button.png';
import Burger from './assets/burger.png';

export const orders = [
  {
    id: 1,
    title: 'Order 1',
    image: Burger,
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() { return products }
  },
  {
    id: 2,
    title: 'Order 2',
    image: Burger,
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() { return products }
  },
  {
    id: 3,
    title: 'Order 3',
    image: Burger,
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() { return products },
  }
]

export const products = [
  {
    id: 1,
    serialNumber: 878,
    isNew: 1,
    photo: Monitor,
    title: 'Product 1 Product 1 Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 5656,
    isNew: 1,
    photo: Monitor,
    title: 'Product 2 Product 2 Product 2',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 543545,
    isNew: 1,
    photo: Keyboard,
    title: 'Product 3 Product 3 Product 3',
    type: 'Keyboards',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  }
]


