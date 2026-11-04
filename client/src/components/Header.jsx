
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-t-[3px] border-[#34443f] bg-[#fbfcff]">

      <div className="mx-auto flex h-[109px] max-w-[1415px] items-center justify-between px-0 max-[1450px]:px-6">

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-[14px]">
          <div className="flex h-[30px] w-[48px] items-center justify-center rounded-full border-b-[3px] border-green-500">
            <span className="text-[17px] font-extrabold italic text-red-500">
              NAS
            </span>
          </div>

          <span className="text-[20.8px] font-extrabold tracking-tight text-[#55aaf0]">
            NAS Internet
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[5px] md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `rounded-[11px] px-[18px] py-[9px] text-[14px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[#eaf0ff] text-blue-600"
                    : "text-[#687a96] hover:bg-[#eaf0ff] hover:text-[#2563EB]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#526782] md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="flex flex-col gap-2 border-t border-gray-100 bg-[#fbfcff] px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "bg-[#eaf0ff] text-[#2865ff]"
                    : "text-[#687a96]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}

    </header>
  );
}

export default Header;
