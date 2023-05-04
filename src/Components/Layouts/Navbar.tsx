import React from "react";
import Styles from "./Navbar.module.css";
import Link from "next/link";
import Logo from "../Icons/Logo";

import HamburgerMenu from "../Icons/HamburgerMenu";
import ProductCard from "./ProductCard";
import DeveloperCard from "./DeveloperCard";

const Navbar = () => {
  return (
    <nav className={Styles.navContainer}>
      <section className={Styles.logoSearch}>
        <div className={Styles.logo}>
          <Logo />
        </div>
        <div className={Styles.search}>
          {/* //todo: add search icon */}
          <input type="text" placeholder="search for packages" />
        </div>
      </section>

      <section className={Styles.resources}>
        <div className={Styles.hamburgerMenu}>
          <HamburgerMenu />
        </div>
        <ul className={Styles.mainLinks}>
          <ProductCard />
          <DeveloperCard />
          <li>
            <Link href="#">Packages</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
        <div>
          <button>Sign up</button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
