import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {object} props
 * @param {object} props.dropdownItem
 * @returns {Element}
*/
function DropdownMenu({ dropdownItem }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="relative group border border-primary rounded-none">
      <div
        className="relative inline-block" // Use inline-block positioning
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <button className="text-primary hover:bg-foreground/25 px-3 py-2 text-sm font-medium ">
          {dropdownItem.name}
        </button>
        {isDropdownOpen && (
          <div
            className="absolute left-0 right-0"
          >
            <div className="bg-white divide-y divide-primary shadow-lg mt-2">
              {dropdownItem.subitems.map((subItem) => (
                <Link
                  key={subItem.name}
                  to={subItem.href}
                  className="block text-primary hover:bg-foreground/25 px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;