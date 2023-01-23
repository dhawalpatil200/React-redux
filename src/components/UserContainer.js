import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";

const UserContainer = () => {
  const { loading, error, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => dispatch(fetchUsers())}>Fetch users</button>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserContainer;
