"use client";
import Navbar from "@/components/Navbar";
import { MapOrListProvider } from "@/context/MapOrListContext";
import { ThemeProvider, useThemeContext } from "@/context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemedBackground>
           <MapOrListProvider>
           <Navbar />
           {children}
           </MapOrListProvider>
          </ThemedBackground>
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
      }}
    >
      {children}
    </div>
  );
};
