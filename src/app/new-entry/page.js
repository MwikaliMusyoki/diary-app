"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewEntry() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [entry, setEntry] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = { title, date, entry };

    const response = await fetch("/api/save-entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });

    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center h-[85vh] bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md h-[85vh]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">New Diary Entry</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Entry</label>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Save Entry
          </button>
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
            onClick={() => router.push("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
