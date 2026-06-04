import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cohort Health Tracker — Automated Churn Alerts for SaaS",
  description: "Monitor user cohorts across key metrics with predictive churn scoring and automated Slack/email alerts. Built for startup founders and growth teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3c03a672-689c-4ed2-9780-7ef3113a5bb7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
