import {TOOGLE_USERID} from '../actions/loginActions';
import {TOOGLE_CARTTOTAL} from '../actions/loginActions';
import {SELECTED_ADDRESS} from '../actions/loginActions';
const initialState = {
  userId: null,
  userName: null,
  cartTotal: 0,
  quantity: 0,
  selectedAddress: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_USERID:
      return {...state, userId: action.userId, userName: action.userName};
    case TOOGLE_CARTTOTAL:
      return {...state, cartTotal: action.total, quantity: action.quantity};
    case SELECTED_ADDRESS:
      return {...state, selectedAddress: action.address};
    default:
      return state;
  }
};

export default loginReducer;
