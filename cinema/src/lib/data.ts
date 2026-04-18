export const NAV = [
  { label: 'Titles', href: '#titles' },
  { label: 'Latest', href: '#latest' },
  { label: 'Studio', href: '#studio' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export type Title = {
  key: string
  name: string
  kicker: string
  tagline: string
  description: string
  year: string
  stat: { k: string; l: string }
  color: string // tailwind color name
  hex: string
  hexDark: string
}

export const TITLES: Title[] = [
  {
    key: 'audience',
    name: 'Audience Path',
    kicker: 'Flagship · Intelligence',
    tagline: 'Intent over demographics.',
    description:
      "A living repository of African audiences, built from proprietary signal. Target intent, lifestyle, and hyper-local geography across 290 sub-counties and 774 LGAs.",
    year: '2026',
    stat: { k: '24.4M', l: 'Addressable reach' },
    color: 'acid',
    hex: '#C9FF3B',
    hexDark: '#2a3300',
  },
  {
    key: 'creative',
    name: 'Creative Path',
    kicker: 'Studio · Data-Driven Design',
    tagline: 'Concept to launch in 72 hours.',
    description:
      "Intelligence-led creative. AI-accelerated production. Omnichannel execution from HTML5 banners to vertical video and CTV.",
    year: '2026',
    stat: { k: '72h', l: 'Brief to launch' },
    color: 'magenta',
    hex: '#FF4DA6',
    hexDark: '#3a0420',
  },
  {
    key: 'media',
    name: 'Media Path',
    kicker: 'Activation · Omnichannel',
    tagline: 'Everywhere audiences actually are.',
    description:
      "Programmatic, Connected TV, DOOH, SMS, voice, TV Sync and Sports Sync. Managed trade desk, real-time optimization, transparent reach.",
    year: '2026',
    stat: { k: '2–3×', l: 'vs industry benchmark' },
    color: 'electric',
    hex: '#4DC3FF',
    hexDark: '#042a3a',
  },
  {
    key: 'happy-hour',
    name: 'Happy Hour',
    kicker: 'Venture · D2C Commerce',
    tagline: 'The ultimate drinks experience.',
    description:
      "More than delivery. A direct-to-consumer platform merging shopping with playlists, party games, and mixology guides. Intelligence engine feeding Party Planner and Socializer segments.",
    year: '2026',
    stat: { k: 'D2C', l: 'Zero channel dilution' },
    color: 'ember',
    hex: '#FF6B2C',
    hexDark: '#3a1604',
  },
  {
    key: 'content-cabal',
    name: 'Content Cabal',
    kicker: 'Venture · Creator Ops',
    tagline: 'Architects of modern attention.',
    description:
      "Mobile-first production, influencer engine, and an internal academy training teams in AI-accelerated workflows. Two-second-scroll content at broadcast quality.",
    year: '2026',
    stat: { k: '9:16', l: 'Vertical-native' },
    color: 'violet',
    hex: '#9B5CFF',
    hexDark: '#1e0a3a',
  },
  {
    key: 'chlorophyll',
    name: 'Chlorophyll',
    kicker: 'Venture · AgriTech',
    tagline: "Africa's farmer audience platform.",
    description:
      "Precision data for Africa's 250M+ smallholder farmers. Cross-channel CRM across SMS, WhatsApp and radio — plus AgriPath learning for rural marketing strategy.",
    year: '2026',
    stat: { k: '13K+', l: 'Segmented leads' },
    color: 'jade',
    hex: '#3BFF91',
    hexDark: '#04321c',
  },
]

export const LATEST = [
  {
    tag: 'Film',
    title: 'The Sankofa Tape',
    meta: 'Short film · 2026',
    blurb: 'A visual exploration of Sankofa, memory, and the intelligence embedded in African oral tradition.',
    color: 'crimson',
  },
  {
    tag: 'Release',
    title: 'Audience Path 2.4',
    meta: 'Platform update · Feb 2026',
    blurb: 'New RTB filters, expanded Nigerian LGA coverage, and sports-triggered activation.',
    color: 'acid',
  },
  {
    tag: 'Case Study',
    title: 'Mastercard Foundation — Young Africa Works',
    meta: 'Impact campaign · 2026',
    blurb: 'Building youth-focused audience clusters across seven African markets. 12M+ engagements.',
    color: 'magenta',
  },
  {
    tag: 'Venture',
    title: 'Happy Hour launches Lagos',
    meta: 'Expansion · Jan 2026',
    blurb: 'D2C drinks platform rolls out in Lagos with 40+ merchant partners on day one.',
    color: 'ember',
  },
  {
    tag: 'Talk',
    title: 'The Two-Second Scroll',
    meta: 'Content Cabal lecture · 2026',
    blurb: 'Leonard Kinyanjui on attention architecture for Africa\'s mobile-first future.',
    color: 'violet',
  },
  {
    tag: 'Partnership',
    title: 'Meta Business Partner Tier',
    meta: 'Certification · 2026',
    blurb: 'Elevated tier across Kenya, Nigeria, and South Africa markets.',
    color: 'electric',
  },
]

export const OFFICES = [
  { city: 'Nairobi', country: 'Kenya', tz: 'EAT · UTC+3' },
  { city: 'Lagos', country: 'Nigeria', tz: 'WAT · UTC+1' },
  { city: 'Johannesburg', country: 'South Africa', tz: 'SAST · UTC+2' },
  { city: 'Cape Town', country: 'South Africa', tz: 'SAST · UTC+2' },
]

export const STATS = [
  { k: '250M+', l: 'Continental reach' },
  { k: '4', l: 'African studios' },
  { k: '2026', l: 'Year in motion' },
  { k: '200+', l: 'Campaigns shipped' },
]

export const FOOTER_GROUPS = [
  {
    head: 'Titles',
    items: [
      'Audience Path',
      'Creative Path',
      'Media Path',
      'Happy Hour',
      'Content Cabal',
      'Chlorophyll',
    ],
  },
  {
    head: 'Studio',
    items: ['About', 'Team', 'Careers', 'Press'],
  },
  {
    head: 'Support',
    items: ['Partners', 'Brand Guidelines', 'Privacy', 'Contact'],
  },
  {
    head: 'Social',
    items: ['LinkedIn', 'Instagram', 'YouTube', 'X (Twitter)'],
  },
]
