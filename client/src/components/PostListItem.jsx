import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image
            src={post.img || "/path/to/fallback-image.jpg"} 
            alt={post.title}
            className="rounded-2xl object-cover"
          />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <span>{post.user?.username || "Unknown Author"}</span>
          <span>on</span>
          <Link className="text-white text-sm font-medium rounded-lg bg-black px-4 py-1 capitalize">{post.category}</Link>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span role="img" aria-label="calendar">
              📅
            </span>
            <span>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="underline text-green-600 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
