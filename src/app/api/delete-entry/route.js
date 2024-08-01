import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function DELETE(request) {
  const { title } = await request.json();
  const filePath = path.join(process.cwd(), "data", "entries.json");

  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, "utf8");
    let entries = JSON.parse(fileContents);

    // Filter out the entry to be deleted
    entries = entries.filter((entry) => entry.title !== title);

    // Write the updated entries back to the file
    fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
  }

  return NextResponse.json({ message: "Entry deleted" });
}
