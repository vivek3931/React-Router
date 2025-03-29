import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../Context/UserContext";
const User = () => {
  const { userid } = useParams();
  const { user } = useContext(UserContext);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-[90%] max-w-2xl flex-col justify-center items-center py-4 bg-yellow-100 border border-gray-400 rounded-2xl">
        <div className="font-bold text-3xl flex items-center justify-center  text-red-600 w-full">
          User : {userid}
        </div>
        {!user ? (
          <h1 className="font-bold text-3xl text-center ">
            Plz Login in to continue
            <br/>
            Not logged in !!
          </h1>
        ) : (
          <h1 className="text-3xl font-bold ">
            Welcome {user.username}!!!
          </h1>
        )}
      </div>
    </div>
  );
};

export default User;
