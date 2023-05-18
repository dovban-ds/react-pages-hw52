import "./Photos.css";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

function Photos() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const albumId = useParams();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId.albumId}/photos`
    )
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);
  if (photos.length > 0) {
    return (
      <div>
        <div className="back">
          <Link to="/">Home</Link>
          <div onClick={goBack}>Albums</div>
        </div>
        <div className="pht-main">
          {photos.map((item) => {
            return (
              <div key={item.id} className="pht-box">
                <div className="photo">
                  <img src={item.thumbnailUrl} alt="album's item"></img>
                </div>
                <h1 className="item-title">{item.title}</h1>
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

export default Photos;
