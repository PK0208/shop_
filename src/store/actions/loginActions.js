export const TOOGLE_USERID = 'TOOGLE_USERID';
export const TOOGLE_CARTTOTAL = 'TOOGLE_CARTTOTAL';
export const SELECTED_ADDRESS = 'SELECTED_ADDRESS';
export const toogleUser = (id,name) => {
  return {type: TOOGLE_USERID, userId: id,userName:name};
};
export const toggleCartTotal = (qty,total) => {
  return {type: TOOGLE_CARTTOTAL, quantity: qty,total:total};
};
export const selectedAddress = (address) => {
  return {type: SELECTED_ADDRESS, address: address};
};