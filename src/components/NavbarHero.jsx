import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarHero() {
  return (
    <>
      <Navbar data-bs-theme="dark" className="bg-body-tertiary" expand="sm">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo MC"
              src="https://static.wixstatic.com/media/2941cc_faea7e6293ff4582bf05aea337d1dce3~mv2.png/v1/fill/w_412,h_130,al_c,lg_1,q_85,enc_auto/2941cc_faea7e6293ff4582bf05aea337d1dce3~mv2.png"
              width="140"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            Las mejores cervecerías de USA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            {/* Add your navigation links here */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHero;
