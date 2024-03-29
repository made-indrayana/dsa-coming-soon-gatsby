import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Double Shot Audio is'}{' '}
            <span className="text-color-main">{name || 'closed...'}</span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:hi@doubleshot-audio.com"
            >
              hi@doubleshot-audio.com
            </a>
            </span>
          </p>
        </Fade>
        <br/>
        <span className="back-to-top">
          <Link to="footer navbar-static-bottom" smooth duration={1000}>
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
          </Link>
          </span>
      </Container>
    </section>
  );
};

export default Header;
