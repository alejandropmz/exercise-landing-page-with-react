import React from "react";

const Footer = (props) => {
    return (
        <footer className="d-flex flex-wrap bg-info justify-content-center align-items-center py-3 mt-4 mb-0">
            <span className="className">{props.footerDescription}</span>
        </footer>
    )
}

export default Footer;