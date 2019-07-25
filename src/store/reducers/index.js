import { BUY_ITEM, REMOVE_FEATURE } from "../actions/index";

const intialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_ITEM:
      console.log("inside of reducer", action);
      return {
        ...state,
        //additionalPrice: state.additionalPrice + action.payload
        //features: [...car.features. action.payload]
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload.name]
        }
      };
    case REMOVE_FEATURE:
      console.log("inside of reducer", action);
      return {
        ...state,
        //additionalPrice: state.additionalPrice + action.payload
        //features: [...car.features. action.payload]
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload.name]
        }
      };
    default:
      return state;
  }
};
