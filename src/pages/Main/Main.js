import "./Main.css";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

function UserList(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  if (users.length > 0) {
    return (
      <div>
        {users.map((item) => {
          return (
            <div key={`key1-${item.id}`} className="box">
              <div key={`key2-${item.id}`} className="img-box">
                <img
                  src={`https://picsum.photos/id/${Math.floor(
                    Math.random() * 81
                  )}/150/150`}
                  alt="avatar"
                ></img>
              </div>
              <div key={`key3-${item.id}`} className="data-box">
                <h1>{item.name}</h1>
                <h2>{item.username}</h2>
                <h3>{item.email}</h3>
              </div>
              <div className="btn-box">
                <Link to={`users/${item.id}/albums`}>
                  <button className="alb-btn">Album</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserList;
