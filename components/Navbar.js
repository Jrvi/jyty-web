import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Tila valikon avaamiselle

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);
  const toggleMenu = () => setMenuOpen(!menuOpen); // Valikon avaaminen/sulkeminen

  return (
    <header>
      <div className="logo-container">
        <div className="logo">
          <Link href="/">
            <img src="logo.png" alt="Jyty Logo" />
          </Link>
        </div>
        <Link href="/" className="logo-text desktop-only">
          Jyväskylän Teekkariyhdistys
        </Link>
        <button
          className="menu-toggle mobile-only"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              href="/vappulehti"
              className="nav-link"
              onMouseEnter={() => handleMouseEnter("vappulehti")}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hoveredLink === "vappulehti" ? "#ff4500" : undefined,
              }}
            >
              Vappulehti
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/vappustriimi"
              className="nav-link"
              onMouseEnter={() => handleMouseEnter("vappustriimi")}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hoveredLink === "vappustriimi" ? "#ff4500" : undefined,
              }}
            >
              Vappustriimi
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/hallitus"
              className="nav-link"
              onMouseEnter={() => handleMouseEnter("hallitus")}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hoveredLink === "hallitus" ? "#ff4500" : undefined,
              }}
            >
              Hallitus
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/saannot"
              className="nav-link"
              onMouseEnter={() => handleMouseEnter("saannot")}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hoveredLink === "saannot" ? "#ff4500" : undefined,
              }}
            >
              Säännöt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}