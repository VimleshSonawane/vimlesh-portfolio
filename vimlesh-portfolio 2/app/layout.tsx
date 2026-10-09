import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Vimlesh Sonawane, Project Manager",
  description:
    "Vimlesh Sonawane, Project Manager with 5+ years across construction, e-commerce and AI-driven operations, and the fashion and creative economy.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
