import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

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
    <div>
      <Head>
        <title>New Entry</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="flex items-center justify-between h-[15vh] px-8 shadow-md">
          <div className="text-2xl font-bold">DiaryApp</div>
          <div className="space-x-4">
            <a href="/" className="text-lg">
              My Entries
            </a>
            <a href="#" className="text-lg">
              Settings
            </a>
            <a href="#" className="text-lg">
              Logout
            </a>
          </div>
        </nav>

        <div className="flex flex-1 items-center justify-center h-[85vh] bg-gray-100">
          <form
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
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
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Save Entry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
