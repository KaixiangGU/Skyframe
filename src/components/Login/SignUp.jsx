import React from "react";
import LoginLayout from "./LoginLayout";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex w-full">
      <LoginLayout />
      <div className="grow bg-gray-100">
        <div>
          <h1 className="mt-24 py-2 text-center text-4xl font-semibold">Sign Up</h1>
          <h2 className="mb-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-500 underline underline-offset-2">
              Login
            </Link>
          </h2>
          <form>
            <div className="mx-auto flex w-[400px] flex-col rounded-lg bg-white px-10 py-8 shadow-md">
              <div>
                <label for="email" className="text-lg">
                  Email
                </label>
                <div className="py-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-sm border border-gray-300 py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>
              <div>
                <label for="password" className="text-lg">
                  Password
                </label>
                <div className="py-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full rounded-sm border border-gray-300 py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>
              <div>
                <label for="password" className="text-lg">
                  Confirm Password
                </label>
                <div className="py-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full rounded-sm border border-gray-300 py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>
              <p className="mb-4">Continue as guest</p>
              <div className="text-md rounded-sm bg-indigo-400 py-2 text-center font-semibold text-white shadow-sm">
                <button type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
