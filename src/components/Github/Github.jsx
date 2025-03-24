import React from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {

  const data = useLoaderData()

  return (
    <div className="py-3 bg-amber-700 font-bold text-3xl flex flex-col sm:flex-row justify-evenly items-center text-white">
      No of Github Repositories: {data.public_repos}
      <img
        src={data.avatar_url}
        alt="github-profile"
        className="rounded w-24 sm:w-2xs mt-3 sm:mt-0"
      />
    </div>
  );
};

export default Github;

export const loadingInfo = async () => {
  const response = await fetch("https://api.github.com/users/vivek3931");
  return response.json();
};
