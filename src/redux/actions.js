export const getAllUsers = (data) => {
  return {
    type: "GETALLUSERS",
    payload: data,
  };
};

export const getUser = (data) => {
  return {
    type: "GETUSER",
    payload: data,
  };
};
