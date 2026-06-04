export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For SaaS Startups Under 100 Employees
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track User Cohort Health with{" "}
          <span className="text-[#58a6ff]">Automated Churn Alerts</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Mixpanel or Amplitude, monitor cohort engagement in real time, and get Slack or email alerts the moment a cohort starts slipping — before they churn.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $49/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📊", title: "Cohort Metrics", desc: "Retention, DAU/MAU, feature adoption — all in one view." },
            { icon: "🔮", title: "Churn Risk Score", desc: "Predictive scoring flags at-risk cohorts before they drop off." },
            { icon: "🔔", title: "Auto Alerts", desc: "Instant Slack or email notifications when engagement declines." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Growth Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop churn before it starts.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited cohorts & metrics",
              "Mixpanel + Amplitude integrations",
              "Predictive churn risk scoring",
              "Slack & email alert automation",
              "7-day free trial"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which analytics platforms do you support?",
              a: "We currently integrate with Mixpanel and Amplitude. More integrations (Segment, PostHog) are on the roadmap."
            },
            {
              q: "How does the churn risk score work?",
              a: "We analyze engagement trends — login frequency, feature usage, session depth — and surface a 0–100 risk score per cohort updated daily."
            },
            {
              q: "Can I customize alert thresholds?",
              a: "Yes. You set the metric thresholds and alert channels (Slack, email) per cohort. Alerts fire automatically when thresholds are breached."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Cohort Health Tracker. All rights reserved.
      </footer>
    </main>
  );
}
