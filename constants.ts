import { NavItem, CollectionItem, JournalEntry, FooterSection } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Collections', href: '#' },
  { label: 'Atelier', href: '#' },
  { label: 'Editorial', href: '#' },
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 1,
    title: 'Tableware',
    number: '01',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEMG0U2yN-srAgpA4aSXewbFyRyFWnm181AquAJCRzLwgPHNHbs-fxFKQ8DMbozvyRU-s0LUPRKoZtht1-Lp3RDOfKE3jCrAD_A4tl9BXwHGUcAPWj0jBq3C9plosFkHIzYUDBtbq_Azg3RK2csufB9tH_tIJhMW--_IIfZeAltM9sgTD5wAPRPIUyV-0iemF2eWLZnx0IfTLZSkN930lHZ6aHxWChqHqoVMUTdYxqHPt0tpUW3C082em7_4fuoRpWdf4_flYYoO4',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 2,
    title: 'Lighting',
    number: '04',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz5MOY7i5TxXxrGVaW7nItrMPEhwnNz5VkQ7BwzWHUBMfV3j8A42PekcfAMOXu7nP2pX7m-Trx0lBWwFq4RuDfJMghT-DwyJAP4nT2sTCgX_WosvcMQfj5koFU-CLX7CMboAxAPXWUWe3Q8xU4Zl0kysFKLG34fR_GaRlN0diovvLg1SQ6fLq2dMRg2o523onwafjD0f6XBDxbtWBsnfIp_2U1_0zFahOkW2JyyJhIZFVCTiP61CY2rkwqtmupBjzzY7iKcMtszhE',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 3,
    title: 'Vases',
    number: '02',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV8jgjafGxXCrSmiIUCN5Zwqv0cl-Ivw5hjQoa5ejFBx3a0C7zgeI_pywBpee7f0scHB_zrYQbI0zryX0P_F2w_xefVbl_8vkvSRMPhsqrs_z9u16FlDVgmXX9_PxhC8oRWZmGbtHsvXhfDEtvAi94tBJeQYTdG2a-XJ7gB0F8GLyvVl7_NHu9iB_TyVhbKIOv354VUmcNAehnGfuK0fTtAjQr0qxaHt8CD9pLJvfTeVJZF2VPRgToY5dN4eqRTRJrQPuLIW2aP9k',
    aspectRatio: 'aspect-square',
  },
  {
    id: 4,
    title: 'Serving',
    number: '05',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlTM_GLiQWReZzrfgwPZXJ2OjRaelPwrF2URWBLiqQjOdyxy0onUB9FoX4kcIzTnQSRIfRZsg6Dt5BS6j5bE6SYhdkZ60HAOZJNybnBvZqfICwldKNMiTg9-fm4X1otiHO8vO_Hr-DuwsaE818YSDiW2vyVH947T8peRurHz-sYZu9gJgq9R4D3BtLrdbf9R6MaYmqGZ47NAwHV1BHicOSMFGxfhK-p5exDM963E8qBTwl3PEXcRdnAq6-B-ada0XJ3jz8iA4Cavo',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 5,
    title: 'Kitchenware',
    number: '03',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_jVXnz1bLom_g2aBEGMY2fmAe2vuv4pwP_NdhGGqtKhcIr36eQ-BQ5d3cMXXjIDURtvBt9juNVX8kJG1T404125GGwEoQmMCD4IawdGY7hDBeByI8PG9Z8Ioc-skCG9X5bdU9-O4PS6KBglPV8fnkyG6FjPkN0RdGvHWMZQ6iInrJhOqiqX3r-6YvmIpGSi5FoXyFnmcfLnf1faHq8kWIMuv0WgLHSlOFlB5MeIJAQwvuk5Gbk4drXCt2heYy5WRWIdutVdiQOa4',
    aspectRatio: 'aspect-[3/5]',
  },
  {
    id: 6,
    title: 'Textiles',
    number: '06',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI1p48nya5N3xLUE8fx6a0Cwniu_QuS5yo-wq6PE1W77n0orf57QyF1g4426uqGtiv02HHHXd40Sq81usdXnpOqvLiviW_gSGdtlorcOpaSl6R8k23cG_I-5v4pPVJiaTPqrhK1U3VtxLX5Bpj8x7NOtZT4K1jtI4NHt-S1A0GvBjM7jCfH_0y8Xw8L_R5br8I8_KmdbC7ACaNd4OAZUpJdt4UUANVy664jG4m9dZshHpa8Og4aFzZ1CRxmQExSVEzc0CKZ9GSLB0',
    aspectRatio: 'aspect-square',
  },
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 1,
    category: 'Studio',
    date: 'Oct 03',
    title: 'Product Photography for Small Businesses',
    description: "Learning that beautiful products aren't enough on their own — you also need beautiful photos to tell the story.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAipMlYLTcRT_hdc3VePfFIlrA56VzZ5G2y3gcRfmIZMERwGFKq2N19Gqo6mw7uZowXmjl2eJ89TI3Mcud2OyOfadO3mPVF_v0sI0OHupqM49WEFcWzH-Wbu3DL6bQ46F2Y8SIAk-NUQy8psjcIdBKRrM8fqdn4eOPANYTXpVxkLMAm4R0Axy4aEKNdmj917ZKKTxvXB-J8nGlITJkJ-ua7XcZOwGnfK5ttzyWW35A0oOSffCf972gmpV27wrVQgYJNLS7UyDdyQIQ',
  },
  {
    id: 2,
    category: 'Guide',
    date: 'Jul 15',
    title: 'The Art of Packaging',
    description: "A practical guide for potters who want to package and send their handmade ceramics with care and confidence.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaWGnX_NYT3S_lOflL2NJZGbWge4AAkvra4ymvF8ag-c1UKsOAIB-rsLVQXW5xIlPZipDiK8-ysPyv22xdgsvzs4EOXSSCcrT4Lb2YCe0u5orxRaZEA5TgxeoKq15zaWKSlmnHyPGjPd_7yglpfO13eZmbU5KaxFJ1KGO0UAxoO9BpsyCYgbgINMoSz3epGe5ZdwBWRH-5KCzjoLuXimFTLcd5bqg9T1YofTxgy2hWBMJzKkafyEniq8dP6hMmfNCLVcCHHHx0hRU',
    marginTop: true,
  },
  {
    id: 3,
    category: 'Wellness',
    date: 'Jun 11',
    title: 'Finding Motivation in Clay',
    description: "10 gentle, practical tips to help potters find motivation during slow or uncertain moments in the creative process.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8NOE5fGfN4d87cbcB27_Sh-nrlZlqxsTlYKbCZk98SoL-gHsPSWFNuxd1DxBq0g8Qysh0RBZ_btu-_WaH68UjV8SXPUalyxREvUqao4oXmra--pWAsaooWwKvWCzReYZ8kj7G-KIYIAo5mqudzB8n9C6-HVTNPPx9QgZHr_YsojMxlmmVcQ5bqk7-Lp0KtSAiVIPD2-1UE1dMGnkVSLUXKdgA65JIh8M3TtNkaJTGONuFKoTERrYOWe7u2BILnqyukTzlNcvK7Sc',
  },
];

