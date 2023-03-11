"use client";
import { useState } from "react";
// import { DataProvider, useStore } from "@/store/GlobalStore";
// import { loginRequest } from "@/utils/actions";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //   const { dispatch } = useStore();

  async function submitForm() {
    //     const res = await loginRequest(email,password)
    //     if (res.token) {
    //       dispatch({ type: "AUTH", payload: res });
    //       // Add the token to local storage
    //        localStorage.setItem("userCredentials", JSON.stringify(res));
    //
    //     }
  }
  return (
    <>
      {/* <DataProvider> */}
      <div className="flex flex-col items-center text-left justify-center px-6 py-8 min-w-[320px] mx-auto w-full lg:py-20">
        <div className="w-full bg-gray-50 rounded-lg shadow border border-gray-200 md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login to Chat AI
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 ">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline "
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="button"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={submitForm}
              >
                Sign in
              </button>
              {/* <p className="text-sm font-light text-gray-500 ">
                Do not have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline "
                >
                  Sign up
                </a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
      {/* </DataProvider> */}
    </>
  );
}
