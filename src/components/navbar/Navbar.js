import React from 'react';
import Link from 'next/link';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },

  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },

  {
    id: 8,
    title: 'Settings',
    url: '/settings',
  },
];

const Navbar = ({ children }) => {
  return (
    <div>
      {children}
      <br />
      <Link href="/">Main Navbar</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="content">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
