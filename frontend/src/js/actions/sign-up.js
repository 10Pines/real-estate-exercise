export const names = {
  START: "SIGN_UP__START",
  BACK: "SIGN_UP__BACK",
  NEXT: "SIGN_UP__NEXT"
};

const start = (roles) => ({
  type: names.START,
  roles
});

const back = () => ({
  type: names.BACK
});

const next = () => ({
  type: names.NEXT
});

const finish = () => (dispatch) => {
  console.log("This should call the sign up service");
};

export default {
  start,
  back,
  next,
  finish
};
