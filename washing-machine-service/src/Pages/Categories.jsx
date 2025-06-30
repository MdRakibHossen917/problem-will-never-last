import React, { Suspense, lazy } from "react";

const CategoriesData = lazy(() => import("../Components/CategoriesData"));

const Categories = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center space-x-2">
            
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
          </div>
        }
      >
        <CategoriesData />
      </Suspense>
    </div>
  );
};

export default Categories;
