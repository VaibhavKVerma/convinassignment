import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { getAllUsers, getUser } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state.getFullList.users);
  const getSingleUser = useSelector((state) => state.getSingleUser.user);

  const fetchUser = async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    const data = response.data.data;
    dispatch(getUser(data));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://reqres.in/api/users");
      const data = response.data.data;
      dispatch(getAllUsers(data));
    };

    fetchData().catch(console.error);
  }, [dispatch]);

  const singleUser = (user) => {
    const doc = (
      <>
        <img src={user.avatar} alt={user.id} />
        <div>
          Name : {user.first_name} {user.last_name}
          <br />
          EmailId : {user.email}
        </div>
      </>
    );
    return doc;
  };

  const renderedButton = getUsers.map((user) => {
    return (
      <button
        key={user.id}
        onClick={() => {
          fetchUser(user.id);
        }}
      >
        {user.id}
      </button>
    );
  });

  return (
    <div>
      <div className="box">
        {getSingleUser.id
          ? singleUser(getSingleUser)
          : "Click Below On Buttons To Get Detailed User Data"}
      </div>
      <div className="buttons">{renderedButton}</div>
    </div>
  );
};

export default App;
