import Post from "@/types/post";

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => (
  <div
    className="bg-green-500 text-zinc-900 rounded-xl p-3 sm:p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer animate-fade-in-up hover-lift"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300 hover:text-green-700">
      {post.title}
    </h1>
    <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-3">
      {post.content}
    </p>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600 gap-1 sm:gap-0">
      <span>By {post.author}</span>
      <span>{post.createdAt}</span>
    </div>
    {post.topic && post.topic.length > 0 && (
      <div className="flex flex-wrap gap-1 mt-2">
        {post.topic.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="bg-green-600 text-white text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default PostCard;
