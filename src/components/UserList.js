import React, { useEffect, useContext } from "react";
import UserContext from "../context/User/UserContext";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          href="#!"
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          key={user.id}
          onClick={() => getProfile(user.id)}
        >
          <img src={user.avatar} alt="User" className="img-fluid mr-4 rounded-circle" width="70"/>
          <p className="m-2">{user.email}</p>          
        </a>
      ))}
    </div>
  );
};

export default UserList;
