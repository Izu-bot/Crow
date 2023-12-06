import { useState, useEffect } from "react";
import "../styles/Menu.css";
import Hamburguer from "../images/bars-solid.svg";
import Close from "../images/xmark-solid.svg";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="menu">
            {isMobile && (
                <button onClick={toggleMenu} className='menu-button'>
                    {!isOpen ? <img src={Hamburguer} alt="Menu Hamburguer" /> : <img src={Close} alt="Close" />}
                </button>
            )}
            {isMobile ? (
                isOpen && (
                    <ul className="menu-items open">
                        <li><a href="#"><i>item 1</i></a></li>
                        <li><a href="#"><i>item 1</i></a></li>
                        <li><a href="#"><i>item 1</i></a></li>
                    </ul>
                )
            ) : (
                <ul className="menu-items horizontal">
                   <li><a href="#"><i>item 1</i></a></li>
                   <li><a href="#"><i>item 1</i></a></li>
                   <li><a href="#"><i>item 1</i></a></li>
                </ul>
            )}
        </div>
    );
}
