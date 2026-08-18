import Header from "./__components/Header";
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Parkinsans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-primary-950 text-primary-100 min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
