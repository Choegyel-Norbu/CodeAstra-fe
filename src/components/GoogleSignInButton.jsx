import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebaseConfig";

const GoogleSignInButton = ({ setMessage }) => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setMessage(`✅ Welcome ${result.user.displayName}`);
    } catch (error) {
      setMessage(`❌ Google Sign-In failed: ${error.message}`);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full flex items-center cursor-pointer justify-center gap-2 text-black text-sm font-medium py-2.5 px-5 rounded-xl shadow-md hover:shadow-lg transition duration-200 ease-in-out focus:outline-none border border-transparent hover:border-[#cccccc]"
      style={{ color: "#333333" }}
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="w-5 h-5"
      />
      Continue with Google
    </button>
  );
};

export default GoogleSignInButton;
