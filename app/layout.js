import Header from "./__components/Header";
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
