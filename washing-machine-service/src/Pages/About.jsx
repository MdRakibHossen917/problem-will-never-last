import React from "react";
import { useNavigate } from "react-router"; // useNavigate ইম্পোর্ট করতে হবে

const About = () => {
  const navigate = useNavigate(); // useNavigate হুক ব্যবহার করা

  const handleBackToHome = () => {
    navigate("/category"); // হোম পেজে চলে যাবে
  };

  return (
    <div className="min-h-[calc(100vh-104px-124px)] flex items-center justify-center">
      <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 shadow-md rounded-md">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src="https://i.ibb.co.com/nNXvWjjZ/Whats-App-Image-2025-05-11-at-15-36-10.jpg"
            alt="Profile"
            className="w-full h-full object-contain rounded"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Sojan Ahmed</h2>
            <span className="text-sm dark:text-gray-600">General manager</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              {/* Email Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                />
              </svg>
              <span className="dark:text-gray-600">DK-Schweizer@.com</span>
            </span>
            <span className="flex items-center space-x-2">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                />
              </svg>
              <span className="dark:text-gray-600">+25 000 33 900</span>
            </span>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleBackToHome}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
    </div>
  );
};

export default About;
