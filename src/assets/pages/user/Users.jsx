import React, { useEffect, useState } from "react";
import axios from "axios";
import userFetch from "../../../Hooks/userFetch";

function Users() {
   const {data,isLoading,isError}=userFetch('users');

  if (isError) {
    return <div className=" text-danger"> {isError}</div>
  }



  if (isLoading) {
    return <h2> loading </h2>
  }
  return (
  <>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      <tbody>
        {data.users.map((user) => (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <img
                style={{ width: "100px", borderRadius: "8px" }}
                src={user.imageUrl}
                alt={user.name}
              />
            </td>
            <td>
              <button className="btn btn-success btn-sm me-2">Add</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  </>
);

}

export default Users;
