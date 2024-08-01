"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ViewEntry({ params }) {
  const { title } = params; // Get the title from URL params
  const [entry, setEntry] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchEntry = async () => {
      const response = await fetch("/data/entries.json");
      const data = await response.json();
      const foundEntry = data.find((entry) => entry.title === title);
      setEntry(foundEntry);
    };

    fetchEntry();
  }, [title]);

  if (!entry) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center h-[85vh] bg-gray-100 p-8 ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[60vw]">
        <h1 className="text-3xl font-bold mb-4">{entry.title}</h1>
        <p className="text-gray-600 mb-4">{entry.date}</p>
        <p className="text-lg mb-6">{entry.entry}</p>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={() => router.push(`/edit-entry/${entry.title}`)} // Navigate to edit page
          >
            Edit Entry
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
            onClick={() => router.push("/my-entries")}
          >
            Back to Entries
          </button>
        </div>
      </div>
    </div>
  );
}
