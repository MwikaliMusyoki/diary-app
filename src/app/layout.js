
import "../../styles/globals.css";
import Navbar from "@/components/Navbar"; // Adjust the import path if necessary

export const metadata = {
  title: "Diary App",
  description: "A place to store your thoughts and memories.",
};

export default function RootLayout({ children, currentPage }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <Navbar currentPage={currentPage} />
          {children}
        </div>
      </body>
    </html>
  );
}
