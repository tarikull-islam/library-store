import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginForm from "../loginForm/LoginForm";
import axios from "axios";
import toast from "react-hot-toast";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:8000/singup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Successfully created!");
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      });
  };

  return (
    <div className="w-full h-[76.5vh] flex items-center justify-center">
      <div className="modal-box dark:bg-slate-900 dark:text-slate-50">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h2>Register</h2>
          <div className="p-4 space-y-5 ">
            <div>
              <span className="label-text dark:text-slate-50">Username</span>
              <label className="input input-bordered flex items-center gap-2 dark:border-gray-200 dark:bg-slate-900 dark:text-slate-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Username"
                  {...register("fullname", { required: true })}
                />
              </label>
              {errors.username && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <span className="label-text dark:text-slate-50">E-mail</span>
              <label className="input input-bordered flex items-center gap-2 dark:border-gray-200 dark:bg-slate-900 dark:text-slate-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </label>
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <span className="label-text  dark:text-slate-50">Password</span>
              <label className="input input-bordered flex items-center gap-2 dark:border-gray-200 dark:bg-slate-900 dark:text-slate-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Set your password"
                  {...register("password", { required: true })}
                />
              </label>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex  justify-between items-center">
              <button type="submit" className="btn btn-secondary">
                Create Account
              </button>
              <h2>
                Did you have account?
                <span
                  className="text-green-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login Now
                </span>
                <LoginForm />
              </h2>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
