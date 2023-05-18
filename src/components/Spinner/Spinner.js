import "./Spinner.css";
import spinner from "./spinner.svg";

function Spinner() {
  return (
    <div className="bg">
      <div className="spinner">
        <img className="spin-img" src={spinner}></img>
      </div>
    </div>
  );
}

export default Spinner;
