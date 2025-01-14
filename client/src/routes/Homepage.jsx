import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";
import Image from "../components/Image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Newsletter from "../components/Newsletter";

const Homepage = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {showNewsletter && <Newsletter onClose={() => setShowNewsletter(false)} />}

      <div className="flex gap-4 text-white text-sm sm:text-base">
        <Link to="/">Home</Link>
        <span className="text-green-600">*</span>
        <span className="text-green-600">Blog and Articles</span>
      </div>

      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          arrows: false,
          pagination: false,
        }}
        aria-label="Hero Section Slider"
        className="mt-4"
      >
        <SplideSlide>
          <div
            style={{
              backgroundImage: `url('https://ik.imagekit.io/umgtihskz/burna.png?updatedAt=1736479908795')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-gray-100 text-white bg-opacity-90 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex-grow flex flex-col items-start justify-start mx-4 text-center">
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                  TOPIC
                </span>
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  NEW RELEASES
                </span>
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                  NEWS
                </span>
              </div>
              <h3 className="font-bold text-lg mt-2">
                Fresh Shares Debut From The Oven
              </h3>
            </div>
            <Link
              to="write"
              className="relative hidden md:block w-32 h-32 lg:w-48 lg:h-48"
            >
              <Image src="Logo3.png" alt="volume9ine logo" w={550} h={550} />
            </Link>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            style={{
              backgroundImage: `url('https://ik.imagekit.io/umgtihskz/TIWA-NYC_-28.webp?updatedAt=1736513372790')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-gray-100 text-white bg-opacity-90 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex-grow flex flex-col items-start justify-start mx-4 text-center">
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                  TOPIC
                </span>
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  NEW RELEASES
                </span>
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                  NEWS
                </span>
              </div>
              <h2 className="text-lg font-bold">Discover the New Adventures</h2>
              <p className="text-sm">
                Tiwas NYC Experiences - A Visual Journey
              </p>
            </div>
            <Link
              to="write"
              className="relative hidden md:block w-32 h-32 lg:w-48 lg:h-48"
            >
              <Image src="Logo3.png" alt="volume9ine logo" w={550} h={550} />
            </Link>
          </div>
        </SplideSlide>
      </Splide>

      <MainCategories />
      <FeaturedPosts />
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
