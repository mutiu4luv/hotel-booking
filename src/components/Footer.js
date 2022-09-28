// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// const Footer = () => {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className="text-center py-3">Copyright &copy;MutiuBooking</Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { NavLink } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";

const Footer = () => (
  <footer
    className="page-footer font-small blue pt-4"
    style={{ backgroundColor: "black" }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Mutiu Booking</h5>
          <p>
            Booking, Charter Services, Cargo Services, Scratch Card Payment
            Services, Regular Services, West Coast Services etc{" "}
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <NavLink to="about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="booking">Booking</NavLink>
            </li>
            <li>
              <NavLink to="terminal">Terminal</NavLink>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">have a Quesion?</h5>
          <ul className="list-unstyled">
            <li>
              <div> +2347031911306</div>
            </li>
            <li>
              <div> +2348023411647</div>
            </li>
            <li>
              <a>+2347035548226</a>
            </li>
            <li>
              <a>chidiemmamadu@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <a NavLink="https://www.facebook.com/emmanuelmutiu"> Contact Us</a>
    </div>
  </footer>
);

export default Footer;
