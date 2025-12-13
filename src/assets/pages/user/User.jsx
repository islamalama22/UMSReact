import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, isError } = useFetch(`users/${id}`);
  console.log(data);
  if(isError){
    return <div className=" text-danger"> {isError}</div>
  }

  if(isLoading){
    return <h2> Loading..</h2>
  }
  return <>
    <div>
      <h2>name : {data.data.name}</h2>
      <h2>email : {data.data.email}</h2>
       <img style={{ width: 100,height:100}}  src={data.data.image}
/>  { console.log(data.data.image)}
      <p> age :{data.data.id}</p>


    </div>
  </>; 
}

export default User;
