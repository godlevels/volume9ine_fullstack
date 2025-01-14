import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8"> 
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-green-600 text-white rounded-full px-4 py-2"
        >
          All posts
        </Link>
        <Link
          to="/posts?cat=events"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Events
        </Link>
        <Link
          to="/posts?cat=interviews"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Interviews
        </Link>
        <Link
          to="/posts?cat=new-releases"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          New Releases
        </Link>
        <Link
          to="/posts?cat=reviews"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Reviews
        </Link>
        <Link
          to="/posts?cat=what-is-new"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          What is New
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      <Search />
    </div>
  );
};

export default MainCategories;
