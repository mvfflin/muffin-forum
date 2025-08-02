import Comment from "./replies";

export default interface Post {
  id: number;
  title: string;
  topic: string[];
  content: string;
  author: string;
  createdAt: string;
  edited: boolean;
  attachments?: string[];
  comments?: Comment[];
}
