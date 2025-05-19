import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/akashpande1886")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  const data = useLoaderData();
  console.log(Object.keys(data));

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers:{data.followers}
        <img src={data.avatar_url} alt="Git image" width={300} />
        Name:{data.name}
        email:{data.email}
        bio:{data.bio}
        Active user since:{data.created_at}
        Last Active:{data.updated_at}
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  return res.json();
};
