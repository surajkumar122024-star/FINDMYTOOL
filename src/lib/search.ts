import Fuse from "fuse.js";
import toolsData from "@/data/tools.json";

export type Tool = {
  id: string;
  slug: string;
  name: string;
  category: string;
  pricing: string;
  rating: number;
  shortDescription: string;
  website: string;
  tags: string[];
};

const tools = toolsData as Tool[];

const fuseOptions = {
  includeScore: true,
  threshold: 0.35, // lower = stricter match, higher = more fuzzy
  keys: [
    { name: "name", weight: 0.5 },
    { name: "tags", weight: 0.3 },
    { name: "category", weight: 0.15 },
    { name: "shortDescription", weight: 0.05 },
  ],
};

const fuse = new Fuse(tools, fuseOptions);

export function searchTools(query: string, limit = 6): Tool[] {
  if (!query.trim()) return [];
  return fuse
    .search(query)
    .slice(0, limit)
    .map((result) => result.item);
}

export function getAllTools(): Tool[] {
  return tools;
}
