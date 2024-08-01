"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditEntry({ params }) {
  const { title } = params; // Get the title from URL params
  const [entry, setEntry] = useState({ title: "", date: "", entry: "" });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/save-entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    if (response.ok) {
      router.push("/my-entries"); // Redirect back to My Entries after saving
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Edit Diary Entry</h1>
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={entry.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={entry.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Entry</label>
          <textarea
            name="entry"
            value={entry.entry}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Save Changes
        </button>
      </form>
      <button
        className="mt-2 bg-gray-500 text-white py-2 px-4 rounded-lg"
        onClick={() => router.push("/my-entries")}
      >
        Cancel
      </button>
    </div>
  );
}
