
import React, { useState } from 'react';
import DepthItems from './DepthItems';

const MegaMenu = ({ submenus }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div className="mega-menu-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="choose-topic">Choose a Topic</span>
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
                {submenu.submenu.map((item, subIndex) => (
                  <DepthItems items={item} key={subIndex} depthLevel={1} />
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;

