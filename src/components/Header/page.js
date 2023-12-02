"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      if (scroll >= 50) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isHeaderFixed ? "header-fixed" : ""}>
      <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center pb-0 ">
        <div className="container">
          <Link href={"/"} className="navbar-brand d-flex w-50 me-auto">
            <span
              className="fs-5 fw-bold text-uppercase"
              aria-label="brandlogo"
            >
              Frontend Developer
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse collapse  main-nav justify-content-end "
            id="collapseExample"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#case-study-section" className="nav-link">
                  Case Studies
                </a>
              </li>
              <li className="nav-item">
                <a href="#service-exp" className="nav-link">
                  Tech
                </a>
              </li>
              <li className="nav-item">
                <a href={"#contact-us"} className="nav-link">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
