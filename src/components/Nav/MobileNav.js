import React from 'react';
import { Link } from 'gatsby';
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import logo from './logo.png'
import './mobile.css'


class MobileNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navArray: ['About', 'Projects', 'Contact', 'Resume'],
            toggle: false
        }
    }

    toggleMenu = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <nav className="nav">
                <Link to="/">
                    <img
                    className="logo"
                    src={logo}
                    alt="Zidane Logo"
                    />
                </Link>
                <FaBars style={{color: 'rgb(251, 251, 251)', marginLeft:'90%', marginTop:'5%', cursor: 'pointer'}} onClick={this.toggleMenu}/>
                <ul
                className="link-list"
                style={{opacity: this.state.toggle ? '100': '0', zIndex: this.state.toggle ? '-10': 10}}
                >
                    {this.state.navArray.map((item, key) => (
                    <li
                        key={key}
                        className="link-item"
                    >
                        <Link to={`/${item.toLowerCase()}`}>
                            {item}
                        </Link>
                    </li>
                    ))}
                    <li
                    className="link-item">
                        <Link to="https://github.com/Zidane33">
                            <FaGithub style={{color: 'rgb(251, 251, 251)'}}/>
                        </Link>
                    </li>
                    <li
                    className="link-item">
                        <Link to="https://www.linkedin.com/in/zidane-mohamed-15002795/">
                            <FaLinkedinIn style={{color: 'rgb(251, 251, 251)'}}/>
                        </Link>
                    </li>
                </ul>
                <span className="bar"></span>
            </nav>
        );
    }
}

export default MobileNav;