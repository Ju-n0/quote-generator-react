import "./NotFound.scss";
import logo from "../../images/404.jpg";

function NotFound() {
  return (
    <div className="not-found">
      <img src={logo} alt="" className="not-found-img" />
      <p>The requested page does not exist</p>
    </div>
  );
}

export default NotFound;
