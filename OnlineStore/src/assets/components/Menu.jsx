import { useState } from "react"
import "../styles/Menu.css"
import Hamburguer from "../images/bars-solid.svg";
import Close from "../images/xmark-solid.svg"

export default function Menu(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="menu">
            <button onClick={toggleMenu} className="menu-button">
                {(!isOpen) ? <img src={Hamburguer} /> : <img src={Close} />}
            </button>
            {isOpen && (
                <div className={`menu-items ${isOpen ? 'open' : ''}`}>
                    <a href="#">item 1</a>
                    <a href="#">item 2</a>
                    <a href="#">item 3</a>
                </div>
            )}
            
        </div>
    )
}