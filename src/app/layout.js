import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Providers from "./Providers"; // ✅ our client wrapper

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
