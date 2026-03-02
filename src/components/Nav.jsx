import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [bubbleStyle, setBubbleStyle] = useState({});
  const navRef = useRef(null);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Personal", id: "personal" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skill" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // Move bubble on load / click / scroll
  useEffect(() => {
    const activeBtn = navRef.current?.querySelector(
      `[data-id="${active}"]`
    );

    if (activeBtn) {
      setBubbleStyle({
        width: activeBtn.offsetWidth + "px",
        left: activeBtn.offsetLeft + "px",
      });
    }
  }, [active]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop */}
      <nav
        ref={navRef}
        className="hidden md:block relative bg-zinc-800 px-6 py-3 rounded-full"
      >
        {/* Sliding Bubble */}
        <span
          className="absolute top-2 bottom-2 ml-6 bg-violet-500 rounded-full transition-all duration-500 ease-in-out"
          style={bubbleStyle}
        />

        <ul className="relative flex gap-10 text-white text-lg">
          {links.map((item) => (
            <li key={item.id}>
              <button
                data-id={item.id}
                onClick={() => handleClick(item.id)}
                className="relative z-10 px-4 py-2"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <div className="md:hidden bg-zinc-800 p-3 rounded-2xl w-full">
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
            {links.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-xl text-white transition ${
                    active === item.id
                      ? "bg-violet-400"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}