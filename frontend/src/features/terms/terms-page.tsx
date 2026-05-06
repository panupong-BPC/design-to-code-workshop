"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { getTermsSections } from "./data/terms-content";

const TERMS_SECTIONS = [
  {
    heading: null,
    paragraphs: [
      `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the http://www.mywebsite.com website and the My Mobile App (change this) mobile application (the "Service") operated by My Company (change this) ("us", "we", or "our").`,
      `Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.`,
      `By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.`,
    ],
  },
  {
    heading: "Purchases",
    paragraphs: [
      `If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your …`,
      `The Purchases section is for businesses that sell online (physical or digital). For the full disclosure section`,
    ],
  },
  {
    heading: "Subscriptions",
    paragraphs: [
      `Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring ...`,
      `The Subscriptions section is for SaaS businesses. For the full disclosure section`,
    ],
  },
  {
    heading: "Content",
    paragraphs: [
      `Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the …`,
      `The Content section is for businesses that allow users to create, edit, share, make content on their websites or apps. For the full disclosure section`,
    ],
  },
  {
    heading: "Links To Other Web Sites",
    paragraphs: [
      `Our Service may contain links to third-party web sites or services that are not owned or controlled by My Company`,
      `My Company (change this) has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that My Company (change this) shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.`,
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.`,
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [`If you have any questions about these Terms, please contact us.`],
  },
];

export function TermsPage() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  const sections = getTermsSections(language);

  function handleNext() {
    router.push("/welcome");
  }

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ background: "var(--color-brand-tertiary, #fcf8ff)" }}
    >
      {/* Top Bar */}
      <header
        className="flex h-16 shrink-0 items-center gap-3 px-3 py-2"
        style={{ background: "var(--color-brand, #432ad8)" }}
        aria-label="terms.header"
      >
        {/* Brand Logo */}
        <div className="flex h-9 w-14 shrink-0 items-center justify-center" aria-hidden="true">
          <svg viewBox="0 0 54 36" className="h-full w-full" fill="none">
            <rect x="7.26" y="2.44" width="39.49" height="12.4" rx="2" fill="white" opacity="0.9" />
            <rect x="7.26" y="11.8" width="39.49" height="12.4" rx="2" fill="white" opacity="0.7" />
            <rect x="7.26" y="21.17" width="39.49" height="12.4" rx="2" fill="white" opacity="0.5" />
          </svg>
        </div>
        {/* Brand Name */}
        <span
          className="font-headline text-xl font-bold text-white"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {t("termsBrandName")}
        </span>
      </header>

      {/* Scrollable Body */}
      <main className="flex flex-1 justify-center overflow-y-auto px-10 py-12">
        <div
          className="w-full max-w-[1087px] rounded-2xl border border-border bg-white px-6 py-16 shadow-xl"
        >
          {/* Title */}
          <h1
            className="mb-8 text-center font-headline text-4xl font-bold leading-[1.2] tracking-tight"
            style={{ color: "var(--color-brand, #432ad8)" }}
          >
            {t("termsTitle")}
          </h1>

          {/* Content */}
          <div
            className="mx-auto max-w-[940px] space-y-4 font-body text-lg leading-[1.4]"
            style={{ color: "var(--color-text-primary, #0f172b)" }}
          >
            {/* Last updated */}
            <p className="text-base text-muted-foreground">
              {t("termsLastUpdated")}
            </p>

            {sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                {section.heading && (
                  <p className="font-bold">{section.heading}</p>
                )}
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <footer
        className="flex h-[60px] shrink-0 items-center justify-between border-t border-border bg-white px-40 shadow-xl"

        aria-label="terms.footer"
      >
        {/* Left: Checkbox acceptance */}
        <label
          className="flex cursor-pointer items-center gap-2"
        >
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="h-4 w-4 cursor-pointer rounded-sm border border-[color:var(--color-brand,#432ad8)] accent-[color:var(--color-brand,#432ad8)]"
            aria-label="terms.footer.checkbox.accept"
          />
          <span
            className="font-headline text-sm font-medium leading-4"
            style={{ color: "var(--color-text-primary, #101828)" }}
          >
            {t("termsAcceptCheckbox")}
          </span>
        </label>

        {/* Right: Next button */}
        <div>
          <button
            type="button"
            onClick={handleNext}
            disabled={!accepted}
            aria-label="terms.footer.button.next"
            className="rounded-md px-4 py-2.5 font-headline text-sm font-medium leading-4 text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            style={{ background: "var(--color-brand, #432ad8)" }}
          >
            {t("termsNextButton")}
          </button>
        </div>
      </footer>
    </div>
  );
}
