import React, { useRef, useState, useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import GoogleSignInButton from "./GoogleSignInButton";
import axios from "axios";
import { useAuth } from "../services/AuthProvider";
import API_BASE_URL from "../../config";

const LoginModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useOutsideClick(modalRef, onClose);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("sending top....");
    console.log("Email " + email);

    try {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Please enter a valid email address");
      }

      const response = await axios.post(
        `${API_BASE_URL}/auth/sendOtp?email=${encodeURIComponent(email)}`
      );

      if (response.status === 201) {
        setOtpSent(true);
        setVerifyOtp(true);
        setLoading(false);
        setMessage(`OTP sent to ${email}`);
      } else {
        throw new Error("Failed to send OTP");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setVerifyOtp(true);
    setError("");
    console.log("Verifying otp.....");

    try {
      if (!otp || otp.length !== 6) {
        throw new Error("Please enter a valid 6-digit OTP");
      }

      // Verify OTP with backend
      const res = await axios.post(
        `${API_BASE_URL}/auth/verifyOtp?email=${email}&otp=${otp}`
      );

      console.log("UserDTO @@@ - " + res.data.userDTO.email);
      if (res.status === 200) {
        setMessage("Login successful!");
        setTimeout(() => {
          onClose();
        }, 1000);
        login({
          token: res.data.token,
          email: res.data.userDTO.email,
          userid: res.data.userDTO.id,
          role: res.data.userDTO.role,
          userName: res.data.userDTO.name,
          pictureURL: res.data.userDTO.pictureURL,
          flag: res.data.userDTO.registerFlag,
          detailSet: res.data.userDTO.detailSet,
        });
      } else {
        throw new Error(response.data.message || "OTP verification failed");
      }
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    console.log("resend otp");
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/sendOtp?email=${encodeURIComponent(email)}`
      );

      if (response.status === 201) {
        setMessage(`OTP to ${email}`);
      } else {
        throw new Error("Failed to send OTP");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

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
            <span className="inline-block"></span>
          </div>
          <h2 className="text-xl font-semibold text-black mb-4">Chogyal</h2>
          <p className="text-gray-500 mt-1 text-sm">
            We'll sign you in or create an account if you don't have one yet.
          </p>
        </div>

        {error && (
          <div className="text-red-500 bg-red-100 py-2 px-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {message && (
          <div className="text-emerald-500 bg-emerald-100 py-2 px-3 rounded mb-4 text-sm">
            {message}
          </div>
        )}

        {/* Continue with Google */}
        <GoogleSignInButton />

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@gmail.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
          {otpSent && (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="flex-grow border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={resendOtp}
                className="text-blue-500 text-sm hover:underline"
              >
                Resend
              </button>
            </div>
          )}
          {verifyOtp ? (
            <button
              onClick={handleOtpSubmit}
              className={`w-full py-2 rounded-md text-sm transition flex items-center justify-center gap-2
              ${
                loading
                  ? "bg-blue-300 cursor-not-allowed opacity-70"
                  : "bg-blue-400 hover:bg-blue-500 cursor-pointer"
              }
              text-white`}
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              )}
              Verify
            </button>
          ) : (
            <button
              onClick={handleEmailSubmit}
              className={`w-full py-2 rounded-md text-sm transition flex items-center justify-center gap-2
              ${
                loading
                  ? "bg-blue-300 cursor-not-allowed opacity-70"
                  : "bg-blue-400 hover:bg-blue-500 cursor-pointer"
              }
              text-white`}
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              )}
              {loading ? "Sending otp ..." : "Continue with email"}
            </button>
          )}
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
