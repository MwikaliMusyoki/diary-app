"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-1 items-center justify-center h-[85vh] bg-gray-100 bg-cover bg-center my-pic">
      <div className="text-center">
        <h1 className=" font-bold mb-4 lt">Welcome to Your Diary</h1>
        <p className="text-lg lp mb-8">
          A place to store your thoughts and memories.
        </p>
        <div className="space-x-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg lb transition-transform transform hover:bg-blue-600 hover:scale-105"
            onClick={() => router.push("/new-entry")}
          >
            Create A New Entry
          </button>
        </div>
      </div>
    </div>
  );
}
