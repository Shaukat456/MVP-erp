import { useState } from "react";

export default function Example() {
  const [showSearch, setShowSearch] = useState(false);

  const handleUploadClick = () => {
    setShowSearch(true);
  };

  return (
    <div>
      <button
        onClick={handleUploadClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
      >
        Upload
      </button>
      {showSearch && (
        <div className="mt-4">
          <label
            htmlFor="search"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Search
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </div>
  );
}
