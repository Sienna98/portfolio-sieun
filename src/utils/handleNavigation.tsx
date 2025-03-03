"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useHandleNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (path: string) => {
    const params = searchParams.toString();
    router.push(`${path}${params ? `?${params}` : ""}`);
  };
}
