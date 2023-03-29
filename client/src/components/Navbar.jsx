import React from "react";
import Button from './Button';


const Navbar = (props) => {
    const { className, navbarh1ClassName, text, description, support, src, alt } = props;

    return (
        <div
            className = {className} >
            <h1 className={navbarh1ClassName} >{ text }</h1>
            <Button text="Home"></Button>
            <img src={ src } alt={ alt }/>       
            <p>{ description }</p>
            <p>{ support }</p>
        </div>
    )
};

Navbar.defaultProps = {
    className: "",
    text: "",
    description: "",
    support: "",
    src: "",
    alt: "",
};

export default Navbar;