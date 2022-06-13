const initialState = {
  user: [],
};

const getSingleUser = (state = initialState, action) => {
  if (action.type === "GETUSER") {
    return { ...state, user: action.payload };
  }
  return state;
};

export default getSingleUser;
