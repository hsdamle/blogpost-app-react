import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BlogList />,
    },
    {
      path: "/:id",
      element: <Blog />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
