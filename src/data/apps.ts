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
      "Makkal Kural has two tabs and one purpose. Whistle when a service fails - the app uses your rough location to find your constituency, reads what you wrote to find the right department, sends the whistle to the right office, and tracks it until it's fixed. Once it's fixed, you leave a review - and the whole story stays there for everyone to see. Each whistle shows up on the feed of only the people it affects (home, street, ward, constituency, district, or state), so your feed stays relevant - and when the government wants to know what people think before acting, only voters in that area can upvote or downvote. If you have a problem, just whistle.",
    accent: 'rust',
    layout: 'hero',
    features: [
      {
        title: 'Two tabs: Whistles and Reviews',
        body: 'Whistle when a counter visit goes wrong. Leave a review when it goes right. Fixed whistles roll into the public Reviews feed on their own - you never enter it twice.',
      },
      {
        title: 'Location finds your constituency',
        body: 'A rough location from your network places you in one of Tamil Nadu’s 234 assembly constituencies. No exact GPS. No street-level tracking. You can change it yourself.',
      },
      {
        title: 'Your words find the department',
        body: 'Just write what happened, in Tamil or English. The app reads it and picks the right department, office, and service - so you never scroll a list of 240 departments.',
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
        body: 'One login across web, Android, and iOS. Reviews and fixed-request scorecards added up by office, department, and constituency. Free for anyone to download, refreshed nightly.',
      },
    ],
    stats: [
      { value: '234', label: 'Constituencies covered' },
      { value: '92%', label: 'Sorted to the right office' },
      { value: '<5s', label: 'Avg. time to sort a post' },
    ],
    faq: [
      {
        q: 'How do Whistles and Reviews relate?',
        a: 'Whistles are filed when something goes wrong - they are routed and tracked. When a whistle is marked resolved, the app prompts you to leave a star rating and a short note, and that entry then appears in the Reviews tab too. Reviews can also be posted directly without a prior whistle.',
      },
      {
        q: "Why can't I see all issues on my home feed?",
        a: "Each issue shows up on the feed of only the people it affects - so a streetlight on someone else's street stays on their feed, not yours. You can still open any issue if you have a link or the ID. The goal is to keep your feed relevant, not to hide anything.",
      },
      {
        q: 'How is the scope of an issue decided?',
        a: 'The same reading that picks the department also picks the smallest sensible area (home, street, ward, constituency, district, state). If the app isn’t sure, you pick the area from a short list before the issue goes live.',
      },
      {
        q: 'Who can upvote and downvote a whistle?',
        a: "Only people inside the whistle's area can vote - confirmed by voter ID at signup. A constituency-level whistle can be voted on only by voters registered in that constituency. Everyone else sees the running totals but can't move them. This stops people outside the affected area from flooding the vote.",
      },
      {
        q: 'How does location find my constituency without GPS?',
        a: 'We use a rough location from your network, accurate to about 2 km. That’s enough to tell which of Tamil Nadu’s 234 assembly constituencies you’re in, not enough to know your street. You can also pick the constituency yourself.',
      },
      {
        q: 'How does the app know the right department?',
        a: 'Short posts are read right on your phone. Longer ones are read on our server by a Tamil + English system that never sees your name, your location, or your past posts while it works.',
      },
      {
        q: 'Can I post anonymously?',
        a: 'Yes - anonymous is the default. Verified accounts count for a little more in the combined rankings, but anonymous posts count too.',
      },
      {
        q: 'How is my voter ID handled at signup?',
        a: "An AI on your phone reads your voter ID, checks that you're registered in the constituency you claim, and deletes the image the moment it matches. The image never reaches our servers. All we keep is a scrambled code that links your account to a verified constituency - never your voter ID number, never the photo. It can't be turned back into your ID. Secure by design.",
      },
      {
        q: 'How do you stop fake reviews and pointless whistles?',
        a: 'One verified mobile number per account. New accounts count for less until they’ve been around a while. The app flags suspicious rings and bots, and we publish how often it gets that wrong.',
      },
    ],
    meta: {
      title: 'Makkal Kural - Requests and reviews for Tamil Nadu government offices',
      description:
        'Two-tab citizen app: whistle when a service fails, leave a review when it’s done. Your rough location finds your constituency, your words find the department. Web, Android, iOS.',
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
        body: 'Shopkeepers check in at the start of every shift and check out at close. The time, a selfie, and a GPS check at the shop show up on the public log right away - no edits, no backdating.',
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
        body: 'Inspectors get a constituency map of every shop with live status, how many whistles each has, and one tap to send it to the local TASMAC office.',
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
        a: 'Each check-in needs the time, a GPS check at the registered shop, and a face match against the shopkeeper on file. Backdated entries are rejected. If GPS isn\'t working, the shop is marked "open but unverified" - which is itself a flag for the inspector.',
      },
      {
        q: 'How are whistles verified?',
        a: "Anonymous whistles land in the inspector's queue with the shop, shift, and timestamp. The inspector decides whether to act. Whistle outcomes (acted on / dismissed) are public, so patterns of dismissal show up over time.",
      },
      {
        q: 'Can anyone download the data?',
        a: 'Yes. Daily open and close times, late-close flags, and the whistle count per shop are free for anyone to download, refreshed nightly. Names of staff, customers, and whistleblowers are never published.',
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
      { value: '240+', label: 'Schemes covered' },
      { value: '54s', label: 'Average match time' },
      { value: '4.6x', label: 'More applications finished' },
    ],
    faq: [
      {
        q: 'Do you store my answers?',
        a: 'Only if you ask us to, for renewal reminders. By default we store nothing - the matching happens right on your phone.',
      },
      {
        q: 'How are central schemes covered?',
        a: 'We pull Government of India schemes from the public MyScheme list and check what you qualify for on your phone.',
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
      "Whistle is the panic button Tamil Nadu's women have been waiting for. A shortcut on your home screen, one tap - the people you've saved get a message with your live location, the local police are told, and the nearest Singa Pen patrol vehicle gets directions to you. At the same time the phone starts whistling at full volume to scare off whoever is bothering you and pull people nearby in. Singa Pen patrol vehicles share their GPS with a private control room - not the public - which flags anything off: a vehicle sitting idle, off its route, or on its way to a call. Every account is checked with a live face match against a government photo ID at signup, so fake accounts can't waste the patrol's time. If you have a problem, just whistle.",
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
        body: 'At signup, a live face video is matched against a government photo ID (Aadhaar, PAN, TN citizenship card, or school/college ID). Keeps fakes out and the patrol free for real calls.',
      },
      {
        title: 'Admin oversight, not public surveillance',
        body: 'Patrol vehicles share their live GPS with the Singa Pen control room only - never the public. It flags vehicles that are idle, off-route, or on a call automatically.',
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
        a: "To stop men creating fake accounts to test response times or waste the patrol's time. At signup, an AI on your phone reads your government photo ID (Aadhaar, PAN, TN citizenship card, or school/college ID) and matches it to your live face video. The image is deleted the moment it matches - it never reaches our servers. All we keep is a scrambled code that can't be turned back into your ID, just to stop the same person signing up twice. Secure by design.",
      },
      {
        q: 'Who can see the patrol vehicle locations?',
        a: "Only the Singa Pen control room. Patrol GPS goes to the administration so it can flag anything off (idle, off-route, on a call), but it's never public. The public sees only a 'patrols active' count per constituency.",
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
        a: 'Patrol locations stay inside the Singa Pen system. Signing up uses the same ID checks as voter ID. The code behind the alerts, the flagging, and the dashboards is public on GitHub.',
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
      "A public attendance clock for every PHC and government hospital doctor in Tamil Nadu. Doctors check in and out, patients whistle missed appointments, abuse, or bribery, and an AI dashboard flags anything off for the health department in real time.",
    longDescription:
      "DocInOut puts the same public clock InOut runs on TASMAC shops on every government doctor at a PHC or hospital. Doctors check in at the start of a shift - a selfie and a GPS check at the hospital - and check out at close. Patients can whistle a missed appointment, a demanded bribe, abuse, or any other failure of care; the whistle is tied to that exact shift and sent straight to the district health office. An AI dashboard catches patterns a person would miss: doctors who are always late, hospitals piling up complaints, unusual absences. The most serious whistles (bribery, abuse) jump to the top on their own. If you have a problem, just whistle.",
    accent: 'pulse',
    layout: 'split',
    features: [
      {
        title: 'One tap to start the shift',
        body: 'Doctors check in at the start of a shift with a selfie and a GPS check at the registered PHC or hospital. Check-out closes the shift. No backdating, no edits.',
      },
      {
        title: 'The "missed appointment" whistle',
        body: "Patient turns up at the assigned time, doctor isn't there - whistle it. Tied to the exact shift and hospital, and sent straight to the district health office for follow-up.",
      },
      {
        title: 'The app spots the patterns',
        body: 'Late check-ins, early exits, unusual absences, complaints piling up at one hospital, repeat-offender doctors - all show up on the health department dashboard automatically.',
      },
      {
        title: 'The serious ones rise to the top',
        body: 'The app sorts every whistle by how serious it is. Bribery, sexual abuse, life-threatening neglect jump to the top and go straight to the District Medical Officer.',
      },
      {
        title: 'A public page for every doctor',
        body: "Hospital, specialisation, today's shift status, the last 30 days of attendance, whistle count. Free for anyone to download, refreshed nightly. Doctors who consistently show up look good. Those who don't, don't.",
      },
      {
        title: 'Direct line to the administration',
        body: 'No middle layer. Whistles land in the district health office, unusual patterns go to the state health office, and the most serious cases go right to the top. Every action is timestamped.',
      },
    ],
    stats: [
      { value: '1,950+', label: 'PHCs + hospital posts' },
      { value: '<6 min', label: 'Avg. time to answer a whistle' },
      { value: 'Live', label: 'AI dashboard, always on' },
    ],
    faq: [
      {
        q: 'How is a doctor’s attendance verified?',
        a: 'Each check-in needs the time, a GPS check at the hospital, and a face match against the doctor on file. Backdated entries are rejected. If GPS isn\'t working, the doctor is marked "present but unverified" - which is itself a flag for the district health office.',
      },
      {
        q: 'What can patients whistle about?',
        a: 'Missed appointment (doctor not there at the scheduled time), demanded bribe, abuse or harassment, refusal to treat, or any other concern about your care. Every whistle is tied to the hospital, the shift, and the time.',
      },
      {
        q: 'Who sees the AI dashboard?',
        a: "The district health office sees routine whistles and that day's attendance, the state health office sees longer-term patterns and repeat offenders, and the top of the health department sees the statewide picture. Personal location data is never public; only the per-hospital totals are.",
      },
      {
        q: 'What does the AI actually detect?',
        a: "Doctors who cross the late limit set for their hospital, absences without approved leave, complaints piling up at one hospital, the same doctor reported by different patients in a short window, and other unusual patterns - the kind of thing a person would only spot after dozens of reports.",
      },
      {
        q: 'Are doctors named publicly?',
        a: "Yes. Every government doctor has a public profile page - the same way a TASMAC shop does in InOut. Posted whistles show the department, the hospital, and the doctor's name; the patient's name is never shown.",
      },
      {
        q: 'What if a doctor has a legitimate reason to be absent?',
        a: 'Approved leave, official visits, emergencies - all entered in advance through the doctor app or by the person in charge of the hospital, and shown on the public profile. The app ignores any time marked as approved leave.',
      },
    ],
    meta: {
      title: 'DocInOut - PHC and hospital doctor accountability app for Tamil Nadu',
      description:
        "A public attendance clock for every government doctor at a PHC or hospital. Doctors check in and out, patients whistle missed appointments and abuse, and an AI dashboard flags problems for the health department. If you have a problem, just whistle.",
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
