import React, { useEffect, useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  useEffect(() => {}, []);

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
            <img src={selectedUser.avatar} alt="Profile" className="card-img-top m-auto img-fluid mr-4 rounded-circle" style={{width:180}}/>
          <h1>
            {selectedUser.first_name} {selectedUser.last_name}
          </h1>
          <p>
            {selectedUser.email}
          </p>
        </div>
      ) : (
        <p>NO ONE SELECTED</p>
      )}
    </>
  );
};

export default Profile;
