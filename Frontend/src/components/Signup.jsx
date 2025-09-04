import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return <div className="flex h-screen items-center justify-center">
    <div className="w-[400px] relative p-6 border rounded-lg shadow-md">
  <div className="model-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* Close btn */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Signup</h3>
    {/* Name */}
    <div className="mt-4 space-y-2">
        <span>Name</span>
        <br />
        <input type="text" placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("name", { required: true })}
            />
            <br />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    {/* Email */}
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br />
        <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    {/* Password */}
    <div className="mt-4 space-y-2">
        <span>Password</span>
        <br />
        <input type="text" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className="flex justify-around mt-4 items-center">
        <button className="btn bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200">Login</button>
        <p>Have account
          <button className="text-blue-500 underline cursor-pointer" 
          onClick={() => 
            document.getElementById("my_modal_3").showModal()
          }>
           Login
          </button>
        </p>
    </div>
     </form>
     <Login />
  </div>
</div>
  </div>;
}

export default Signup;
