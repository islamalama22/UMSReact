import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import  axios from 'axios';

function AddUser() {
  

  const {register,handleSubmit,formState:{errors}}=useForm();

  const AddUser=async (values)=>{
    const formData=new  FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("age", values.age);
    formData.append("image", values.image[0]);
   const response=await axios.post(`${import.meta.env.VITE_BURL}/users` ,formData);

    console.log(response);
    };
 
  return (
    <div className="container">
      <form onSubmit={handleSubmit(AddUser)}>
        <div className="form-floating mb-3">
          <input  {...register('name')}  type="text"  className="form-control" id="userName" placeholder="userName" />
          <label htmlFor="floatingInput">User Name</label>
        </div>


        <div className="form-floating">
          <input {...register('email')} type="email" className="form-control" id="floatingemail" placeholder="email" />
          <label htmlFor="floatingPassword">email</label>
        </div>

         <div className="form-floating">
          <input  {...register('age')} type="text" className="form-control" id="floatingage" placeholder="Password" />
          <label htmlFor="floatingage">age</label>
        </div>

         <div className="form-floating">
          <input  {...register('image')} type="file" className="form-control" id="floatingimage" placeholder="image" />
          <label htmlFor="floatingage">image</label>
        </div>

        <button className='btn btn-outline-info'> Add User</button>
      </form>
    </div>

  )
}

export default AddUser;
