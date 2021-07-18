import NextHead from "next/head";
import React from "react";

const register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <NextHead>
        <title>CaptainCook - Register</title>
        <meta
          name="description"
          content="Create your account to start cooking like a pro"
        />
        <link rel="icon" href="/logo.svg" />
      </NextHead>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              className="appearance-none relative block rounded-lg w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-hover-red  focus:border-red focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none mt-5 relative block w-full px-3 py-2 border rounded-lg border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-hover-red  focus:border-red focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a href="#">
              By creating an account your agree with{" "}
              <span className="font-medium text-red hover:text-hover-red">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="font-medium text-red hover:text-hover-red">
                Terms and Conditions
              </span>
            </a>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="group relative flex justify-center py-2 px-5 border border-transparent text-sm font-medium rounded-md text-white bg-red hover:bg-hover-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default register;
