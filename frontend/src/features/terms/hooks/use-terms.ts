"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api-client";
import type { TermsData } from "@/features/terms/types";

export function useTerms() {
  const router = useRouter();
  const [terms, setTerms] = useState<TermsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchTerms() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await apiFetch("/rest/api/v1/auth/terms");
        if (!res.ok) {
          setError("Failed to load terms and conditions.");
          return;
        }
        const json = await res.json();
        if (!cancelled) {
          setTerms(json.data as TermsData);
        }
      } catch {
        if (!cancelled) {
          setError("Failed to load terms and conditions.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchTerms();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleAccept = useCallback(async () => {
    if (!accepted || isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await apiFetch("/rest/api/v1/auth/terms/accept", {
        method: "POST",
        body: JSON.stringify({ acceptedAt: new Date().toISOString() }),
      });
      if (!res.ok) {
        setError("Failed to accept terms. Please try again.");
        return;
      }
      router.push("/welcome");
    } catch {
      setError("Failed to accept terms. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [accepted, isSubmitting, router]);

  return {
    terms,
    isLoading,
    error,
    accepted,
    setAccepted,
    isSubmitting,
    handleAccept,
  };
}
