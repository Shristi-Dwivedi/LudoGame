import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: "orange", fontSize: "30px" }}
          >
            LuDo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="./about.html">About</Nav.Link>
              <Nav.Link href="./contact.html">Contact</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="./cancellation.html">
                  Cancellation
                </NavDropdown.Item>
                <NavDropdown.Item href="./privacy policy.html">
                  Privacy Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="./terms&conditions.html">
                  Terms & Condition
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="http://localhost:5173/">Login</Nav.Link>
              <div className="text-center pt-1">
                <a
                  href="https://www.facebook.com/login.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare
                    className="facebook"
                    style={{
                      color: "#3b5998",
                      fontSize: "25px",
                      position: "relative",
                      left: "700px",
                    }}
                  ></FaFacebookSquare>
                </a>

                <a
                  href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitterSquare
                    className="twitter"
                    style={{
                      fontSize: "25px",
                      position: "relative",
                      left: "700px",
                    }}
                  ></FaTwitterSquare>
                </a>

                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagramSquare
                    className="instagram"
                    style={{
                      color: "#c32aa3",
                      fontSize: "25px",
                      position: "relative",
                      left: "700px",
                    }}
                  ></FaInstagramSquare>
                </a>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutubeSquare
                    className="youtube"
                    style={{
                      color: "red",
                      fontSize: "25px",
                      position: "relative",
                      left: "700px",
                    }}
                  ></FaYoutubeSquare>
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "550px",
        }}
      >
        <a href="http://localhost:5173/">
          <button
            style={{
              height: "50px",
              width: "320px",
              borderRadius: "20px",
              color: "orange",
              borderColor: "orange",
              background: "none",
            }}
          >
            PLAY LUDO
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
