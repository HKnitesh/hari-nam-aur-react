import { useState } from "react"
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const Github = () => {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/HKnitesh')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })


  // }, [])
  const data = useLoaderData();

  return (
    <div className='flex justify-center items-center min-h-[300px] gap-5'>

      <img src={data.avatar_url} alt="profile" className="w-44" />
      <div className="flex flex-col">

        <h1>User Name: {data.login}</h1>
        <h3>Id: {data.id}</h3>
        <p>Followers: {data.followers}</p>
        <p>Following: {data.following}</p>
        <p>Repo No.: {data.public_repos}</p>
        <p>Profile created date: {data.created_at}</p>
      </div>
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/HKnitesh')

  return res.json();
}