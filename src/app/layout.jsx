import Nav from "@/components/Nav";

export const metadata = {
  title: "Booking Hotel - Find your comfortable hotel to stay",
  description: "Find your comfortable hotel to stay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/favicon.svg" sizes="any" />
      </head>

      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
