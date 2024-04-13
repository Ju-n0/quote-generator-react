import peaceLogo from "../../images/peace3.jpg";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

function Header() {
  return (
    <Segment>
      <div className="header-firstpart">
        <img src={peaceLogo} className="App-logo" alt="Peace logo" />
        <h1 className="header-firstpart-title">Take it easy !</h1>
      </div>
      <Menu>
        <NavLink
          key="randomQuote"
          to="/"
          className={({ isActive }) => {
            return isActive ? "active item" : "item";
          }}
        >
          Random quote
        </NavLink>
        <NavLink
          key="allCategories"
          to="/allcategories"
          className={({ isActive }) => {
            return isActive ? "active item" : "item";
          }}
        >
          All categories
        </NavLink>
        <NavLink
          key="searchAuthor"
          to="/searchAuthor"
          className={({ isActive }) => {
            return isActive ? "active item" : "item";
          }}
        >
          Search an author
        </NavLink>
      </Menu>
    </Segment>
  );
}

export default Header;
