import React, { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import GoogleSignInButton from "./GoogleSignInButton";

const LoginModal = ({ onClose }) => {
  const modalRef = useRef(null);

  useOutsideClick(modalRef, onClose);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative"
      >
        {/* Close button (×) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Logo and Title */}
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2 text-black">
            <span className="inline-block">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2L3 20h18L12 2z"
                />
              </svg> */}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-black mb-4">CodeAstra</h2>
          <p className="text-gray-500 mt-1 text-sm">
            We'll sign you in or create an account if you don't have one yet.
          </p>
        </div>

        {/* Continue with Google */}
        <GoogleSignInButton />

        {/* <button className="w-full border rounded-md py-2 px-4 flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button> */}

        {/* Divider */}
        <div className="flex items-center my-4 text-gray-400 text-sm">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-2">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Email and OTP */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="choegyell@gmail.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter OTP"
              className="flex-grow border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="text-blue-500 text-sm hover:underline">
              Resend
            </button>
          </div>
          <button className="w-full bg-blue-400 text-white py-2 rounded-md text-sm hover:bg-blue-500 transition">
            Continue
          </button>
        </div>

        {/* Terms */}
        <p className="text-xs text-center text-gray-400 mt-4">
          By signing up or signing in, you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
