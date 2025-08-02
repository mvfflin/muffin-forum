export const CATEGORIES = ["Games", "Movies", "Music", "Books"] as const;

export type Category = (typeof CATEGORIES)[number];
