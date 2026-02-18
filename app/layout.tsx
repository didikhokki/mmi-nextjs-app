import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Resort Landing Page",
  description: "UI like Japanese Resort Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f8f8f5] text-gray-900">
        {children}
      </body>
    </html>
  );
}
