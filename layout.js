import "./globals.css";

export const metadata = {
  title: "GlobeBridge Exports | Import Export & Social Impact",
  description: "Modern import-export solutions with ethical sourcing and CSR impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}