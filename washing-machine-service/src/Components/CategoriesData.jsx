import React, { useEffect, useState } from "react";

const CategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4); // Default for small screens
  const [screenSize, setScreenSize] = useState(window.innerWidth); // Track screen size

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Update visibleCount based on screen size
    if (screenSize >= 1024) {
      setVisibleCount(6); // For large screens, show 6 items
    } else {
      setVisibleCount(4); // For small screens, show 4 items
    }

    // Add resize event listener
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  const handleToggleView = () => {
    if (visibleCount >= categories.length) {
      setVisibleCount(screenSize >= 1024 ? 6 : 4);
    } else {
      setVisibleCount((prevCount) => prevCount + (screenSize >= 1024 ? 6 : 4));
    }
  };

  return (
    <div className="p-4 bg-base-100">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="max-w-xs p-6 rounded-md shadow-md bg-white hover:bg-blue-100 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover object-center w-full rounded-md h-72"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-blue-600">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                {item.name}
              </h2>
            </div>
            <p className="text-gray-800">{item.description}</p>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      {categories.length > visibleCount && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleToggleView}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {visibleCount >= categories.length ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoriesData;
