"use client";

import { useRouter } from "next/navigation";

const Navbar = ({ currentPage }) => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between h-[15vh] px-8 shadow-md">
      <div className="text-2xl font-bold">DiaryApp</div>
      <div className="space-x-4">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="text-lg bg-transparent hover:bg-yellow-200 rounded-lg transition duration-200 ease-in-out py-2 px-4"
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => router.push("/my-entries")}
          className="text-lg bg-transparent hover:bg-yellow-200 rounded-lg transition duration-200 ease-in-out py-2 px-4"
        >
          My Entries
        </button>
        <button
          type="button"
          onClick={() => router.push("/settings")}
          className="text-lg bg-transparent hover:bg-yellow-200 rounded-lg transition duration-200 ease-in-out py-2 px-4"
        >
          Settings
        </button>
        <button
          type="button"
          onClick={() => router.push("/logout")}
          className="text-lg bg-transparent hover:bg-yellow-200 rounded-lg transition duration-200 ease-in-out py-2 px-4"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
