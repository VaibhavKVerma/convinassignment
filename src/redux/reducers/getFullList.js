const initialState = {
  users: [],
};

const getFullList = (state = initialState, action) => {
  if (action.type === "GETALLUSERS") {
    return {
      ...state,
      users: action.payload,
    };
  }
  return state;
};

export default getFullList;
