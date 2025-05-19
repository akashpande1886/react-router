import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-black-700 text-green-500 text-3xl p-5">
      User:{userId}
    </div>
  );
}

export default User;
