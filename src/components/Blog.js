import { useParams } from "react-router-dom";
import useAPI from "../utils/useAPI";
import Header from "./Header";

export default function Blog() {
  // created a custom hook useAPI() which handles fetching of
  // Blog Post from the server and returns the data;
  const { id } = useParams();
  const blogData = useAPI({ id });

  return (
    <div>
      <Header />
      <h2>{blogData.title}</h2>
      <p>{blogData.body}</p>
    </div>
  );
}
