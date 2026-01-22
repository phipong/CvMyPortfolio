import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
    { name: "Skill", path: "/skill" },
  ];

  return (
    <nav className="w-full max-w-4xl mx-auto">
      {/* Desktop */}
      <div className="hidden md:block bg-zinc-800 p-4 rounded-full">
        <ul className="flex justify-center gap-12 text-white text-lg">
          {links.map((item, i) => (
            <li key={i} className="relative group">
              <Link
                to={item.path}
                onClick={() => setActive(item.path)}
                className="relative z-10 px-4 py-2"
              >
                {item.name}

                {/* Bubble */}
                <span
                  className={`
                    absolute inset-0 -z-10 rounded-full
                    bg-violet-400
                    transition-all duration-300 ease-out
                    ${
                      active === item.path
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-zinc-800 p-3 rounded-2xl">
        <div className="flex justify-between items-center">
          <img className="w-[10%]" src="https://logodix.com/logo/1902534.png" alt="" />

          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <ul className="mt-4 space-y-2">
            {links.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  onClick={() => setActive(item.path)}
                  className={`
                    block px-4 py-2 rounded-xl text-white
                    transition
                    ${
                      active === item.path ? "bg-violet-400" : "hover:bg-white/10"
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
