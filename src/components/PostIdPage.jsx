import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import axios from "axios";
import Loader from "./UI/Loader/Loader";
import "../css/style.css";
const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    setPost(response.data);
  });
  const [fetchCommentById, commLoading] = useFetching(async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    );
    setComment(response.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchCommentById();
  }, []);
  return (
    <>
      <h1>Пост {params.id}</h1>
      <h2>{post.title}</h2>
      <div>
        {error && <p>{error}</p>}
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <p style={{ fontSize: "30px", textAlign: "center" }}>{post.body}</p>
        )}
        {commLoading ? 'мда' : 
          comment.map((comm) => (
            <div key={comm.id} className="comment__wrapper">
              <p className="comment__note">name - {comm.name}</p>
              <p className="comment__note">email - {comm.email}</p>
              <p className="comment__note">description - {comm.body}</p>
            </div>
          ))}
      </div>
    </>
  );
};
export default PostIdPage;
