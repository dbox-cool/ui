import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DropdownMenu from './DropdownMenu';

/** @type {string[]} */
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * A Simple Navbar
 * @returns {Element}
 */
export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [navigation, setNavigation ] = useState([
    {
      name: 'INICIO',
      href: '/',
      current: false,
      dropdown: false,
      subitems: [],
    },
    // {
    //   name: 'EVENTOS',
    //   href: '/evento',
    //   current: false,
    //   dropdown: false,
    //   subitems: [],
    // },
    {
      name: 'SOBRE NOSOTROS',
      href: '/sobrenosotros',
      current: false,
      dropdown: false,
      subitems: [],
    },
    {
      name: 'DIRECCIÓN Y HORARIO',
      href: '/direccionyhorario',
      current: false,
      dropdown: false,
      subitems: [],
    },
    {
      name: 'ESPACIOS',
      href: '/espacios',
      current: false,
      dropdown: false,
      subitems: [],
    },
    {
      name: 'NUESTROS MENÚS',
      href: '/menus',
      current: false,
      dropdown: true,
      subitems: [
        {
          name: 'CARTA',
          href: '/menus',
          current: false,
          dropdown: false,
          subitems: [],
        },
        {
          name: 'MENU EJECUTIVO',
          href: '/menu-del-mar',
          current: false,
          dropdown: false,
          subitems: [],
        }
      ],
    },
    // {
    //   name: 'MENÚ EJECUTIVO',
    //   href: '/menu-del-mar',
    //   current: false,
    //   dropdown: false,
    //   subitems: [],
    // },
    // {
    //   name: 'RESERVACIONES',
    //   href: '/reservaciones',
    //   current: false,
    //   dropdown: false,
    //   subitems: [],
    // },
  ]);

    useEffect(() => {
        const updatedNavigation = navigation.map((item) => ({
        ...item,
        current: item.href === window.location.pathname,
        }));
        setNavigation(updatedNavigation);
        setMobileMenuOpen(false);
    }, [navigation]);
//   }, [window.location.pathname]);

  return (
    <div className="h-16 fixed shadow-xl z-50 w-full bg-gradient-to-r from-background via-main to-background" aria-hidden="true">
      <nav className="absolute -top-0.5 w-full bg-background">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-main hover:bg-lightgray hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                //   <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    "..."
                ) : (
                    "^^^"
                //   <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/" className="cursor-pointer">
                  <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex items-center">
                <div className="flex space-x-4 items-center relative">
                  {navigation.map((item, index) => (
                    <div key={item.name} className="relative group">
                      {item.dropdown === true ? (
                        <DropdownMenu
                          key={item.name}
                          dropdownItem={item}
                        />
                      ) : (
                        <Link
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-main bg-opacity-10 text-main'
                              : 'text-main hover:bg-main hover:bg-opacity-25 cursor-pointer',
                            'px-3 py-2 text-sm font-medium',
                            index >= navigation.length - 1
                              ? 'border border-main rounded-none'
                              : ''
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 flex flex-col gap-4 shadow-2xl items-center">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative group">
                  {item.dropdown === true ? (
                    <DropdownMenu
                      key={item.name}
                      dropdownItem={item}
                    />
                  ) : (
                    <Link
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-main bg-opacity-10 text-main'
                          : 'text-main hover:bg-main hover:bg-opacity-25',
                        'px-3 py-2 text-sm font-medium',
                        index === navigation.length - 1
                          ? 'border border-main rounded-none'
                          : ''
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
