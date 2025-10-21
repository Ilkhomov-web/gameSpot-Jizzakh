"use client";
import Navbar from "@/components/Navbar";
import { ThemeProvider, useThemeContext } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { MapOrListProvider } from "@/context/MapOrListContext";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideNavbar =
    pathname === "/login" || pathname === "/signup"; // login yoki signupda yashiramiz

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <ThemedBackground>
              <MapOrListProvider>
                {!hideNavbar && <Navbar />}
                {children}
              </MapOrListProvider>
            </ThemedBackground>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

const ThemedBackground = ({ children }) => {
  const { mode } = useThemeContext();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          mode === "dark"
            ? `
              radial-gradient(circle at 20% 30%, rgba(50, 40, 130, 0.3), transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(180, 80, 200, 0.2), transparent 60%),
              #080421
            `
            : "#ffffff",
        transition: "background 0.3s ease",
      }}
    >
      {children}
    </div>
  );
};
