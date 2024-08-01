"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MyEntries() {
  const [entries, setEntries] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("/data/entries.json");
      if (!response.ok) {
        console.error("Failed to fetch entries");
        return;
      }
      const data = await response.json();
      setEntries(data);
    };

    fetchEntries();
  }, []);

  const handleDelete = async (title) => {
    const response = await fetch("/api/delete-entry", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (response.ok) {
      setEntries(entries.filter((entry) => entry.title !== title));
    }
  };

  return (
    <div className="flex flex-col h-[85vh] items-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">My Diary Entries</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {entries.map((entry) => (
          <div
            key={entry.title}
            className="bg-white shadow-lg rounded-lg p-4 w-[60vw]"
          >
            <h2 className="text-xl font-semibold">{entry.title}</h2>
            <p className="text-gray-600">{entry.date}</p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded-lg"
                  onClick={() => router.push(`/view-entry/${entry.title}`)}
                >
                  View
                </button>
                <button
                  className="bg-yellow-300 text-white py-1 px-3 rounded-lg"
                  onClick={() => router.push(`/edit-entry/${entry.title}`)}
                >
                  Edit
                </button>
              </div>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded-lg"
                onClick={() => handleDelete(entry.title)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
