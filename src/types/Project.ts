export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  upvotes: number;
  link: string;
  hasUpvoted: boolean;
}