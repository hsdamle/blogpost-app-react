import { useEffect, useState } from "react";
import { BLOG_POST_URL } from "./constants";

export default function useAPI(props) {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await fetch(
      BLOG_POST_URL + (props?.id ? `/${props?.id}` : "")
    );
    const blogData = await data.json();
    setBlogList(blogData);
  };

  return blogList;
}
