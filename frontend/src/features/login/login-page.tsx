"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { TranslationKey } from "@/lib/data";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TopNavBar } from "@/components/top-nav-bar";
import { useLanguage } from "@/contexts/language-context";
import { useLogin } from "@/features/login/hooks/use-login";
import { cn } from "@/lib/utils";

const loginSchema = (t: (key: TranslationKey) => string) =>
  z.object({
    email: z.string().email(t("loginEmailError")),
    password: z.string().min(1, t("loginPasswordError")),
  });

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginPage() {
  const { t } = useLanguage();
  const { handleLogin, isLoading, error } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema(t)),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(values: LoginFormValues) {
    handleLogin(values);
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "var(--surface-tinted)" }}>
      <TopNavBar showAccount={false} />

      <main className="flex flex-1 items-center justify-center px-4 pt-16">
        <div className="w-full max-w-[380px]">
          <div className="rounded-2xl border border-border bg-white px-6 py-8 shadow-xl">
            {/* Logo cluster */}
            <div className="mb-6 flex flex-col items-center gap-3">
              <BrandMark />
              <span className="font-headline text-xl font-bold text-primary">
                {t("appName")}
              </span>
            </div>

            {/* Server-level error */}
            {error && (
              <div
                role="alert"
                className="mb-5 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email" className="font-body text-sm font-medium text-foreground">
                  {t("loginEmailLabel")}
                </Label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  placeholder={t("loginEmailPlaceholder")}
                  aria-label={t("loginEmailLabel")}
                  disabled={isLoading}
                  {...register("email")}
                  className={cn(
                    "block h-11 w-full rounded-lg border bg-white px-3 font-body text-sm text-foreground outline-none transition-colors",
                    "placeholder:text-muted-foreground",
                    "focus:border-primary focus:ring-2 focus:ring-primary/20",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    errors.email ? "border-destructive" : "border-border"
                  )}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1">
                <Label htmlFor="password" className="font-body text-sm font-medium text-foreground">
                  {t("loginPasswordLabel")}
                </Label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder={t("loginPasswordPlaceholder")}
                    aria-label={t("loginPasswordLabel")}
                    disabled={isLoading}
                    {...register("password")}
                    className={cn(
                      "block h-11 w-full rounded-lg border bg-white px-3 pr-10 font-body text-sm text-foreground outline-none transition-colors",
                      "placeholder:text-muted-foreground",
                      "focus:border-primary focus:ring-2 focus:ring-primary/20",
                      "disabled:cursor-not-allowed disabled:opacity-60",
                      errors.password ? "border-destructive" : "border-border"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-destructive">{errors.password.message}</p>
                )}
              </div>

              {/* CTA */}
              <Button
                type="submit"
                disabled={isLoading}
                aria-label="login.form.button.submit"
                className="mt-2 h-11 w-full font-headline text-base font-semibold"
              >
                {isLoading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    {t("loginButtonText")}
                  </>
                ) : (
                  t("loginButtonText")
                )}
              </Button>
            </form>

            {/* Forgot password row */}
            <p className="mt-4 text-center font-body text-sm text-muted-foreground">
              {t("loginForgotPasswordText")}{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-medium text-primary underline hover:opacity-80"
              >
                {t("loginResetPasswordLink")}
              </a>
            </p>

            {/* Register row */}
            <p className="mt-2 text-center font-body text-sm text-muted-foreground">
              {t("loginNewMemberText")}{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-medium text-primary underline hover:opacity-80"
              >
                {t("loginRegisterLink")}
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function BrandMark() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="8" fill="hsl(var(--primary))" />
      <rect x="8" y="10" width="20" height="3" rx="1.5" fill="white" />
      <rect x="8" y="16.5" width="20" height="3" rx="1.5" fill="white" />
      <rect x="8" y="23" width="20" height="3" rx="1.5" fill="white" />
    </svg>
  );
}


