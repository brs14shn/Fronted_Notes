import Button from "./styles/Button.styled";
import StyledHeader from "./styles/Header.styled";
// import img2 from "../images/logo_white.png";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Button color="#A62440">APPLY COURCES</Button>
        <Button bg="#A62440">TALK TO ADVİSER</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
