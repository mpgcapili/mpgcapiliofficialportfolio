import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useEffect, useRef, useState } from "react";
/* Import locomotive-scroll */
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

/* Locomotive scroll instance */
const NavBar = () => {

  const fullUrl = useLocation();
  const [url, setUrl] = useState(fullUrl)
  const currUrl = fullUrl.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const featuredWork: string[] = ["adminui", "designimport", "quickstart", "aiguardrails"]


  // close nav when width is greater than 767px
  useEffect(() => {
    // handling resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 767) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', () => {
      if (window.innerWidth > 767) {
        setIsOpen(false);
      }
    });

    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []) //make sure to run this only once.

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 35) {
        setShowNav(false);
        setIsOpen(false); // Pro-UX: Auto-close the mobile menu if they start scrolling!
      }
      // If we are scrolling UP
      else {
        setShowNav(true);
      }
      // Update the last scroll position to the current one
      setLastScrollY(window.scrollY);
    }

    const handleClickOutside = (e: MouseEvent) => {
      // check if nav.current is div nav (using ref={navRef})
      // and if the click (e.target as node) is not being contained in nav
      // then close it
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    // Event Listeners
    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [lastScrollY, isOpen])

  // to remove that flicker effect
  const [currURL, setURL] = useState(["aboutme", "works"].find(keyword => currUrl.includes(keyword)));
  // const [clicking, setClicking] = useState("");

  const handleNavClick = (path: string) => {
    setURL(path); // define which is selected
    setIsOpen(!isOpen);
  }
  const LinkComponent = () => (
    <>
      <Link className="react-link" onClick={() => handleNavClick("works")} to="/works">
        <li className={` ${currURL === "works" ? "selected works" : " "}`}>WORKS</li>
      </Link>
      <Link className="react-link" onClick={() => handleNavClick("aboutme")} to="/aboutme">
        <li className={` ${currURL === "aboutme" ? "selected aboutme" : " "}`}>ABOUT ME</li>
      </Link>
    </>
  )

  // make sure to use currurl.indcludes logic, do i need this?
  // i mean we are checking first the currurl.includes anyway, so if
  // useEffect(() => {
  //   setClicking("");
  // }, [currUrl]);

  const currPage = featuredWork.find(keyword => currUrl.includes(keyword));
  const iconColor = `${currPage}-color`;
  const navbarclasses: string = [
    "navbar",
    isOpen ? "nav-open" : "nav-close",
    showNav ? "show-nav-bar" : "hide-nav-bar",
    currPage
  ].filter(Boolean).join(" ");
  return (
    <>
      <div
        ref={navRef}
        className={navbarclasses}>
        <div>
          <h3 style={{ fontFamily: "ClashDisplay, sans-serif" }}>MIGUEL CAPILI</h3>
          <ul className="nav-items hide">
            <LinkComponent />
          </ul>
          <div >
            <theme-toggle></theme-toggle>
            <wa-button className="hamburger" variant="neutral" appearance="plain"
              pill size="small" onClick={() => setIsOpen(!isOpen)}>
              <wa-icon className={`${iconColor}`} name={isOpen ? "x" : "bars"} ></wa-icon>
            </wa-button>
          </div>
        </div>
        <ul className={`nav-links ${isOpen ? "show-link" : "remove-link"} `}>
          <LinkComponent />
        </ul>
      </div >
    </>
  )
}
export default NavBar