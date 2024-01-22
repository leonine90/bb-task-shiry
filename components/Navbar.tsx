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
    <nav className='fixed bottom-0 z-10 flex min-h-[80px] w-full flex-grow items-center border-t-2 bg-white md:left-0 md:h-full md:w-auto md:min-w-60 md:flex-col md:border-t-0 md:py-5'>
      <Image className='mb-16 hidden md:block' src='/Logo.svg' width={130} height={40} alt='Shipment' />
      {menuItems.map((item, index) => (
        <NavbarItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default Navbar;
