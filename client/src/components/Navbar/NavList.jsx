import React from 'react';

const NavList = ({ListStyle, link, text}) => {
    return (
        <li className={ListStyle}>
        <a className="nav-link" href={link}>
          {text}
        </a>
      </li>
    );
};

export default NavList;