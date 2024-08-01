import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  const updatedEntry = await request.json();
  const filePath = path.join(process.cwd(), "public", "data", "entries.json");
  let entries = [];

  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, "utf8");
    entries = JSON.parse(fileContents);
  }

  // Check if the entry with the same title exists
  const existingIndex = entries.findIndex(
    (entry) => entry.title === updatedEntry.title
  );
  if (existingIndex !== -1) {
    // Update the existing entry
    entries[existingIndex] = updatedEntry;
  } else {
    // If not found, you can choose to create a new entry (optional)
    entries.push(updatedEntry);
  }

  fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));

  return NextResponse.json({ message: "Entry saved" });
}
