import Image from 'next/image';
import Link from 'next/link';
import { DashboardIcon, ShipmentsIcon, ProfileIcon } from '@/components/icons';

export default function Navbar() {
  const menuItems = [
    {
      title: 'Dashboard',
      url: '/',
      icon: DashboardIcon
    },
    {
      title: 'My Shipments',
      url: '/shipments',
      icon: ShipmentsIcon
    },
    {
      title: 'Collaboration',
      url: '/',
      icon: ProfileIcon
    },
    {
      title: 'Profile',
      url: '/',
      icon: ProfileIcon
    },
  ];

  return (
    <nav className='bg-white flex h-full flex-grow max-w-60 py-5 flex-col items-center'>
      <Image className='mb-16' src="/Logo.svg" width={130} height={40} alt="Shipment" />
      {menuItems.map((item) => (
        <Link className='flex items-center justify-center w-full gap-x-4 px-8 py-4 hover:border-r-2 border-r-primary hover:text-primary hover:font-bold' href={item.url} key={item.title}>
          <item.icon />
          <span className='flex-1'>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
