export default interface Comment {
  post: number;
  id: number;
  content: string;
  attachments?: string[];
  author: string;
  createdAt: string;
  edited: boolean;
  replyComment?: number;
}
