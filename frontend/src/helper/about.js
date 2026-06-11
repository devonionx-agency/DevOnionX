

export const PILLARS = [
  {
    number: "01",
    title: "Born From Frustration",
    body: "We started DevonionX because we were tired of agencies that over-promised and under-delivered. Bloated timelines, vague communication, mediocre output. We knew there was a better way.",
    icon: "⚡",
  },
  {
    number: "02",
    title: "Built on Craft",
    body: "Every line of code, every pixel, every interaction is intentional. We don't ship half-baked products. We obsess over the details so your users never have to think about them.",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Driven by Results",
    body: "We don't measure success by deliverables — we measure it by impact on your business. More users, more revenue, more growth. That's the only metric that matters.",
    icon: "📈",
  },
];

export const STATS = [
  { label: "Client retention",  value: "94%",  bar: 94  },
  { label: "On-time delivery",  value: "100%", bar: 100 },
  { label: "Projects shipped",  value: "15+",  bar: 75  },
];



// Mission Section

/* ── Icons ── */
export const FlameIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

export const ShieldIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export const ZapIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export const TargetIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

export const MissionIcon = () => (
  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

export const VisionIcon = () => (
  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const VALUES = [
  {
    icon: <FlameIcon />,
    title: "Obsession Over Perfection",
    body: "We don't stop at good enough. Every detail — from micro-interactions to system architecture — gets our full attention.",
  },
  {
    icon: <ShieldIcon />,
    title: "Radical Transparency",
    body: "No hidden costs, no vague timelines. You know exactly what we're building, why, and when it ships.",
  },
  {
    icon: <ZapIcon />,
    title: "Speed Without Shortcuts",
    body: "We move fast — but never at the cost of quality. Clean code, solid architecture, zero technical debt.",
  },
  {
    icon: <TargetIcon />,
    title: "Impact First",
    body: "Every decision is measured against one question: does this move the needle for your business?",
  },
];
