"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/app/login/actions";
import type { LoginFormValues } from "@/features/login/types";

export function useLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(values: LoginFormValues) {
    setIsLoading(true);
    setError(null);

    try {
      const result = await loginAction({ userId: values.email, password: values.password });
      if (!result.success) {
        setError(result.message);
        return;
      }
      sessionStorage.setItem("auth_token", result.token);
      sessionStorage.setItem("auth_user", JSON.stringify(result.user));
      router.push("/terms-and-conditions");
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  }

  return { handleLogin, isLoading, error };
}
