"use client";
// import { SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Example data
const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    itemId: "A123",
    location: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    itemId: "B456",
    location: "Los Angeles",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    itemId: "C789",
    location: "Chicago",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    itemId: "D012",
    location: "Houston",
  },
];

export default function Example() {
  // Initialize Supabase client
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZobWZiZGN5aHhsc2RlZmN1Ym91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3NjgwNDgsImV4cCI6MjAyNDM0NDA0OH0.5SXgBx7mF7cckGFOI0PLCzqBrmTyJ-_Ygi1m-2Bd65A";

  const supabaseUrl = "https://fhmfbdcyhxlsdefcubou.supabase.co";
  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log(supabase);

  const { data: ITEMSCATALOG } = supabase.from("ITEMSCATALOG").select("*");

  console.log(ITEMSCATALOG);
  // Example function to fetch data from a table
  //   const fetchData = async () => {
  //     try {
  //       const { data, error } = await supabase
  //         .from("your_table_name")
  //         .select("*");
  //       if (error) {
  //         throw error;
  //       }
  //       console.log("Data:", data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error.message);
  //     }
  //   };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("itemId");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchByChange = (e: any) => {
    setSearchBy(e.target.value);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredResults = userData.filter((user) =>
      user[searchBy].toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="itemId"
            checked={searchBy === "itemId"}
            onChange={handleSearchByChange}
            className="form-radio"
          />
          <span className="ml-2">Search by ItemId</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            value="location"
            checked={searchBy === "location"}
            onChange={handleSearchByChange}
            className="form-radio"
          />
          <span className="ml-2">Search by Location</span>
        </label>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder={`Search by ${
          searchBy === "itemId" ? "ItemId" : "Location"
        }...`}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      <ul>
        {searchResults.map((user) => (
          <li key={user.id} className="mb-2 p-2 bg-white rounded-lg shadow-md">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-gray-600">ItemId: {user.itemId}</p>
            <p className="text-gray-600">Location: {user.location}</p>
            <p className="text-gray-600">Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
