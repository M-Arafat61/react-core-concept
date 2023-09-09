import { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h3
        style={{
          border: "2px solid hotpink",
          borderRadius: "15px",
        }}
      >
        Users:{users.length}
      </h3>
      {users.map(user => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
