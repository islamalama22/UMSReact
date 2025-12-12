import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../../Hooks/useFetch";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
function Users() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useFetch(
    `users?limit=5&skip=${(page - 1) * 5}`,
    [page]
  );
  // api?limit=4   will  get  4 usedrs
  // page=>1
  // limit=>5
  //  skip =(page-1)*limit

  const deleteUser = async (id) => {
    try {
      const resposne = await axios.delete(
        `${import.meta.env.VITE_BURL}/users/${id}`
      );
      console.log(resposne);

      if (resposne.status == 200) {
        toast.success("User Deleted succesfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
    }
  };

  if (isError) {
    return <div className=" text-danger"> {isError}</div>;
  }

  if (isLoading) {
    return <h2> loading </h2>;
  }

  const numberOfPages = Math.ceil(data.totalCount / 5);
 const pageItems = [];
for (let i = 1; i <= numberOfPages; i++) {
  pageItems.push(
    <li key={i} className="page-item">
      <button className="page-link" onClick={() => setPage(i)}>
        {i}
      </button>
    </li>
  );
}

  

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>

              <td>
                <Link className="btn btn-outline-dark" to={`/users/${user.id}`}>
                  details
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<ul className="pagination">
  <li className="page-item">
    <button
      className="page-link"
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
    >
      previous
    </button>
  </li>

  {pageItems}

  <li className="page-item">
    <button
      className="page-link"
      disabled={page === numberOfPages}
      onClick={() => setPage(page + 1)}
    >
      next
    </button>
  </li>
</ul>

    </>
  );
}

export default Users;
