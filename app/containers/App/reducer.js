import * as CONSTANTS from './constants';

const initialState = {
  user: {
    name: 'Somchai',
    company: 'Twin Types Corporation'
  },
  order: {
    id: 'ORD07070707',
    company: {
      name: 'CPF Saraburi',
      address: 'Highway 2, Kaeng Koi Saraburi Thailand',
      phone: '+66 087 348 79 34'
    },
    createdBy: 'Tom Hanks',
    status: 'Pending',
    estimatedDeliveryDate: '14-04-2015',
    type: 'Retailers',
    subTotal: 40033,
    shipping: 0,
    discount: 9999.999,
    tax: 0.07,
    products: [
      {
        sku: 'TN SO 000015',
        description: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listPrice: 880,
        discount: 0.3,
        quantity: 16
      },
      {
        sku: 'TN SO 000015',
        description: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listPrice: 880,
        discount: 0.3,
        quantity: 16
      },
      {
        sku: 'TN SO 000015',
        description: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listPrice: 880,
        discount: 0.3,
        quantity: 16
      },
      {
        sku: 'TN SO 000015',
        description: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listPrice: 880,
        discount: 0.3,
        quantity: 16
      },
      {
        sku: 'TN SO 000015',
        description: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listPrice: null,
        discount: 0.3,
        quantity: 16
      },
      {
        sku: 'TN SO 000015',
        description: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listPrice: 880,
        discount: 0.3,
        quantity: 16
      }
    ]
  },
  isSidebarOpened: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.OPEN_SIDEBAR:
      return Object.assign({}, state, { isSidebarOpened: true });
    case CONSTANTS.CLOSE_SIDEBAR:
      return Object.assign({}, state, { isSidebarOpened: false });
    default:
      return state;
  }
}

export const select = state => state;
