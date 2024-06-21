import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../Components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dbService from "../appwrite/dbConfig";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError("");
    try {
      dbService.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
          setLoading(false);
        }
      });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  const userData = useSelector((state) => state.auth.userData);

  if (loading) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap h-[600px] justify-center items-center">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-semibold cursor-pointer text-gray-200 hover:text-gray-400">
                Loading...
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else if (posts.length === 0 || error) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap h-[600px] justify-center items-center">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-semibold cursor-pointer text-gray-200 hover:text-gray-400">
                {error ? "Some error occurred" : "No posts found"}
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else if (!userData) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap h-[600px] justify-center items-center">
            <div className="p-2 w-full">
              <Link
                to="/login"
                className="text-2xl hover:underline font-semibold cursor-pointer text-gray-200 hover:text-gray-400"
              >
                Login to read posts
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <section className="text-gray-400 w-screen flex justify-center items-center bg-gray-900 body-font">
      <div className="container w-full px-5 py-24 justify-center items-center xl:w-5/6 2xl:w-4/6 mx-auto">
        <div className="flex justify-center items-center flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 sm:w-3/6 w-11/12 lg:w-1/3">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