export const GALLERY_IMAGES: string[] = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDGY1PXPxlhIz9qU-XbDrdJjrRnX1pFo8YpH3HM1Crq9C6iVApx-qFkpjTj_MDOXXrX4jprk69hA0fmwR2EdURQyKaBLDAdkIE3vLKCyTRMhgyGerlpsy6_KZkZs-9hiaoWZPBFzvBIGWZ0i7sfbbtkQdBGJfK30yftDOPjI1NJfzBtsKNMbYOnXfmm-6u7uiovrM54rtRNWzsxmcvhRKQebZIUrERvGGYsUvUVARYEzSs4thyJnMYROk0LmoCrJ03_QjDvLzy_zjw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBLafDd9RRuru_JkGfpxms6q-dFwzNrjKIazUT33dREB4eWcGSGtNYEKzTCgaRJYIGNvhE1z1tYSrr3ZMrMSQs_3oIJz2hrlYYq49EJaI8VD2YrM9akd50BsF3voaGW1yZFHM5S36ZbrCx3A8Id2wkDnlJ7TnUYdo76-TErMa6h94HxQYBSwLQESFBrPfDEi5Qf6MDfE-6i3HJNIYGS79zemso4U8mMRi-HA17y4ilifDoI2B4vc3ROE3HFbTVP6JxJxjklnlbMt28',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDGyeyp1BDBjdasLDmyEWUfA0eeSJ8qMmrlPS0IgsyNdW_-0NEbFZhO72z3kox8ys3T2PZOprxzbnDwBQfjdwLiISmT3eHil4LQgRNt35AucCh1b-BFmUjXB9vuQ-JAFY122ABF9AmGWIhKCH7HHJj-Pibiz4NlcEGf_-59GAtt_y4g6OzzZpBKzfZAXd2_h-2I3ZbMaNDYEVK9dZSwVSrUNxQEFRFLUoqoNm8_VqgfpwpXmGwSmEZfy-lfjnXDBF1AS3ipD7JR04E',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBxM-yqwsAyWN-4sNS6FCNyry1QP6_yKpP7av1uPQTEArxL29_Ir1vfmlNJ50UMMYBRXHwSYUS9dwgO9hsccM8QKk0DybH5Hsa0k1oA1PSD2fIButt6JbICrrLhqC51S37PtN7vpPxtlqFPXQyaGEQl8r8eZbbROIqtUCGdWks_prak9UNTbeph0gHDa0Xlw8HtXRSgQCqONjRuWVWC9ynnqpqXXgLIeCvCVBUiQuXxCnhLsMDWOcw8sjaVSFKo1tRi9IUFRaXEGu0',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDD63SnScOyJcWSHLRucaOZ46wQpGV0c-ljb4DvnaURof8aTmuMD75dT1UUKXzDwWBUKGqu3nNlUUOXnEfjLE8pwAdvRKHhunOunZW5qbw35eY1vH14HXGqQSe90m7RUxku70QRlVS338tKQEAJ9TasOSte56oSEmKzUC0q9VF9P8GTl-0R8CcmvQ9hfwRIe34s2QUEwE96LYTREHdWZI6RRZojG8MTeV1qGFgFgjwEqnYbIGCFdW5TFMyTvkuPd1R0IBNfWZzhJkM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBQAOyWAgHl3Uf9zP9-cmp1ZPrAw5wi7GP1div8GHtarOvO68Kn8069PqiCFYs91kLD1YWcb9tk3y9Fm12AmMfRpIIvNTvAWxkZ7xL0BWM_UZ5BPmvSVuRDXKcvg5_qQVXJOy5ub3Yu3oBqKhR617MhwY4F_Am0cNClmSgPaYHALRi-CB3_hlLdgXQhI0dP5j7yNqlrTxHHv34vRQWvg2_Htkum0XcSQHuK9-A89-Cgcz5-V-FzCjxKPzAROoN0OKL9YxjRXHkwQjk',
];

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: 'Shop',
    links: [
      { label: 'All Ceramics', href: '#' },
      { label: 'New Arrivals', href: '#' },
      { label: 'Best Sellers', href: '#' },
      { label: 'Gift Cards', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Shipping', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];