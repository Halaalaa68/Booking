"use client";

import { PackageProvider } from "@/context/PackageContext";

export function Providers({ children }) {
  return <PackageProvider>{children}</PackageProvider>;
}