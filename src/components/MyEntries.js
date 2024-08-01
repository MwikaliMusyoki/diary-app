// src/app/my-entries/page.js

import MyEntries from "@/app/my-entries/page"; // Adjust the import path if necessary
import RootLayout from "@/app/layout"; // Import the RootLayout

export default function MyEntriesPage() {
  return (
    <RootLayout currentPage="my-entries">
      {" "}
      {/* Set currentPage to "my-entries" */}
      <MyEntries />
    </RootLayout>
  );
}
