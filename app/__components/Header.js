"use client";

import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <header
      className={`${
        isHomepage ? "relative w-full z-50" : "fixed top-0 left-0 w-full z-50"
      }`}
    >
      <NavBar />
    </header>
  );
}

export default Header;
