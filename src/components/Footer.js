import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <p>
              <a href="mailto:gautamvipin2002@gmail.com">gautamvipin2002@gmail.com</a>
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vipingautam07/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://x.com/vipingautam07_/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://leetcode.com/vipingautam07/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/vipingautam07/"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <a href="https://www.buymeacoffee.com/vipingautam" target="_blank" rel="noopener noreferrer" className="buy-coffee-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4v-2z"/>
              </svg>
              <span>Buy Me a Coffee</span>
            </a>
            <p>Copyright 2026. All Rights Reserved to VIPIN.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
