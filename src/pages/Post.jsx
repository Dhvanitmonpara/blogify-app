import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dbService from "../appwrite/dbConfig";
import bucketService from "../appwrite/bucketConfig";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData.userData);

  const isAuthor = post && userData ? post.userId == userData.$id : false;

  useEffect(() => {
    if (slug) {
      dbService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    dbService.deletePost(post.$id).then((status) => {
      if (status) {
        bucketService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-3/4 mx-auto">
            <img
              className="w-full object-cover object-center rounded-lg"
              src={bucketService.filePreview(post.featuredImage)}
              alt={post.title}
            />
            <div className="my-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-white">{post.title}</h1>
                {isAuthor && (
                  <div>
                    <Link to={`/edit-post/${post.$id}`}>
                      <button className="bg-gray-200 hover:bg-gray-400 text-slate-900 font-bold py-2 px-4 rounded mr-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={deletePost}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <div className="leading-relaxed mb-6">{parse(post.content)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
