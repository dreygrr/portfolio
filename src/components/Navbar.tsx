import { useEffect, useRef } from "react";
import "./navbar.scss";

import { NavLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const navMenuRef = useRef<HTMLUListElement>(null);
  const navMenuBtnRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      // só fecha se o clique NÃO for dentro do menu nem no botão
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(target) &&
        navMenuBtnRef.current &&
        !navMenuBtnRef.current.contains(target)
      ) {
        navMenuRef.current.classList.remove("active");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Fecha o menu automaticamente quando mudar de rota
  useEffect(() => {
    navMenuRef.current?.classList.remove("active");
  }, [location]);

  const toggleMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    navMenuRef.current?.classList.toggle("active");
  };

  // ajusta a variável CSS com a altura da navbar
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        document.documentElement.style.setProperty("--navbar-height", `${navbarHeight}px`);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);
  
  return (
    <>
      <nav>
        <NavLink to="/me" className="logo-link">
          <h3 className="logo">Andrey de Assis</h3>
        </NavLink>
        
        <ul className="main-links">
          <li>
            <NavLink
              to="/dev"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="nav-item-content">
                <div
                  className="item-icon"
                  style={
                    {
                      "--icon-url": `url('/src/assets/icons/dev.svg')`,
                    } as React.CSSProperties
                  }
                />
                <span>Dev</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/motion"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="nav-item-content">
                <div
                  className="item-icon"
                  style={
                    {
                      "--icon-url": `url('/src/assets/icons/motion.svg')`,
                    } as React.CSSProperties
                  }
                />
                <span>Motion</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anim"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className="nav-item-content">
                <div
                  className="item-icon"
                  style={
                    {
                      "--icon-url": `url('/src/assets/icons/anim.svg')`,
                    } as React.CSSProperties
                  }
                />
                <span>Animation</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '') + ' contact-link'}
            >
              <div className="nav-item-content">
                <div
                  className="item-icon"
                  style={
                    {
                      "--icon-url": `url('/src/assets/icons/contact.svg')`,
                    } as React.CSSProperties
                  }
                />
                <span>Contact</span>
              </div>
            </NavLink>
          </li>


          <li className="logo">
            <a ref={navMenuBtnRef} onClick={toggleMenu}>
              <div className="nav-item-content">
                <div
                  className="item-icon"
                  style={
                    {
                      "--icon-url": `url('/src/assets/icons/menu.svg')`,
                    } as React.CSSProperties
                  }
                />
              </div>
            </a>
          </li>
        </ul>
        <ul ref={navMenuRef} className="additional-links">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About the website
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/me"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About me
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };