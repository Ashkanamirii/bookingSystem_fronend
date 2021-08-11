import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer className="main-footer ">
      <div className="footer-middle">
        <div className="">
          <div className="row w-100">
            <div className="col-lg-3 col-md-4">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Phone: 073******</li>
                <li>Address: EveryWhere</li>
                <li>Email: ipsum dolor</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">lorem ipsum dolor</Link>
                </li>
                <li>
                  <Link to="#">lorem ipsum dolor</Link>
                </li>
                <li>
                  <Link to="#">lorem ipsum dolor</Link>
                </li>
                <li>
                  <Link to="#">lorem ipsum dolor</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                     <Link to="#">lorem ipsum dolor</Link>
                </li>
                <li>
                     <Link to="#">lorem ipsum dolor</Link>
                </li>
                <li>
                     <Link to="#">lorem ipsum dolor</Link>
                </li>
                <li>
                     <Link to="#">lorem ipsum dolor</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center text-muted">
              &copy;{new Date().getUTCFullYear()} SuperBooking App - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    text-align: center;
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGray);
    text-decoration: none;
  }

  ul li a:hover {
    color: var(--mainLightGray);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
