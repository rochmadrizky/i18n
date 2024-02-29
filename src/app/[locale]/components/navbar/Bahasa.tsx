"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Bahasa() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const toggleLanguage = (nextLocale: string) => {
    if (localActive !== nextLocale) {
      startTransition(() => {
        router.replace(`/${nextLocale}`);
      });
    }
  };

  return (
    <div>
      <button
        onClick={() => toggleLanguage(localActive === "en" ? "id" : "en")}
        disabled={isPending} // Disable button during transition
      >
        {localActive === "en" ? "EN" : "ID"}
      </button>
    </div>
  );
}
