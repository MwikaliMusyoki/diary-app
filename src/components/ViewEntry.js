// src/app/view-entry/[title]/page.js

import ViewEntry from "@/app/view-entry/[title]/page"; // Adjust the import path if necessary
import RootLayout from "@/app/layout"; // Import the RootLayout

export default function ViewEntryPage({ params }) {
  return (
    <RootLayout currentPage="view-entry">
      {" "}
      {/* Set currentPage to "view-entry" */}
      <ViewEntry title={params.title} />
    </RootLayout>
  );
}
