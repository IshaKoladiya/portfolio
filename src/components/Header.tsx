import { useState } from "react";
import IshaLogo from "./../assets/ishalogo.svg"
import Smile from "./../assets/smile.svg"
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const linkClass = (name:string) =>
    active === name
      ? "text-cyan-200 font-medium"
      : "text-white hover:text-cyan-200 transition";

  return (
    <header className="mx-auto mt-3 w-full max-w-[95%] px-4">
      {/* Main Navbar */}
      <div className="flex items-center justify-between rounded-full bg-neutral-800 px-5 py-2">

        {/* Logo */}
          <img src={IshaLogo} alt="logo" width={60} height={60} className="ml-4"/>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <a href="#home" onClick={() => setActive("home")} className={linkClass("home")}>
            Home
          </a>
          <a href="#projects" onClick={() => setActive("projects")} className={linkClass("projects")}>
            Projects
          </a>
          <a href="#resume" onClick={() => setActive("resume")} className={linkClass("resume")}>
            Resume
          </a>
          <a href="#skills" onClick={() => setActive("skills")} className={linkClass("skills")}>
            Skills
          </a>
          <a href="#about" onClick={() => setActive("about")} className={linkClass("about")}>
            About Me
          </a>

          <button className="ml-4 rounded-full flex items-center bg-amber-300 px-6 py-2 font-medium text-neutral-900 hover:bg-amber-400 transition">
            Contact Me 
            
               <img src={Smile} alt="smile icon" className="pl-2" />
              
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
      >
        <nav className="rounded-2xl bg-neutral-800 px-6 py-5 flex flex-col gap-4 text-lg">
          <a
            href="#home"
            onClick={() => { setActive("home"); setOpen(false); }}
            className={linkClass("home")}
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={() => { setActive("projects"); setOpen(false); }}
            className={linkClass("projects")}
          >
            Projects
          </a>
          <a
            href="#resume"
            onClick={() => { setActive("resume"); setOpen(false); }}
            className={linkClass("resume")}
          >
            Resume
          </a>
          <a
            href="#skills"
            onClick={() => { setActive("skills"); setOpen(false); }}
            className={linkClass("skills")}
          >
            Skills
          </a>
          <a
            href="#about"
            onClick={() => { setActive("about"); setOpen(false); }}
            className={linkClass("about")}
          >
            About Me
          </a>

          <button className="mt-2 rounded-full bg-amber-300 py-2 font-medium text-neutral-900 hover:bg-amber-400 transition">
            Contact Me <img src={Smile} alt="smile icon" />
          </button>
        </nav>
      </div>
    </header>
  );
}
