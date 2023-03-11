import "./globals.css";

export const metadata = {
  title: "Chat Bot AI",
  description: "Welcome to Byapar App Chat AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
