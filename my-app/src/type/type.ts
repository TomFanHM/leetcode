export type Article = {
  id: number;
  href: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  difficulty: "Easy" | "Medium" | "Hard";
};
