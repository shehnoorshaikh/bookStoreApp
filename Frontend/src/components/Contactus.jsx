import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    await axios
      .post("http://localhost:4001/contact/contact", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Message Sent Succesfully!");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error" + err.response.data.message);
        setTimeout(() => {}, 2000);
      });
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="flex h-screen items-center justify-center">
        <div className="model-box w-[450px]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h3 className="font-bold text-[32px]">Contact Us</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-90 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-90 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                type="text"
                placeholder="Type your message..."
                className="w-90 px-3 py-1 border rounded-md outline-none"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <button className="btn bg-blue-500 hover:bg-blue-900 text-white px-3 py-1 rounded-md duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
