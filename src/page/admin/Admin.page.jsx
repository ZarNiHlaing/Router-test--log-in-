import React, { useEffect, useState } from 'react'
import { Authenticate } from '../../service/User.service';
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const nav = useNavigate();
    const [formData,setFormData] =useState({
        email:"",
        password:"",
    });

    useEffect(() => {
        const finder = localStorage.getItem("Authenticate");
        if (finder) {
          nav("/dashboard");
        }
      }, []);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(formData);

        const data =await Authenticate("/user", formData);
      if (data) {
        localStorage.setItem("Authenticate",JSON.stringify(data));
        nav("/dashboard", { state: {data}});
      }
    };

  return (
    <div className='h-[300px] w-[300px] mx-auto  bg-red-500'>
       <div className='w-[50%] mx-auto '>
       <form onSubmit={handleSubmit} action="" className='flex flex-col  pt-10'>
            <div className='flex flex-col py-5 '>
                <label htmlFor="email">Enter Your email</label>
                <input value={formData.email} onChange={(e) => setFormData((pre) =>({...pre , email: e.target.value}))} type="email" id='email' name='email' />
            </div>
            <div className='flex flex-col pb-5'>
                <label htmlFor="password">Enter Your Password</label>
                <input value={formData.password} onChange={(e) => setFormData((pre) =>({...pre, password: e.target.value}))} type="password" id='password' name='password' />
            </div>
            <button className='bg-zinc-500 border mx-auto mt-3 w-[100px] rounded' type='submit'>Log in</button>
        </form>
       </div>
    </div>
  )
}

export default AdminPage