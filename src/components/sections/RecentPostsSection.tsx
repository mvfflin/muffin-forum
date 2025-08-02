import { useState, useEffect } from "react";
import { postDummy } from "@/constants";
import PostCard from "@/components/cards/PostCard";

const RecentPostsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-5 lg:px-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-walaweh text-center text-stroke animate-fade-in mb-8">
        Recent Posts
      </h1>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {postDummy.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPostsSection;
