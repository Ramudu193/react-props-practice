import { createStore } from 'redux';

const initialState = {
  user: {
    username: "Sanjeev Bikhchandani",
    balance: 25000
  },
};

export const addMoney = (amt) => ({
  type: 'addMoney',
  payload: amt
});

function reducer(state = initialState, action) {
  switch(action.type) {
    case "addMoney":
      return {
        user: {
          ...state.user, // preserve username
          balance: state.user.balance + action.payload
        }
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;