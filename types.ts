export interface NavItem {
  label: string;
  href: string;
}

export interface CollectionItem {
  id: number;
  title: string;
  number: string;
  image: string;
  aspectRatio: string; // Tailwind class like aspect-[3/4]
  gridClasses?: string; // Optional layout adjustments
}

export interface JournalEntry {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  marginTop?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}