import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../Components";
import dbService from "../appwrite/dbConfig";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  dbService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllPosts;
