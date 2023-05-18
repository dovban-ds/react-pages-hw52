import "./Album.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

function Album() {
  const params = useParams();
  const [usersAlbum, setUsersAlbum] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`)
      .then((response) => response.json())
      .then((data) => setUsersAlbum(data));
  }, []);
  if (usersAlbum.length > 0) {
    return (
      <div className="album-main">
        <div className="home">
          <Link to="/">Home</Link>
        </div>
        <div className="album-cont">
          {usersAlbum.map((item) => {
            return (
              <div key={`key1-${item.id}`} className="album-box">
                <h1>Album {item.id}</h1>
                <h2>{item.title}</h2>
                <Link to={`../${item.id}/photos`}>
                  <button className="pht-btn">Photos</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Album;
