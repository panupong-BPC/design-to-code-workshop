"use client";

import { User } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface TopNavBarProps {
  showAccount?: boolean;
}

export function TopNavBar({ showAccount = false }: TopNavBarProps) {
  const { t } = useLanguage();

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between px-4 lg:px-8"
      style={{ backgroundColor: "hsl(var(--primary))" }}
    >
      {/* Brand cluster */}
      <div className="flex items-center gap-3">
        <BrandLogoMark />
        <span className="font-headline text-base font-bold text-white">
          {t("appName")}
        </span>
      </div>

      {/* Account area */}
      {showAccount && (
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
          aria-label="User account"
        >
          <User className="h-4 w-4" />
        </button>
      )}
    </header>
  );
}

function BrandLogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="white" fillOpacity="0.2" />
      <rect x="6" y="8" width="16" height="2.5" rx="1.25" fill="white" />
      <rect x="6" y="12.75" width="16" height="2.5" rx="1.25" fill="white" />
      <rect x="6" y="17.5" width="16" height="2.5" rx="1.25" fill="white" />
    </svg>
  );
}
