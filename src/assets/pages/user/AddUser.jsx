import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {

  const navegate = useNavigate();
  const [serverErrors, setServerError] = useState(null);
  const [previwe, setPreviwe] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const AddUser = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("age", values.age);
    formData.append("image", values.image[0]);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/users`, formData);

      console.log(response);
      if (response.status == 200) {
        navegate('/users');
      }
    } catch (err) {
      console.log(err.response.data.errors);
      if (err.status == 400) {
        setServerError(err.response.data.errors);
      }
    }
  }


useEffect(()=>{})


const handleImagePreviwe = (e) => {
  console.log(e.target.files[0]);
  console.log('hahaha');
  setPreviwe(URL.createObjectURL(e.target.files[0]));
}

return (
  <div className="container">
    {serverErrors?.length > 0 ? serverErrors.map((error) => <div className='text-danger'> {error.Age}</div>) : ""}
    <form onSubmit={handleSubmit(AddUser)}>
      <div className="form-floating mb-3">
        <input  {...register('name')} type="text" className="form-control" id="userName" placeholder="userName" />
         {serverErrors?.Name?<div className='text-danger'> {serverErrors.Name[0]}</div>:""}
        <label htmlFor="floatingInput">User Name</label>
      </div>
      <div className="form-floating">
        <input {...register('email')} type="email" className="form-control" id="floatingemail" placeholder="email" />
        {serverErrors?.Email?<div className='text-danger'> {serverErrors.Email[0]}</div>:""}
        <label htmlFor="floatingPassword">email</label>
      </div>
      <div className="form-floating">
        <input  {...register('age')} type="text" className="form-control" id="floatingage" placeholder="Password" />
        {serverErrors?.Age?<div className='text-danger'> {serverErrors.Age[0]}</div>:""}
        <label htmlFor="floatingage">age</label>
      </div>

      <div className="form-floating">
        {previwe ? <img src={previwe} /> : ""}
        <input  {...register('image')} onChange={handleImagePreviwe} type="file" className="form-control" id="floatingimage" placeholder="image" />
        <label htmlFor="floatingage">image</label>
      </div>

      <button className='btn btn-outline-info'> Add User</button>
    </form>
  </div>

)
}

export default AddUser;
