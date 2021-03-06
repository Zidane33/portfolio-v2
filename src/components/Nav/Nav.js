import React from 'react';
import { Link } from "gatsby";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from './logo.png';
import './Nav.css';

const Nav = () => {
    const navArray = ['About', 'Projects', 'Contact', 'Resume']
    return (
        <nav className="nav">
            <Link to="/">
                <img
                className="logo"
                src={logo}
                alt="Zidane Logo"
                />
            </Link>
            <ul
            className="link-list"
            >
                {navArray.map((item, key) => (
                <li
                    key={key}
                    className="link-item"
                >
                    <Link to={`/${item.toLowerCase()}`} activeClassName="bar">
                        {item}
                    </Link>
                </li>
                ))}
                <li
                className="link-item">
                    <a href="https://github.com/Zidane33">
                        <FaGithub style={{color: 'rgb(251, 251, 251)'}}/>
                    </a>
                </li>
                <li
                className="link-item">
                    <a href="https://www.linkedin.com/in/zidane-mohamed-15002795/">
                        <FaLinkedinIn style={{color: 'rgb(251, 251, 251)'}}/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
