// app/enterprise-agile-coach/page.tsx

export const metadata = {
  title: "Enterprise Agile Coach - AI-Powered Agile Coaching",
  description: "Enterprise Agile Coach - AI-powered agile coaching and pattern detection agent"
};

// Import the Client Component for interactive agent functionality
import EnterpriseAgileCoach from "./page-client";
import { createElement, useEffect } from "react";

export default function EnterpriseAgileCoachPage() {
  useEffect(() => {
    import("./page-client").then(({ default: EnterpriseAgileCoach }) => {
      // Component loaded - could set state to trigger re-render
    });
  }, []);

  return createElement("div", { className: "prose max-w-none" },
    createElement("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" }, "Enterprise Agile Coach"),
    createElement("p", { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl" }, "AI-powered enterprise agile coaching and pattern detection agent.")
  );
}