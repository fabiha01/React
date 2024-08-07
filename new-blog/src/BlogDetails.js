import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/blogs/";
  const {data: blog, error, isPending} = useFetch(url + id);
  const history = useHistory();

  const handleClick = () => {
    fetch(url + blog.id, {
      method: "DELETE"
    }).then(() => {
      history.push('/');
    })

  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
