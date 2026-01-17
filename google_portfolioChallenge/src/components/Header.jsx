import React from 'react';

const Header = () => {
  const navItems = [
    { name: '[Root]', href: '#' },
    { name: '[Projects]', href: '#projects' },
    { name: '[Logs]', href: '#logs' },
  ];

  return (
    <header style={{ padding: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
