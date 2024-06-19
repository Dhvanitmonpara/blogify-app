import React, { useEffect, useState } from "react";
import dbService from "../appwrite/dbConfig";
import { Container, PostCard } from "../Components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const userData = useSelector((state) => state.auth.userData);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap h-[600px] justify-center items-center">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-semibold cursor-pointer text-gray-200 hover:text-gray-400">
                No posts found
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
              <h1 className="text-2xl font-semibold cursor-pointer text-gray-200 hover:text-gray-400">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
