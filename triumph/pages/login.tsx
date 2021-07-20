import NextHead from "next/head";
import React from "react";
import NextLink from "next/link";

const login = () => {
  return (
    <div className="font-body min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <NextHead>
        <title>CaptainCook - Login</title>
        <meta name="description" content="Login to start cooking like a pro" />
        <link rel="icon" href="/logo.svg" />
      </NextHead>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
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
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-hover-red  focus:border-red focus:z-10 sm:text-sm"
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
              className="appearance-none mt-5 rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-hover-red  focus:border-red focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm ml-auto">
            <a
              href="#"
              className="font-medium text-red hover:text-hover-red hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex justify-center py-2 px-10 border border-transparent text-sm font-medium rounded-md text-white bg-red hover:bg-hover-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
        <div className="flex items-center justify-center w-100">
          <h1>
            I am new user{" "}
            <NextLink href="/register">
              <span className="text-sm font-medium cursor-pointer  text-red hover:text-hover-red hover:underline">
                Register!
              </span>
            </NextLink>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default login;
