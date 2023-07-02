import { NavLink } from "react-router-dom";
import styled from "styled-components";

import scss from "./Header.module.scss"

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Header = () => {
    return (
        <section className={scss.header}>
            <nav>
                <StyledLink className={scss.navLink} to="/">Home</StyledLink>
                <StyledLink className={scss.navLink} to="/movies">Movies</StyledLink>
            </nav>
        </section>
    )
}

export default Header;