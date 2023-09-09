import "./User.css";
export default function User({ user }) {
  // console.log(user);
  const { name, username, id, email } = user;

  return (
    <div>
      <div className="user">
        <p>Id: {id}</p>
        <h3>Name: {name}</h3>
        <p>
          Username: <i>{username}</i>{" "}
        </p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}
