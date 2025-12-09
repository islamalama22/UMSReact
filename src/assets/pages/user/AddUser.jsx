import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

function AddUser() {
  

  const {register,handleSubmit,formState:{errors}}=useForm();

  const AddUser=(test)=>{
   console.log(test);
  }
 
  return (
    <div className="container">
      <form onSubmit={handleSubmit(AddUser)}>
        <div className="form-floating mb-3">
          <input  {...register('name')}  type="text"  className="form-control" id="userName" placeholder="userName" />
          <label htmlFor="floatingInput">User Name</label>
        </div>


        <div className="form-floating">
          <input {...register('email')} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>

         <div className="form-floating">
          <input  {...register('age')} type="text" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className='btn btn-outline-info'> Add User</button>
      </form>
    </div>

  )
}

export default AddUser;
