import { Link } from "react-router-dom";
import useAPI from "../utils/useAPI";
import Header from "./Header";

export default function Blog() {
  // created a custom hook useAPI() which handles fetching of
  // Blog Post from the server and returns the data;
  const blogList = useAPI();

  return (
    <div>
      <Header />
      {blogList.map((element) => {
        return (
          <Link to={`/${element.id}`}>
            <h2>{element.title}</h2>
          </Link>
        );
      })}
    </div>
  );
}
