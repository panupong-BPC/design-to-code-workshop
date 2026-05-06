"use client";

import { TopNavBar } from "@/components/top-nav-bar";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/contexts/language-context";
import { useTerms } from "@/features/terms/hooks/use-terms";
import { cn } from "@/lib/utils";

export function TermsPage() {
  const { t } = useLanguage();
  const { terms, isLoading, error, accepted, setAccepted, isSubmitting, handleAccept } = useTerms();

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "var(--surface-tinted)" }}>
      <TopNavBar showAccount />

      {/* Scrollable main area with padding for TopBar and footer */}
      <main className="flex flex-1 justify-center px-4 pb-[76px] pt-20 lg:px-8">
        <div className="w-full max-w-[1087px]">
          <div className="rounded-2xl bg-white px-6 py-16 shadow-xl lg:px-16">
            {isLoading ? (
              <TermsSkeleton />
            ) : error ? (
              <div
                role="alert"
                className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {error}
              </div>
            ) : (
              <>
                {/* Title */}
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
                  {terms?.title ?? t("termsTitle")}
                </h1>

                {/* Last updated */}
                <p className="mt-2 font-body text-sm text-muted-foreground/60">
                  {terms?.lastUpdated ?? t("termsLastUpdated")}
                </p>

                {/* Sections */}
                <div className="mt-10 space-y-8">
                  {terms?.sections.map((section, idx) => (
                    <section key={idx}>
                      <h2 className="font-headline text-lg font-bold text-foreground">
                        {section.heading}
                      </h2>
                      <p
                        className="mt-3 font-body text-lg leading-relaxed"
                        style={{ color: "var(--color-text-neutral-primary)" }}
                      >
                        {section.body}
                      </p>
                    </section>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Fixed footer */}
      <TermsFooter
        accepted={accepted}
        onAcceptedChange={setAccepted}
        onNext={handleAccept}
        isSubmitting={isSubmitting}
        label={t("termsAcceptLabel")}
        nextLabel={t("termsNextButton")}
      />
    </div>
  );
}

interface TermsFooterProps {
  accepted: boolean;
  onAcceptedChange: (checked: boolean) => void;
  onNext: () => void;
  isSubmitting: boolean;
  label: string;
  nextLabel: string;
}

function TermsFooter({
  accepted,
  onAcceptedChange,
  onNext,
  isSubmitting,
  label,
  nextLabel,
}: TermsFooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between bg-white px-4 shadow-xl lg:px-40">
      {/* Checkbox + label */}
      <div className="flex items-center gap-3">
        <Checkbox
          id="terms-accept"
          checked={accepted}
          onCheckedChange={(v) => onAcceptedChange(v === true)}
          aria-label={label}
          className="h-4 w-4"
        />
        <Label
          htmlFor="terms-accept"
          className={cn(
            "cursor-pointer font-headline text-sm font-medium",
            accepted ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {label}
        </Label>
      </div>

      {/* Next button */}
      <Button
        onClick={onNext}
        disabled={!accepted || isSubmitting}
        aria-label="terms.footer.button.next"
        className="font-headline font-semibold"
      >
        {isSubmitting ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            {nextLabel}
          </>
        ) : (
          nextLabel
        )}
      </Button>
    </footer>
  );
}

function TermsSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-4 w-48" />
      <div className="space-y-8 pt-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}
