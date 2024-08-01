// src/app/edit-entry/[title]/page.js

import EditEntry from "@/components/EditEntry"; // Adjust the import path if necessary
import RootLayout from "@/app/layout"; // Import the RootLayout

export default function EditEntryPage({ params }) {
  return (
    <RootLayout currentPage="edit-entry">
      {" "}
      {/* Set currentPage to "edit-entry" */}
      <EditEntry title={params.title} />
    </RootLayout>
  );
}
