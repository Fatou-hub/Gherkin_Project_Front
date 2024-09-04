import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import Dropdown from '././Dropdown';

const DepthItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropdown && ref.current && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title} <span className="arrow" />
          </button>
          {depthLevel === 0 ? (
            <MegaMenu submenus={items.submenu} dropdown={dropdown} />
          ) : (
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          )}
        </>
      ) : (
        <Link to={`/Backstage/${items.title.replace(/\s+/g, '_')}`}>
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default DepthItems;
