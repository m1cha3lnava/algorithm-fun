import React from 'react';

const NavList = (props) => {
    return (
        <li className={props.style}>
        <a className="nav-link" href={props.link}>
          {props.text}
        </a>
      </li>
    );
};

export default NavList;