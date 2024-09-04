import React from 'react';
import DepthItems from './DepthItems';

const MegaMenu = ({ submenus, dropdown }) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div className={`mega-menu ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <div className="mega-menu-column" key={index}>
          {submenu.submenu ? (
            <a href={`#${submenu.title.replace(/\s+/g, '_').toLowerCase()}`} style={linkStyle}>
              <h3>{submenu.title}</h3>
            </a>
          ) : (
            <h3>{submenu.title}</h3>
          )}
          {submenu.submenu && (
            <ul>
              {submenu.submenu.map((item, index) => (
                <DepthItems items={item} key={index} depthLevel={1} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
