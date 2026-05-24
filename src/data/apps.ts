export type AccentKey = 'rust' | 'leaf' | 'gold' | 'siren' | 'pulse';
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
      "Two tabs for the way you actually deal with government - Whistles to file when something is broken, Reviews to rate when something is done. Resolved whistles flow into reviews automatically. If you have a problem, just whistle.",
    longDescription:
      "Makkal Kural has two tabs and one purpose. Whistle when a service fails - we use your approximate location to find the constituency and read your text to tag the department, then route the whistle to the right office and track it through to resolution. When it gets resolved, you leave a review - and the whole arc lands on the public timeline. Each whistle is shown on the home feed of only the people in its scope (home, street, ward, constituency, district, or state) so timelines stay relevant - and when the government needs public consensus before acting, only voters inside that scope can upvote or downvote. If you have a problem, just whistle.",
    accent: 'rust',
    layout: 'hero',
    features: [
      {
        title: 'Two tabs: Whistles and Reviews',
        body: 'Whistle when a counter visit fails. Leave a review when it succeeds. Resolved whistles roll into the public Reviews feed automatically - no double-entry.',
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
        title: 'Scope-aware visibility',
        body: 'Every issue is auto-assigned a scope - home, street, ward, constituency, district, or state - and shown on the home feed of only the people inside that scope. Anyone with the link can still view.',
      },
      {
        title: 'Voter-eligible voting',
        body: "When a whistle needs public consensus before action, only voters inside the issue's scope can upvote or downvote - verified via voter ID at signup. Everyone else sees the running tally.",
      },
      {
        title: 'Web, Android, iOS - one identity',
        body: 'Same identity across three surfaces. Reviews and resolved-request scorecards aggregated by office, department, and constituency. Open data, refreshed nightly.',
      },
    ],
    stats: [
      { value: '234', label: 'Constituencies covered' },
      { value: '92%', label: 'Classifier accuracy' },
      { value: '<5s', label: 'Avg. tag time per post' },
    ],
    faq: [
      {
        q: 'How do Whistles and Reviews relate?',
        a: 'Whistles are filed when something goes wrong - they are routed and tracked. When a whistle is marked resolved, the app prompts you to leave a star rating and a short note, and that entry then appears in the Reviews tab too. Reviews can also be posted directly without a prior whistle.',
      },
      {
        q: "Why can't I see all issues on my home feed?",
        a: "Each issue is shown on the home feed of only the people in its scope - so a streetlight on someone else's street stays on their feed, not yours. You can still open any issue if you have a link or the ID. The goal is timeline hygiene, not secrecy.",
      },
      {
        q: 'How is the scope of an issue decided?',
        a: 'The same Tamil + English classifier that picks the department also picks the smallest reasonable scope (home, street, ward, constituency, district, state). If the confidence is below the threshold, the requester picks the scope from a shortlist before the issue goes live.',
      },
      {
        q: 'Who can upvote and downvote a whistle?',
        a: "Voting is restricted to people inside the whistle's scope - confirmed via voter ID at signup. A constituency-level whistle can be voted on only by voters registered in that constituency. Everyone else sees the running totals but can't move them. This stops vote-brigading by people outside the issue's actual community.",
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
        q: 'How is my voter ID handled at signup?',
        a: "An on-device AI auto-reads your voter ID, matches it to confirm you're registered in the constituency you claim, and deletes the image the moment the match is confirmed. The ID image never touches our servers. We keep only a one-way hash linking your account to a verified constituency - never the EPIC number, never the photo. Maximum security, by design.",
      },
      {
        q: 'How do you stop fake reviews and frivolous whistles?',
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
        body: "Every TASMAC shop has a public profile - today's shifts, the last 30 days of operations, whistle count, and a Whistle button to flag bribes, underage sales, or staff abuse.",
      },
      {
        title: 'Officials see what citizens see, plus more',
        body: 'Inspectors get a constituency map of all shops with live status, whistle volume, and a one-tap escalation to the local TASMAC office.',
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
        a: "Closing-hour violations and late-night sales are routine, and citizen whistles often vanish in the chain between the customer, the shop, and the inspectorate. InOut closes the loop: every shift is timestamped, every late close is flagged automatically, and every whistle is tied to a specific shop and shift. If you have a problem, just whistle.",
      },
      {
        q: 'Can shopkeepers fake check-ins?',
        a: 'Each check-in pairs a timestamp with a GPS fix at the registered shop location and a face match against the shopkeeper on file. Backdated entries are rejected. If GPS is unavailable, the shop is marked "unverified-open" - which is itself a flag for the inspector.',
      },
      {
        q: 'How are whistles verified?',
        a: "Anonymous whistles land in the inspector's queue with the shop, shift, and timestamp. The inspector decides whether to act. Whistle outcomes (acted on / dismissed) are public, so patterns of dismissal show up over time.",
      },
      {
        q: 'Is the public log open data?',
        a: 'Yes. Daily open/close timestamps, late-close flags, and aggregate whistle counts per shop are available as a public dataset, refreshed nightly. Names of staff, customers, and whistleblowers are never published.',
      },
    ],
    meta: {
      title: 'InOut - public clock for Tamil Nadu TASMAC shops',
      description:
        "A check-in / check-out log for every TASMAC shop in Tamil Nadu. Public timestamps, automatic late-close flags, citizen whistles tied to each shop's shift. If you have a problem, just whistle.",
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
  {
    slug: 'whistle',
    name: 'Whistle',
    tamilName: 'விசில்',
    category: 'Women safety',
    tagline: 'For her safety.',
    shortDescription:
      'A one-tap SOS for women. Alerts emergency contacts, the police, and the nearest Singa Pen patrol vehicle - and starts whistling at max volume to scare off the perpetrator. ID-verified accounts only.',
    longDescription:
      "Whistle is the panic button Tamil Nadu's women have been waiting for. A homescreen shortcut, one tap - emergency contacts get a message with your live location, the local police are notified, and the nearest Singa Pen patrol vehicle gets a route to you. The phone simultaneously starts whistling at maximum volume to startle the perpetrator and draw bystander attention. Singa Pen patrol vehicles stream their GPS to an internal oversight dashboard - not the public - where anomaly detection flags idle vehicles, off-route patrolling, or active responses. Every account is gated behind live face verification matched against a government photo ID at signup, so the patrol never gets drained by fakes. If you have a problem, just whistle.",
    accent: 'siren',
    layout: 'split',
    features: [
      {
        title: 'One-tap SOS',
        body: 'A homescreen shortcut. One tap alerts your emergency contacts, the local police, and the nearest Singa Pen patrol vehicle - all with your live location. An 8-second cancel window catches accidents.',
      },
      {
        title: 'Nearest Singa Pen patrol, routed to you',
        body: 'The patrol app in the Singa Pen vehicle gets the alert and a route the moment you press. Median statewide arrival is under four minutes.',
      },
      {
        title: 'Loud audible whistle',
        body: 'Optional. The moment you press, your phone whistles at maximum volume. Useful to startle a perpetrator and pull bystanders in. Stops only with your PIN.',
      },
      {
        title: 'Live face + photo ID verified',
        body: 'At signup, a live face video is matched against a government photo ID (Aadhaar, PAN, TN citizenship card, or school/college ID). Keeps the network honest and the patrol from being drained by fakes.',
      },
      {
        title: 'Admin oversight, not public surveillance',
        body: 'Patrol vehicles share their live GPS with the Singa Pen oversight dashboard only - never the public. Anomaly detection flags idle, off-route, or actively-responding vehicles automatically.',
      },
      {
        title: 'Women safely escorted, counted',
        body: 'Every alert that ends with a Singa Pen escort or de-escalation is logged. The dashboard shows the running count, median arrival, and unresolved alerts per constituency.',
      },
    ],
    stats: [
      { value: '<4 min', label: 'Median patrol arrival' },
      { value: '8,500+', label: 'Singa Pen officers' },
      { value: '47,200+', label: 'Women safely escorted (pilot)' },
    ],
    faq: [
      {
        q: 'What exactly happens when I press the Whistle button?',
        a: "Three things at once. Your emergency contacts get an SMS and WhatsApp with your live location. The nearest police station is notified. The nearest Singa Pen patrol vehicle gets a route to you on their patrol app. If audible whistle is enabled, your phone also starts whistling at full volume. An 8-second cancel window lets you abort accidents.",
      },
      {
        q: 'Why do I need a photo ID to sign up?',
        a: "To stop men creating fake accounts to test response time or drain patrol resources. At signup, an on-device AI auto-reads your government photo ID (Aadhaar, PAN, TN citizenship card, or school/college ID) and matches it to your live face video. The ID image is deleted the moment the match completes - it never reaches our servers. We keep only a one-way hash to stop you from re-registering. Maximum security, by design.",
      },
      {
        q: 'Who can see the patrol vehicle locations?',
        a: "Only the Singa Pen oversight dashboard. Patrol-vehicle GPS streams to the administration for anomaly detection (idle vehicle, off-route, actively responding) but is never public. The public sees only an aggregate 'patrols active' count per constituency.",
      },
      {
        q: 'Will the loud whistle drain my battery?',
        a: "It runs while the alarm is active - until the patrol arrives or you cancel with your PIN. On a typical phone that's 4-6 minutes of audio, roughly 3% battery.",
      },
      {
        q: 'What if I press it by accident?',
        a: 'An 8-second cancel window appears. If you cancel, no one is notified. After 8 seconds the alarm is sent. False alarms are not penalized - we know panic happens.',
      },
      {
        q: 'What stops the data from being misused?',
        a: 'Patrol-vehicle location stays inside the Singa Pen oversight system. Account creation uses the same identity layer as voter ID. The source code for alert routing, anomaly detection, and dashboards is published on GitHub.',
      },
    ],
    meta: {
      title: 'Whistle - One-tap women safety app for Tamil Nadu',
      description:
        'One-tap SOS for women. Alerts emergency contacts, the police, and the nearest Singa Pen patrol vehicle. The phone whistles at max volume. ID-verified accounts only. If you have a problem, just whistle.',
      keywords: ['placeholder-keyword-1', 'placeholder-keyword-2'],
    },
  },
  {
    slug: 'docinout',
    name: 'DocInOut',
    tamilName: 'டாக் வருகை',
    category: 'PHC + hospital oversight',
    tagline: 'For the doctors who show up.',
    shortDescription:
      "A public attendance clock for every PHC and government hospital doctor in Tamil Nadu. Doctors check in/out, patients whistle missed appointments, abuse, or bribery, and an AI dashboard flags anomalies for the Health Department in real time.",
    longDescription:
      "DocInOut puts the same public clock InOut runs on TASMAC shops on every government doctor at a PHC or hospital. Doctors check in at shift start - selfie + GPS at the registered facility - and check out at close. Patients can whistle a missed appointment, a demanded bribe, abuse, or any other failure of care; the whistle is tied to the specific shift and routed straight to the DMS. An AI dashboard surfaces the patterns a human reviewer would miss: doctors who chronically run late, facilities clustering complaints, off-pattern absences. Critical whistles (bribery, abuse) float to the top automatically. If you have a problem, just whistle.",
    accent: 'pulse',
    layout: 'split',
    features: [
      {
        title: 'One tap to start the shift',
        body: 'Doctors check in at shift start with a selfie + GPS fix at the registered PHC or hospital. Check-out closes the shift. No backdating, no edits.',
      },
      {
        title: 'The "missed appointment" whistle',
        body: "Patient turns up at the assigned time, doctor isn't there - whistle it. Tied to the specific shift, the facility, and routed straight to the DMS for follow-up.",
      },
      {
        title: 'AI anomaly detection',
        body: 'Late check-ins, early departures, off-pattern absences, complaint clusters at a facility, repeat-offender doctors - all surface on the Health Department dashboard automatically.',
      },
      {
        title: 'Critical-whistle highlighting',
        body: 'The AI ranks every whistle by severity. Bribery, sexual abuse, life-threatening neglect float to the top of the queue with auto-escalation to the District Medical Officer.',
      },
      {
        title: 'A public page for every doctor',
        body: "Facility, specialisation, today's shift status, the last 30 days of attendance, whistle count. Open data, refreshed nightly. Doctors who consistently show up look good. Those who don't, don't.",
      },
      {
        title: 'Direct line to the administration',
        body: 'No middle layer. The whistle queue lands in the DMS dashboard, anomalies land in the DDHS dashboard, escalations go to the Health Secretary. Every action is timestamped.',
      },
    ],
    stats: [
      { value: '1,950+', label: 'PHCs + hospital posts' },
      { value: '<6 min', label: 'Median whistle ack time' },
      { value: 'Live', label: 'AI anomaly dashboard' },
    ],
    faq: [
      {
        q: 'How is a doctor’s attendance verified?',
        a: 'Each check-in pairs a timestamp with a GPS fix at the registered facility and a face match against the doctor on file. Backdated entries are rejected. If GPS is unavailable, the doctor is marked "unverified-present" - which is itself a flag for the DMS.',
      },
      {
        q: 'What can patients whistle about?',
        a: 'Missed appointment (doctor not there at the scheduled time), demanded bribe, abuse or harassment, refusal to treat, or any quality-of-care concern. Every whistle is tied to the shop (facility), the shift, and a timestamp.',
      },
      {
        q: 'Who sees the AI dashboard?',
        a: "The DMS dashboard for routine whistles and same-day attendance, the DDHS / Health Department dashboard for trend anomalies and repeat offenders, the Health Secretary for state-wide rollups. Patrol-vehicle-style location data is never public; only the per-facility aggregate is.",
      },
      {
        q: 'What does the AI actually detect?',
        a: "Late check-ins crossing a per-facility threshold, absences without sanctioned leave, complaint clusters at a single facility, repeat-doctor complaints from different patients in a short window, and statistically unusual patterns - the kinds of things a human reviewer would only see after dozens of reports.",
      },
      {
        q: 'Are doctors named publicly?',
        a: "Yes. Every government doctor has a public profile page - the same way a TASMAC shop does in InOut. Posted whistles show department, facility, and the doctor's name; the patient's name is never shown.",
      },
      {
        q: 'What if a doctor has a legitimate reason to be absent?',
        a: 'Sanctioned leave, official visits, emergencies - all entered in advance through the doctor app or by the facility in-charge, and shown on the public profile. AI anomaly detection ignores any time marked under approved leave.',
      },
    ],
    meta: {
      title: 'DocInOut - PHC and hospital doctor accountability app for Tamil Nadu',
      description:
        "A public attendance clock for every government doctor at a PHC or hospital. Doctor check-in/out, patient whistles for missed appointments and abuse, AI anomaly dashboard for the Health Department. If you have a problem, just whistle.",
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
  siren: {
    bg: 'bg-[var(--color-siren)]',
    ink: 'text-[var(--color-siren)]',
    soft: 'bg-[color-mix(in_srgb,var(--color-siren)_14%,transparent)]',
    tint: 'text-[var(--color-siren-deep)]',
    ring: 'ring-[var(--color-siren)]',
  },
  pulse: {
    bg: 'bg-[var(--color-pulse)]',
    ink: 'text-[var(--color-pulse)]',
    soft: 'bg-[color-mix(in_srgb,var(--color-pulse)_14%,transparent)]',
    tint: 'text-[var(--color-pulse-deep)]',
    ring: 'ring-[var(--color-pulse)]',
  },
};

export function getApp(slug: string): AppRecord | undefined {
  return apps.find((a) => a.slug === slug);
}
