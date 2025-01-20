/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Image from "./Image";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasCanceled = localStorage.getItem("newsletterCanceled");
    if (!hasCanceled) {
      setIsVisible(true);
    }
  }, []);

  const handleEmailChange = (evt) => {
    const value = evt.target.value;
    setEmail(value);

    if (value.trim() === "") {
      setEmailErrorMessage("Email is required");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailErrorMessage("Please enter a valid email address");
      } else {
        setEmailErrorMessage("");
      }
    }

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!email.trim()) {
      setEmailErrorMessage("Email is required");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/addSubscriber`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.error) {
        setErrorMessage(data.error.detail || "An error occurred.");
        setSuccessMessage("");
      } else {
        setSuccessMessage("Thanks for subscribing! Please check your email to confirm.");
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  const handleClose = () => {
    localStorage.setItem("newsletterCanceled", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 max-w-sm sm:max-w-md lg:max-w-lg">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <Image src="cancel.png" alt="volume9ine logo" w={24} h={24} />
        </button>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base text-center">
          Get the latest updates, tips, and resources delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row sm:justify-between items-center gap-4"
        >
          <div className="w-full sm:w-auto">
            <input
              onChange={handleEmailChange}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {emailErrorMessage && (
              <p className="text-sm text-red-600">{emailErrorMessage}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-6 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-400 transition duration-200"
          >
            {loading ? "Loading..." : "Subscribe"}
          </button>
        </form>

        {(successMessage || errorMessage) && (
          <div
            className={`mt-6 p-4 rounded-md ${
              successMessage ? "bg-green-100" : "bg-red-100"
            } text-${successMessage ? "green" : "red"}-700 text-center`}
          >
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
