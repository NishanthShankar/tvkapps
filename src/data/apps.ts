export type AccentKey = 'rust' | 'leaf' | 'gold';
export type LayoutKey = 'hero' | 'split' | 'flow';

export interface AppFeature {
  title: string;
  body: string;
}

export interface AppStat {
  value: string;
  label: string;
}

export interface AppRecord {
  slug: string;
  name: string;
  tamilName: string;
  category: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  accent: AccentKey;
  layout: LayoutKey;
  features: AppFeature[];
  stats: AppStat[];
  faq: { q: string; a: string }[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const apps: AppRecord[] = [
  {
    slug: 'makkal-kural',
    name: 'Makkal Kural',
    tamilName: 'மக்கள் குரல்',
    category: 'Requests & reviews',
    tagline: 'File it. Fix it. Rate it.',
    shortDescription:
      'Two tabs for the way you actually deal with government - Requests to file when something is broken, Reviews to rate when something is done. Resolved requests flow into reviews automatically.',
    longDescription:
      'Makkal Kural has two tabs and one purpose. File a request when a service fails - we use your approximate location to find the constituency and read your text to tag the department, then route it to the right office and track it through to resolution. When it gets resolved, you leave a review - and the whole arc lands on the public timeline. Or skip the request and review an office you visited directly. Either way, the leaderboard your MLA sees is the same one you see.',
    accent: 'rust',
    layout: 'hero',
    features: [
      {
        title: 'Two tabs: Requests and Reviews',
        body: 'File a request when a counter visit fails. Leave a review when it succeeds. Resolved requests roll into the public Reviews feed automatically - no double-entry.',
      },
      {
        title: 'Location finds your constituency',
        body: 'Coarse network geolocation maps you to one of Tamil Nadu’s 234 assembly constituencies. No precise GPS. No street-level tracking. You can override the pick manually.',
      },
      {
        title: 'Text finds the department',
        body: 'Just write what happened. An on-device Tamil + English classifier tags the right department, office, and service - so you never scroll a list of 240 departments.',
      },
      {
        title: 'Public by design - across web, Android, iOS',
        body: 'One identity across three surfaces. Reviews and resolved-request scorecards are aggregated by office, department, and constituency. Open data, refreshed nightly.',
      },
    ],
    stats: [
      { value: '234', label: 'Constituencies covered' },
      { value: '92%', label: 'Classifier accuracy' },
      { value: '<5s', label: 'Avg. tag time per post' },
    ],
    faq: [
      {
        q: 'How do Requests and Reviews relate?',
        a: 'Requests are filed when something goes wrong - they are routed and tracked. When a request is marked resolved, the app prompts you to leave a star rating and a short note, and that entry then appears in the Reviews tab too. Reviews can also be posted directly without a prior request.',
      },
      {
        q: 'How does location find my constituency without GPS?',
        a: 'We use coarse network geolocation accurate to roughly 2 km. That’s enough to identify one of Tamil Nadu’s 234 assembly constituencies, not enough to know your street. You can also pick the constituency manually.',
      },
      {
        q: 'How does the department classifier work?',
        a: 'A small Indic NLP model runs on-device for short posts. Longer posts go to a hosted Tamil + English model, never linked to your identity, location, or post history during inference.',
      },
      {
        q: 'Can I post anonymously?',
        a: 'Yes - anonymous is the default. Verified handles get a higher trust weight on aggregated rankings, but anonymous posts count too.',
      },
      {
        q: 'How do you stop fake reviews and frivolous requests?',
        a: 'One verified mobile number per identity. New accounts are weighted down until they age. An anomaly detector flags rings and bots, and we publish the false-positive rate openly.',
      },
    ],
    meta: {
      title: 'Makkal Kural - Requests and reviews for Tamil Nadu government offices',
      description:
        'Two-tab citizen platform: file a request when a service fails, leave a review when it’s done. Approximate location finds your constituency, text finds the department. Web, Android, iOS.',
      keywords: ['placeholder-keyword-1', 'placeholder-keyword-2'],
    },
  },
  {
    slug: 'inout',
    name: 'InOut',
    tamilName: 'உள்ளே வெளியே',
    category: 'TASMAC oversight',
    tagline: 'for TASMAC.',
    shortDescription:
      "A public clock for every TASMAC shop in Tamil Nadu. Shopkeepers check in and out, citizens see the log, and inspectors see who didn't close on time.",
    longDescription:
      "InOut puts a public clock on every TASMAC shop in Tamil Nadu. Shopkeepers check in at opening and check out at closing - the timestamps land on the shop's public page in real time. If a shop is still open past the declared closing hour, the inspecting officials for that constituency see it immediately and can follow up. From any shop's page, citizens can flag bribes, underage sales, or staff abuse for the same officials to act on.",
    accent: 'leaf',
    layout: 'split',
    features: [
      {
        title: 'One tap to open. One tap to close.',
        body: 'Shopkeepers check in at the start of every shift and check out at close. The timestamp, a selfie, and a GPS fix at the shop location land on the public log immediately - no editing, no backdating.',
      },
      {
        title: 'The 10 PM list',
        body: "If a shop isn't marked closed within 15 minutes of the declared closing hour, it appears on the inspecting officer's \"still open\" list for that constituency. The flag clears only when the shop confirms close.",
      },
      {
        title: 'A page for every shop',
        body: "Every TASMAC shop has a public profile - today's shifts, the last 30 days of operations, complaint count, and a button to flag bribes, underage sales, or staff abuse.",
      },
      {
        title: 'Officials see what citizens see, plus more',
        body: 'Inspectors get a constituency map of all shops with live status, complaint volume, and a one-tap escalation to the local TASMAC office.',
      },
    ],
    stats: [
      { value: '4,800+', label: 'TASMAC shops covered' },
      { value: '10 PM', label: 'Mandatory closing time' },
      { value: '234', label: 'Constituencies under oversight' },
    ],
    faq: [
      {
        q: 'Why does TASMAC need this?',
        a: 'Closing-hour violations and late-night sales are routine, and complaints from citizens often vanish in the chain between the customer, the shop, and the inspectorate. InOut closes the loop: every shift is timestamped, every late close is flagged automatically, and every complaint is tied to a specific shop and shift.',
      },
      {
        q: 'Can shopkeepers fake check-ins?',
        a: 'Each check-in pairs a timestamp with a GPS fix at the registered shop location and a face match against the shopkeeper on file. Backdated entries are rejected. If GPS is unavailable, the shop is marked "unverified-open" - which is itself a flag for the inspector.',
      },
      {
        q: 'How are complaints verified?',
        a: 'Anonymous complaints land in the inspector\'s queue with the shop, shift, and timestamp. The inspector decides whether to act. Complaint outcomes (acted on / dismissed) are public, so patterns of dismissal show up over time.',
      },
      {
        q: 'Is the public log open data?',
        a: 'Yes. Daily open/close timestamps, late-close flags, and aggregate complaint counts per shop are available as a public dataset, refreshed nightly. Names of staff, customers, and complainants are never published.',
      },
    ],
    meta: {
      title: 'InOut - public clock for Tamil Nadu TASMAC shops',
      description:
        "A check-in / check-out log for every TASMAC shop in Tamil Nadu. Public timestamps, automatic late-close flags, complaint reporting tied to each shop's shift.",
      keywords: ['placeholder-keyword-1', 'placeholder-keyword-2'],
    },
  },
  {
    slug: 'thittam',
    name: 'Thittam',
    tamilName: 'திட்டம்',
    category: 'Welfare access',
    tagline: 'Find the scheme that finds you.',
    shortDescription:
      'A welfare scheme finder that matches you against every central and state programme in under a minute.',
    longDescription:
      'Tamil Nadu runs hundreds of welfare programmes - and most eligible citizens never hear about them. Thittam asks a few honest questions about your household and shows the exact schemes you qualify for, with the apply-now link, document checklist, and a reminder if you stop midway.',
    accent: 'gold',
    layout: 'flow',
    features: [
      {
        title: 'One questionnaire, every scheme',
        body: 'Answer once. We match you against 240+ central and state programmes in real time.',
      },
      {
        title: 'Document checklist, ready',
        body: 'Tells you exactly which documents are needed, and lets you upload from your DigiLocker.',
      },
      {
        title: 'Family view',
        body: 'Add household members and see schemes that apply to each - widows, students, farmers, seniors.',
      },
      {
        title: 'Renewal reminders',
        body: 'Pensions, scholarships, ration - reminded before the deadline, not after.',
      },
    ],
    stats: [
      { value: '240+', label: 'Schemes indexed' },
      { value: '54s', label: 'Average match time' },
      { value: '4.6x', label: 'Apply-completion vs. baseline' },
    ],
    faq: [
      {
        q: 'Do you store my answers?',
        a: 'Only with explicit consent for renewal reminders. Default is no storage - matches happen on-device.',
      },
      {
        q: 'How are central schemes covered?',
        a: 'We index Government of India schemes via the open MyScheme dataset and re-run the eligibility logic locally.',
      },
    ],
    meta: {
      title: 'Thittam - Tamil Nadu welfare scheme finder',
      description:
        'One questionnaire matches you against every central and state welfare scheme you qualify for. Built for Tamil Nadu.',
      keywords: ['placeholder-keyword-1', 'placeholder-keyword-2'],
    },
  },
];

export const accentStyles: Record<
  AccentKey,
  { bg: string; ink: string; soft: string; tint: string; ring: string }
> = {
  rust: {
    bg: 'bg-[var(--color-rust)]',
    ink: 'text-[var(--color-rust)]',
    soft: 'bg-[color-mix(in_srgb,var(--color-rust)_12%,transparent)]',
    tint: 'text-[var(--color-rust-deep)]',
    ring: 'ring-[var(--color-rust)]',
  },
  leaf: {
    bg: 'bg-[var(--color-leaf)]',
    ink: 'text-[var(--color-leaf)]',
    soft: 'bg-[color-mix(in_srgb,var(--color-leaf)_12%,transparent)]',
    tint: 'text-[var(--color-leaf-deep)]',
    ring: 'ring-[var(--color-leaf)]',
  },
  gold: {
    bg: 'bg-[var(--color-gold)]',
    ink: 'text-[var(--color-gold)]',
    soft: 'bg-[color-mix(in_srgb,var(--color-gold)_15%,transparent)]',
    tint: 'text-[var(--color-gold-deep)]',
    ring: 'ring-[var(--color-gold)]',
  },
};

export function getApp(slug: string): AppRecord | undefined {
  return apps.find((a) => a.slug === slug);
}
