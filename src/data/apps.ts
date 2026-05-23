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
    category: 'Citizen voice',
    tagline: "Every citizen's voice, on record.",
    shortDescription:
      'A direct line between people and the offices that serve them - file a grievance, follow it end to end, and hold the system accountable.',
    longDescription:
      'Makkal Kural turns the long walk to a government office into a thirty-second post. Citizens raise issues with photos and location, the right department receives it instantly, and every step is timestamped in public view. No more lost paper trails, no more guessing where a complaint went.',
    accent: 'rust',
    layout: 'hero',
    features: [
      {
        title: 'File in 30 seconds',
        body: 'Voice note, photo, or text. Auto-routed to the right department by location and category.',
      },
      {
        title: 'Live status, always',
        body: 'Every action by every officer is timestamped. You see exactly who is holding things up.',
      },
      {
        title: 'Public accountability',
        body: 'Resolution rates per ward, per department, per officer - open data, refreshed daily.',
      },
      {
        title: 'Tamil-first interface',
        body: 'Designed for voice and Tamil text first. English is the translation, not the default.',
      },
    ],
    stats: [
      { value: '24h', label: 'Median first response' },
      { value: '11', label: 'Districts piloting today' },
      { value: '100%', label: 'Status updates in public view' },
    ],
    faq: [
      {
        q: 'Is my identity public?',
        a: 'No. Your name and contact are visible only to the assigned officer. The grievance itself is public so others can see patterns.',
      },
      {
        q: 'What if my issue is not resolved?',
        a: 'After the SLA expires, the complaint auto-escalates to the next level and a red flag appears against the officer publicly.',
      },
    ],
    meta: {
      title: 'Makkal Kural - Tamil Nadu citizen grievance app',
      description:
        'File grievances with photo and location. Track every step in public view. Built for Tamil Nadu citizens, Tamil-first.',
      keywords: ['placeholder-keyword-1', 'placeholder-keyword-2'],
    },
  },
  {
    slug: 'nilam',
    name: 'Nilam',
    tamilName: 'நிலம்',
    category: 'Land & property',
    tagline: 'Your land, in your pocket.',
    shortDescription:
      'Patta, chitta, FMB, encumbrance certificates and survey records - the whole stack, queried from one map.',
    longDescription:
      'Nilam unifies the dozen ways a Tamil Nadu citizen interacts with their land. Tap a parcel on the map, see the chain of ownership, download a digitally signed patta, request a survey, or flag an encroachment - all without standing in a queue.',
    accent: 'leaf',
    layout: 'split',
    features: [
      {
        title: 'Map-first records',
        body: 'Find your parcel by tapping the map, not by deciphering survey numbers from a 1980s register.',
      },
      {
        title: 'Digitally signed extracts',
        body: 'Patta, chitta, EC - downloaded as PDF with QR-verified signatures. Accepted at every counter.',
      },
      {
        title: 'Encroachment reporting',
        body: 'Drop a pin, attach evidence. Routed to the tahsildar with a tracked timeline.',
      },
      {
        title: 'Mutation, online',
        body: 'Initiate transfer-of-title after a sale or inheritance with a step-by-step guided flow.',
      },
    ],
    stats: [
      { value: '12.4M', label: 'Parcels mapped' },
      { value: '6 min', label: 'Avg. patta download' },
      { value: '0', label: 'Trips to the office' },
    ],
    faq: [
      {
        q: 'Are the digital extracts legally valid?',
        a: 'Yes. The QR signature is issued under the IT Act, and is treated as equivalent to a manually signed and stamped extract.',
      },
      {
        q: 'What about disputed land?',
        a: 'Disputes appear as a flag on the parcel with case status. The underlying records remain visible but extracts are watermarked accordingly.',
      },
    ],
    meta: {
      title: 'Nilam - Tamil Nadu land records app',
      description:
        'Patta, chitta, EC, FMB and mutation - the entire land record stack in one map-first app for Tamil Nadu.',
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
