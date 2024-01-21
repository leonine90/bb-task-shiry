'use client';

import { FC } from 'react';
import Image from 'next/image';
import { DashboardIcon, ShipmentsIcon, ProfileIcon } from '@/components/icons';
import type { NavbarItemProps } from './NavbarItem';
import NavbarItem from './NavbarItem';

const Navbar: FC = () => {
  const menuItems: NavbarItemProps[] = [
    {
      title: 'Dashboard',
      url: '/',
      icon: DashboardIcon,
    },
    {
      title: 'My Shipments',
      url: '/shipments',
      icon: ShipmentsIcon,
    },
    {
      title: 'Collaboration',
      url: '/',
      icon: ProfileIcon,
    },
    {
      title: 'Profile',
      url: '/',
      icon: ProfileIcon,
    },
  ];

  return (
    <nav className='fixed flex h-full max-w-60 flex-grow flex-col items-center bg-white py-5'>
      <Image className='mb-16' src='/Logo.svg' width={130} height={40} alt='Shipment' />
      {menuItems.map((item, index) => (
        <NavbarItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default Navbar;
