import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderContent } from "./styles";
import imgLogo from "../../assets/Logo.svg";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img
            src={imgLogo}
            alt="Github Blog Logo"
          />
        </NavLink>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
