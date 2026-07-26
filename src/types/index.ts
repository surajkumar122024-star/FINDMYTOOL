export interface Tool {
  id: string;
  slug: string;
  name: string;
  category: string;
  pricing: 'Free' | 'Paid' | 'Free / Paid' | string;
  rating: number;
  shortDescription: string;
  website: string;
  tags: string[];
}

export interface Category {
  name: string;
  slug: string;
  iconName: string;
  description: string;
  count: number;
}
