import type { Metadata } from "next";
import { TermsPage } from "@/features/terms";

export const metadata: Metadata = {
  title: "Terms and Conditions — One Corporate Portal",
};

export default function TermsAndConditionsRoute(): React.JSX.Element {
  return <TermsPage />;
}
