import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hamburguer from "../images/bars-solid.svg";
import Close from "../images/xmark-solid.svg";

import "../styles/Menu.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isMobile && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, isOpen]);

  return (
    <div className={!isMobile ? "menu" : ""}>

      {isMobile && (
        <button onClick={toggleMenu} className="menu-button">
          {!isOpen ? (
            <img src={Hamburguer} alt="Menu Hamburguer" />
          ) : (
            <img src={Close} alt="Close" />
          )}


        </button>

      )}

      {isMobile ? (


        <ul className={`menu-items ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/"> <i>Home</i></Link>
          </li>
          <li>
            <Link to="roupas"> <i>Roupas</i></Link>
          </li>
          <li>
            <Link to="carrinho"> <i>Carrinho</i></Link>
          </li>
          <li>
            <Link to="conta"> <i>Conta</i></Link>
          </li>
        </ul>
      ) : (
        <ul className="menu-items horizontal">

          <li>
            <Link to="/"> <i>Home</i></Link>
          </li>
          <li>
            <Link to="roupas"> <i>Roupas</i></Link>
          </li>
          <li>
            <Link to="carrinho"> <i>Carrinho</i></Link>
          </li>
          <li>
            <Link to="conta"> <i>Conta</i></Link>
          </li>
        </ul>
      )}
    </div>
  );
}
