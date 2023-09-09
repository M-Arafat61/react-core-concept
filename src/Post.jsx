import "./post.css";
export default function Post({ post }) {
  console.log(post);
  const { userId, title, body } = post;
  //   console.log(post);
  return (
    <div>
      <div className="post">
        <p>id:{userId}</p>
        <h4>Title:{title}</h4>
        <p>Post:{body}</p>
      </div>
    </div>
  );
}
