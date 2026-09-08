"use client";

import HeroNavBar from "./HeroNavBar";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // The homepage hero renders HeroNavBar itself, overlaid on the dark artwork.
  if (isHomepage) {
    return null;
  }

  // Inner pages are white, so the same nav runs in its light variant on a
  // plain bar that sits in the flow and scrolls away with the page.
  return (
    <header className="relative w-full bg-white">
      <HeroNavBar variant="light" />
    </header>
  );
}

export default Header;
