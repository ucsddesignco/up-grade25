import { NavLink } from 'react-router';
import './Navbar.scss';
import Logo from '../../assets/logo.svg?react';
import Button from '../Button/Button';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const NAV_ITEMS = [
  { label: 'Overview', path: '/overview' },
  { label: 'Roles', path: '/roles' },
  { label: 'FAQ', path: '/faq' }
];
export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav>
      <div id="desktop-nav">
        <NavLink to="/" className="logo-container">
          <Logo />
          <p>UP-Grade</p>
        </NavLink>
        <div className="nav-items-container">
          <ul>
            {NAV_ITEMS.map(item => (
              <li key={item.path}>
                <NavLink to={item.path}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <Button text="Apply Now" link="https://forms.gle/1zNawC4iTSCEHEhd7" />
        </div>
      </div>

      <div id="mobile-nav">
        <NavLink to="/" className="logo-container">
          <Logo width={24} height={24} viewBox="0 0 32 32" />
          <p>UP-Grade</p>
        </NavLink>

        <Dialog.Root open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
          <Dialog.Trigger asChild className="DialogTrigger">
            <button className="hamburger-icon">
              <div className={`hamburger-icon-container ${isMobileNavOpen ? 'open' : ''}`}>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </button>
          </Dialog.Trigger>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <div id="mobile-nav-items" aria-expanded={isMobileNavOpen}>
              <ul>
                <NavLink to="/" className="logo-container">
                  <Logo />
                  <p>UP-Grade</p>
                </NavLink>
                {NAV_ITEMS.map(item => (
                  <li key={item.path} onClick={() => setIsMobileNavOpen(false)}>
                    <NavLink to={item.path}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
              <Button text="Apply Now" link="https://forms.gle/1zNawC4iTSCEHEhd7" />
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </nav>
  );
}
