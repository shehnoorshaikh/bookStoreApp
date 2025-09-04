import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="flex h-screen items-center justify-center">
          <div className="model-box w-[450px]">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close btn */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
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
              <button className="btn bg-blue-500 text-white px-3 py-1 rounded-md duration-200">
                Login
              </button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Contactus;
